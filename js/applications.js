document.addEventListener("DOMContentLoaded", function () {
    let applicationsTable = document.getElementById("applicationsTable");

    if (applicationsTable) {
        let applications = JSON.parse(localStorage.getItem("applications")) || [];

        applicationsTable.innerHTML = ""; // Clear table before adding rows

        applications.forEach((app, index) => {
            let row = applicationsTable.insertRow();
            row.setAttribute("id", `row-${index}`); // ✅ Assign an ID

            // ✅ Convert Base64 to Blob URL for proper rendering
            let resumeLink = "No Resume Available";
            if (app.resume.startsWith("data:")) {
                let byteCharacters = atob(app.resume.split(",")[1]);
                let byteNumbers = new Array(byteCharacters.length);
                for (let i = 0; i < byteCharacters.length; i++) {
                    byteNumbers[i] = byteCharacters.charCodeAt(i);
                }
                let byteArray = new Uint8Array(byteNumbers);
                let blob = new Blob([byteArray], { type: "application/pdf" }); // ✅ Store as PDF blob
                let blobUrl = URL.createObjectURL(blob);
                resumeLink = `<a href="${blobUrl}" target="_blank">View Resume</a>`; // ✅ Open in a new tab
            }

            row.innerHTML = `
                <td>${app.studentName || "Unknown"}</td>
                <td>${app.email}</td>
                <td>${app.jobTitle || "N/A"}</td>
                <td>${app.company || "N/A"}</td>
                <td>${resumeLink}</td>
                <td id="status-${index}">
                    ${app.status === "Approved" ? `<span class="approved">Approved</span>` : 
                      app.status === "Rejected" ? `<span class="rejected">Rejected</span>` : 
                      `<button class="approve-btn" onclick="approveApplication(${index})">Approve</button>
                       <button class="reject-btn" onclick="rejectApplication(${index})">Reject</button>`}
                </td>
                <td id="remove-${index}">
                    ${app.status !== "Pending" ? `<button class="remove-btn" onclick="removeApplication(${index})">Remove</button>` : ""}
                </td>
            `;
        });
    }
});

// ✅ Approve Application
function approveApplication(index) {
    let applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications[index].status = "Approved";
    localStorage.setItem("applications", JSON.stringify(applications));

    let statusCell = document.getElementById(`status-${index}`);
    let removeCell = document.getElementById(`remove-${index}`);

    if (statusCell) statusCell.innerHTML = `<span class="approved">Approved</span>`;
    if (removeCell) removeCell.innerHTML = `<button class="remove-btn" onclick="removeApplication(${index})">Remove</button>`; // ✅ Add Remove button
}

// ❌ Reject Application
function rejectApplication(index) {
    let applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications[index].status = "Rejected";
    localStorage.setItem("applications", JSON.stringify(applications));

    let statusCell = document.getElementById(`status-${index}`);
    let removeCell = document.getElementById(`remove-${index}`);

    if (statusCell) statusCell.innerHTML = `<span class="rejected">Rejected</span>`;
    if (removeCell) removeCell.innerHTML = `<button class="remove-btn" onclick="removeApplication(${index})">Remove</button>`; // ✅ Add Remove button
}

// 🗑️ Remove Application
function removeApplication(index) {
    let applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications.splice(index, 1); // ✅ Remove the application from the array
    localStorage.setItem("applications", JSON.stringify(applications));

    let row = document.getElementById(`row-${index}`);
    if (row) row.remove(); // ✅ Instantly remove from UI
}

// Detect changes in localStorage and refresh
window.addEventListener("storage", function (event) {
    if (event.key === "applications") {
        location.reload();
    }
});








