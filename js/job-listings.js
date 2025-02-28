document.addEventListener("DOMContentLoaded", function () {
    let jobsTable = document.getElementById("jobList");
    let user = JSON.parse(localStorage.getItem("loggedInUser")); // Check if user is logged in

    if (jobsTable) {
        let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

        jobsTable.innerHTML = ""; // Clear previous jobs

        jobs.forEach((job, index) => {
            if (job.approved) { // Show only approved jobs
                let listItem = document.createElement("li");
                listItem.innerHTML = `
                    <strong>${job.title}</strong> at <em>${job.company}</em> <br>
                    <p>${job.description}</p>
                    ${user ? 
                        `<a href="apply.html" onclick="applyForJob(${index})" class="apply-btn">Apply Now</a>` 
                        : 
                        `<p class="login-message">To apply, <a href="login.html">log in</a> or <a href="signup.html">sign up</a>.</p>`}
                    <hr>
                `;
                jobsTable.appendChild(listItem);
            }
        });
    }
});

// ✅ Function to store job details before applying
function applyForJob(index) {
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    if (!jobs[index]) {
        alert("⚠️ Job not found. Please try again.");
        return;
    }
    localStorage.setItem("selectedJob", JSON.stringify(jobs[index]));
    window.location.href = "apply.html";
}
