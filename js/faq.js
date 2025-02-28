document.addEventListener("DOMContentLoaded", function () {
    let faqButtons = document.querySelectorAll(".faq-question");

    faqButtons.forEach(button => {
        button.addEventListener("click", function () {
            let answer = this.nextElementSibling;
            let icon = this.querySelector("span");

            if (answer.style.display === "block") {
                answer.style.display = "none";
                icon.textContent = "+";
            } else {
                answer.style.display = "block";
                icon.textContent = "-";
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    let homeLink = document.getElementById("homeLink");
    let user = localStorage.getItem("loggedInUser"); // Get logged-in user data

    // ✅ Check if the script is running inside the /pages/ folder
    let isInsidePagesFolder = window.location.pathname.includes("/pages/");
    let basePath = isInsidePagesFolder ? "../" : "./"; // Adjust for correct path

    try {
        user = user ? JSON.parse(user) : null; // Parse only if data exists

        if (user) {
            if (user.role === "student") {
                homeLink.href = basePath + "pages/student-home.html"; // ✅ Correct path
            } else if (user.role === "employer") {
                homeLink.href = basePath + "pages/employer-home.html"; // ✅ Correct path
            } else {
                homeLink.href = basePath + "index.html"; // Default if role is missing
            }
        } else {
            homeLink.href = basePath + "index.html"; // If no user, go to index
        }
    } catch (error) {
        console.error("Error parsing user data:", error);
        homeLink.href = basePath + "index.html"; // Fallback to index on error
    }
});
