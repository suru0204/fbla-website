document.addEventListener("DOMContentLoaded", function () {
    let signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            let name = document.getElementById("name").value.trim();
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();
            let confirmPassword = document.getElementById("confirmPassword").value.trim();
            let role = document.getElementById("role").value; // Student, Employer, Admin

            // ✅ Check if all fields are filled
            if (!name || !email || !password || !confirmPassword || !role) {
                alert("❌ All fields are required!");
                return;
            }

            // ✅ Validate email format
            let emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (!email.match(emailPattern)) {
                alert("❌ Invalid email format!");
                return;
            }

            // ✅ Check if passwords match
            if (password !== confirmPassword) {
                alert("❌ Passwords do not match!");
                return;
            }

            // ✅ Retrieve stored users (fixing the null issue)
            let users = JSON.parse(localStorage.getItem("users")) || [];

            // ✅ Ensure `users` is always an array
            if (!Array.isArray(users)) {
                users = [];
            }

            // ✅ Check if email already exists
            if (users.some(user => user.email === email)) {
                alert("❌ Email is already registered!");
                return;
            }

            // ✅ Store new user
            let newUser = { name, email, password, role };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            alert("✅ Sign-up successful! Redirecting to login...");
            window.location.href = "login.html"; // Redirect to login
        });
    }
});