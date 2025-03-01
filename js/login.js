document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            let users = JSON.parse(localStorage.getItem("users")) || []; // Get stored users

            let user = users.find(u => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem("loggedInUser", JSON.stringify(user)); // ✅ Store logged-in user
                alert("Login successful!");

                // Redirect based on role
                let basePath = window.location.pathname.includes("/pages/") ? "../" : "./";

                if (user.role === "student") {
                    window.location.href = basePath + "pages/student-home.html";
                } else if (user.role === "employer") {
                    window.location.href = basePath + "pages/employer-home.html";
                } else if (user.role === "admin") {
                    window.location.href = basePath + "pages/admin-home.html"; // ✅ Corrected path
                }
            } else {
                alert("❌ Invalid email or password!");
            }
        });
    }
});
