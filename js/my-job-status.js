document.addEventListener("DOMContentLoaded", function () {
    let jobStatusTable = document.getElementById("jobStatusTable");
    let applications = JSON.parse(localStorage.getItem("applications")) || [];

    if (jobStatusTable) {
        jobStatusTable.innerHTML = ""; // Clear table before adding rows

        applications.forEach((app, index) => {
            let row = jobStatusTable.insertRow();
            row.setAttribute("id", `row-${index}`);

            row.innerHTML = `
                <td>${app.jobTitle || "N/A"}</td>
                <td>${app.company || "N/A"}</td>
                <td class="${app.status.toLowerCase()}">
                    ${app.status === "Approved" ? "✅ Approved" : 
                      app.status === "Rejected" ? "❌ Rejected" : 
                      "🟠 In Progress"}
                </td>
                <td><button class="remove-btn" onclick="removeApplication(${index})">Remove</button></td>
            `;
        });
    }
});

// 🗑️ Remove Application Function
function removeApplication(index) {
    let applications = JSON.parse(localStorage.getItem("applications")) || [];
    applications.splice(index, 1); // Remove from array
    localStorage.setItem("applications", JSON.stringify(applications));

    let row = document.getElementById(`row-${index}`);
    if (row) row.remove(); // Instantly remove from UI
}
