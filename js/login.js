document.addEventListener("DOMContentLoaded", function () {
    let loginForm = document.getElementById("loginForm");

    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;

            let users = JSON.parse(localStorage.getItem("users")) || []; // Get stored users

            // ✅ Check for admin login (hardcoded credentials)
            if (email === "admin@jobportal.com" && password === "Admin123") {
                let adminUser = { email, role: "admin" };
                localStorage.setItem("loggedInUser", JSON.stringify(adminUser));
                alert("✅ Admin login successful!");
                window.location.href = "admin-home.html"; // Redirect to admin dashboard
                return;
            }

            // 🔍 Check if user exists in localStorage
            let user = users.find(u => u.email === email && u.password === password);

            if (user) {
                localStorage.setItem("loggedInUser", JSON.stringify(user)); // ✅ Store logged-in user
                alert("Login successful!");

                // Redirect based on role
                if (user.role === "student") {
                    window.location.href = "student-home.html";
                } else if (user.role === "employer") {
                    window.location.href = "employer-home.html";
                }
            } else {
                alert("❌ Invalid email or password!");
            }
        });
    }
});

