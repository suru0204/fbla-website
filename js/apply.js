document.addEventListener("DOMContentLoaded", function () {
    let applyForm = document.getElementById("applyForm");
    let jobSelect = document.getElementById("jobSelect");

    // Retrieve job details from localStorage (from job listing page)
    let selectedJob = JSON.parse(localStorage.getItem("selectedJob")) || {};
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    // Populate job dropdown dynamically
    jobSelect.innerHTML = `<option value="">-- Select a Job --</option>`; // Default option

    jobs.forEach((job) => {
        if (job.approved) {
            let option = document.createElement("option");
            option.value = job.title;
            option.textContent = `${job.title} at ${job.company}`;
            jobSelect.appendChild(option);
        }
    });

    // Auto-select the job if it was pre-selected
    if (selectedJob.title && selectedJob.company) {
        jobSelect.value = selectedJob.title;
    } else {
        alert("⚠️ No job selected! Please apply from the job listings page.");
        window.location.href = "job-listings.html"; // Redirect back to job listings
    }

    if (applyForm) {
        applyForm.addEventListener("submit", function (event) {
            event.preventDefault();

            let name = document.getElementById("studentName").value;
            let email = document.getElementById("studentEmail").value;
            let jobTitle = jobSelect.value;
            let companyName = selectedJob.company || "Unknown"; // Fallback in case it's missing
            let resumeInput = document.getElementById("resume");
            let resume = resumeInput.files[0];

            if (!name || !email || !jobTitle || !resume) {
                alert("⚠️ Please fill out all fields and upload a resume.");
                return;
            }

            let reader = new FileReader();
            reader.onload = function (e) {
                let applications = JSON.parse(localStorage.getItem("applications")) || [];

                applications.push({
                    studentName: name,
                    email: email,
                    jobTitle: jobTitle,
                    company: companyName,
                    resume: e.target.result,
                    status: "Pending"
                });

                localStorage.setItem("applications", JSON.stringify(applications));

                alert("✅ Application submitted successfully!");
                applyForm.reset();
                localStorage.removeItem("selectedJob"); // Clear selected job after applying
            };

            reader.readAsDataURL(resume);
        });
    }
});
