document.addEventListener("DOMContentLoaded", function () {
    let jobsTable = document.getElementById("adminJobList");
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];

    if (jobsTable) {
        jobsTable.innerHTML = ""; // Clear table

        jobs.forEach((job, index) => {
            if (job.approved) { // Only show approved jobs
                let row = jobsTable.insertRow();
                row.innerHTML = `
                    <td>
                        <strong>${job.title}</strong><br>
                        <small>${job.description || "No description available."}</small>
                    </td>
                    <td>${job.company}</td>
                    <td>✅ Approved</td>
                    <td>
                        <button class="remove-btn" onclick="removeJob(${index})">Remove</button>
                    </td>
                `;
            }
        });
    }
});

// Function to remove approved job listings
function removeJob(index) {
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    if (jobs[index].approved) {
        jobs.splice(index, 1);
        localStorage.setItem("jobs", JSON.stringify(jobs));
        alert("🗑️ Job Listing Removed!");
        location.reload();
    } else {
        alert("⚠️ You can only remove approved jobs.");
    }
}

