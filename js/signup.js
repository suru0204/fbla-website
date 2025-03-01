document.addEventListener("DOMContentLoaded", function () {
    let signupForm = document.getElementById("signupForm");

    if (!signupForm) {
        console.error("⚠️ signupForm not found! Check if the form ID is correct.");
        return;
    }

    signupForm.addEventListener("submit", function (event) {
        event.preventDefault(); // Prevent page reload

        // 🔍 Get input fields safely
        let nameField = document.getElementById("name");
        let emailField = document.getElementById("email");
        let passwordField = document.getElementById("password");
        let confirmPasswordField = document.getElementById("confirmPassword");
        let roleField = document.getElementById("role");

        // 🔥 Check if any field is missing
        if (!nameField || !emailField || !passwordField || !confirmPasswordField || !roleField) {
            console.error("❌ One or more input fields not found! Check your HTML.");
            return;
        }

        let name = nameField.value.trim();
        let email = emailField.value.trim();
        let password = passwordField.value.trim();
        let confirmPassword = confirmPasswordField.value.trim();
        let role = roleField.value;

        // ✅ Ensure passwords match
        if (password !== confirmPassword) {
            alert("❌ Passwords do not match!");
            return;
        }

        // ✅ Fetch existing users safely
        let users = JSON.parse(localStorage.getItem("users")) || []; 

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
});
