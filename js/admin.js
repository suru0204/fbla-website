document.addEventListener("DOMContentLoaded", function () {
    let jobsTable = document.getElementById("pendingJobs");
    let applicationsTable = document.getElementById("allApplications");

    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    let applications = JSON.parse(localStorage.getItem("applications")) || [];

    // 🏗️ Show only PENDING job listings (Admins can approve/reject)
    if (jobsTable) {
        jobsTable.innerHTML = ""; // Clear table before adding new rows

        jobs.forEach((job, index) => {
            if (!job.approved) { // Only show jobs that are NOT approved
                let row = jobsTable.insertRow();
                row.innerHTML = `
                    <td>${job.title}</td>
                    <td>${job.company}</td>
                    <td>
                        <button class="approve-btn" onclick="approveJob(${index})">Approve</button>
                        <button class="reject-btn" onclick="rejectJob(${index})">Reject</button>
                    </td>
                `;
            }
        });
    }

    // 🎓 Show all student applications WITH Remove button after approval/rejection
    if (applicationsTable) {
        applicationsTable.innerHTML = ""; // Clear table before adding new rows

        applications.forEach((app, index) => {
            let row = applicationsTable.insertRow();
            row.setAttribute("id", `row-${index}`);

            let resumeLink = app.resume 
                ? `<a href="${app.resume}" target="_blank">View Resume</a>`
                : "No Resume Available";

            row.innerHTML = `
                <td>${app.studentName || "Unknown"}</td>
                <td>${app.email}</td>
                <td>${app.jobTitle || "N/A"}</td>
                <td>${app.company || "N/A"}</td>
                <td>${resumeLink}</td>
                <td id="status-${index}">
                    ${getStatusHTML(app.status, index)}
                </td>
                <td id="remove-${index}">
                    ${app.status !== "Pending" ? `<button class="remove-btn" onclick="removeApplication(${index})">Remove</button>` : ""}
                </td>
            `;
        });
    }
});

// ✅ Returns HTML for status and buttons
function getStatusHTML(status, index) {
    if (status === "Approved") {
        return `<span class="approved">Approved</span>`;
    } else if (status === "Rejected") {
        return `<span class="rejected">Rejected</span>`;
    } else {
        return `
            <button class="approve-btn" onclick="approveApplication(${index})">Approve</button>
            <button class="reject-btn" onclick="rejectApplication(${index})">Reject</button>
        `;
    }
}

// ✅ Approve Application
function approveApplication(index) {
    updateApplicationStatus(index, "Approved");
}

// ❌ Reject Application
function rejectApplication(index) {
    updateApplicationStatus(index, "Rejected");
}

// 🔄 Update Application Status & Show Remove Button
function updateApplicationStatus(index, status) {
    let applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications[index].status = status;
    localStorage.setItem("applications", JSON.stringify(applications));

    let statusCell = document.getElementById(`status-${index}`);
    let removeCell = document.getElementById(`remove-${index}`);

    if (statusCell) statusCell.innerHTML = `<span class="${status.toLowerCase()}">${status}</span>`;
    if (removeCell) removeCell.innerHTML = `<button class="remove-btn" onclick="removeApplication(${index})">Remove</button>`; // ✅ Fix: Ensure Remove button appears
}

// 🗑️ Remove Application
function removeApplication(index) {
    let applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications.splice(index, 1);
    localStorage.setItem("applications", JSON.stringify(applications));

    let row = document.getElementById(`row-${index}`);
    if (row) row.remove();
}

// ✅ Approve Job
function approveJob(index) {
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs[index].approved = true;
    localStorage.setItem("jobs", JSON.stringify(jobs));
    alert("✅ Job Approved!");
    location.reload();
}

// ❌ Reject Job
function rejectJob(index) {
    let jobs = JSON.parse(localStorage.getItem("jobs")) || [];
    jobs.splice(index, 1); // Remove job from list
    localStorage.setItem("jobs", JSON.stringify(jobs));
    alert("❌ Job Rejected!");
    location.reload();
}

// Detect changes in localStorage and refresh
window.addEventListener("storage", function (event) {
    if (event.key === "applications") {
        location.reload();
    }
});
