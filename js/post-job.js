document.addEventListener("DOMContentLoaded", function () {
    let jobForm = document.getElementById("jobForm");

    if (jobForm) {
        jobForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page refresh

            let title = document.getElementById("jobTitle").value.trim();
            let company = document.getElementById("companyName").value.trim();
            let location = document.getElementById("jobLocation").value.trim(); // New location input
            let description = document.getElementById("jobDescription").value.trim();

            if (!title || !company || !location || !description) {
                alert("Please fill out all fields.");
                return;
            }

            let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

            jobs.push({
                title: title,
                company: company,
                location: location, // Store location
                description: description,
                approved: false // Default to false until admin approves
            });

            localStorage.setItem("jobs", JSON.stringify(jobs));
            alert("Job posted successfully! Awaiting admin approval.");

            // Reset form
            jobForm.reset();
        });
    }
});

