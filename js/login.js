document.addEventListener("DOMContentLoaded", function () {
    console.log("🔄 login.js is loaded!");

    let loginForm = document.getElementById("loginForm");

    if (!loginForm) {
        console.error("❌ loginForm NOT found in login.html!");
        return;
    }

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        console.log("✅ Login form submitted!");

        let email = document.getElementById("email").value.trim();
        let password = document.getElementById("password").value.trim();

        console.log("📧 Email:", email, "🔑 Password:", password);

        let users = JSON.parse(localStorage.getItem("users")) || [];
        console.log("📂 Stored Users:", users);

        let user = users.find(user => user.email === email && user.password === password);

        if (!user) {
            alert("❌ Invalid email or password!");
            return;
        }

        console.log("✅ User found:", user);

        // ✅ Store logged-in user info
        localStorage.setItem("loggedInUser", JSON.stringify(user));
        localStorage.setItem("userType", user.role); // 🔥 Store role for navigation (FAQ fix)

        alert("✅ Login successful!");

        // ✅ Redirect based on user role
        if (user.role === "student") {
            console.log("🔄 Redirecting to Student Home...");
            window.location.href = "student-home.html"; 
        } else if (user.role === "employer") {
            console.log("🔄 Redirecting to Employer Home...");
            window.location.href = "employer-home.html"; 
        } else if (user.role === "admin") {
            console.log("🔄 Redirecting to Admin Panel...");
            window.location.href = "admin.html"; 
        }
    });
});

// ✅ Logout Function (clears session & redirects)
function logout() {
    console.log("🔄 Logging out...");
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("userType"); // 🔥 Remove stored role (FAQ fix)
    alert("✅ Successfully logged out!");
    window.location.href = "login.html"; // Redirect to login page
}

