document.addEventListener("DOMContentLoaded", function () {
    let signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();
            let confirmPassword = document.getElementById("confirmPassword").value.trim();
            let role = document.getElementById("role").value; // Student/Employer

            // ✅ Ensure passwords match
            if (password !== confirmPassword) {
                alert("❌ Passwords do not match!");
                return;
            }

            // ✅ Fetch existing users safely
            let users = JSON.parse(localStorage.getItem("users")) || []; 

            // ✅ Ensure `users` is an array before modifying
            if (!Array.isArray(users)) {
                console.warn("⚠️ `users` was not an array, resetting storage...");
                users = [];
            }

            // ✅ Check if email already exists
            if (users.some(user => user.email === email)) {
                alert("❌ Email already registered!");
                return;
            }

            // ✅ Store new user
            let newUser = { name, email, password, role };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            alert("✅ Sign-up successful! You can now log in.");
            window.location.href = "login.html"; // Redirect to login page
        });
    } else {
        console.error("⚠️ signupForm not found! Make sure your form has the correct ID.");
    }
});