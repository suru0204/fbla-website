document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user) {
        document.getElementById("logoutButton").style.display = "block";
        document.getElementById("loginNav").style.display = "none";
        document.getElementById("signupNav").style.display = "none";
    }
});

function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    window.location.href = "../index.html"; // Redirects to index.html
}

document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    if (user && user.role === "student") {
        let employerDashboardLink = document.getElementById("employerDashboardLink");
        if (employerDashboardLink) {
            employerDashboardLink.style.display = "none"; // Hides employer dashboard link for students
        }
    }
});
