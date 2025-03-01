document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));
    console.log("User data:", user); // Debugging: Check user data in console

    // Show/Hide elements based on login state
    if (user) {
        let logoutButton = document.getElementById("logoutButton");
        let loginNav = document.getElementById("loginNav");
        let signupNav = document.getElementById("signupNav");

        if (logoutButton) logoutButton.style.display = "block";
        if (loginNav) loginNav.style.display = "none";
        if (signupNav) signupNav.style.display = "none";
    }
});

function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");

    // Redirect based on hosting environment
    let basePath = window.location.pathname.includes("/pages/") ? "../index.html" : "index.html";
    window.location.href = basePath; 
}
function logout() {
    localStorage.removeItem("loggedInUser");
    alert("Logged out successfully!");
    window.location.href = "../index.html"; // Redirects to the home page
}
document.addEventListener("DOMContentLoaded", function () {
    let user = JSON.parse(localStorage.getItem("loggedInUser"));

    // Hide employer dashboard link for students
    if (user && user.role === "student") {
        let employerDashboardLink = document.getElementById("employerDashboardLink");
        if (employerDashboardLink) {
            employerDashboardLink.style.display = "none";
        }
    }
});
