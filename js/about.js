document.addEventListener("DOMContentLoaded", function () {
    let homeLink = document.getElementById("homeLink");
    let user = localStorage.getItem("loggedInUser");

    // ✅ Check if the script is running inside the /pages/ folder
    let isInsidePagesFolder = window.location.pathname.includes("/pages/");
    let basePath = isInsidePagesFolder ? "../" : "./";

    try {
        user = user ? JSON.parse(user) : null;

        if (user) {
            if (user.role === "student") {
                homeLink.href = basePath + "student-home.html"; // Student Home
            } else if (user.role === "employer") {
                homeLink.href = basePath + "employer-home.html"; // Employer Home
            } else {
                homeLink.href = basePath + "index.html"; // Default if role is missing
            }
        } else {
            homeLink.href = basePath + "index.html"; // If no user, go to index
        }
    } catch (error) {
        console.error("Error parsing user data:", error);
        homeLink.href = basePath + "index.html"; // Fallback to index
    }
});
