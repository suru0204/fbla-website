document.addEventListener("DOMContentLoaded", function () {
    let signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page reload

            let name = document.getElementById("name").value;
            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirmPassword").value;
            let role = document.getElementById("role").value; // Student, Employer, or Admin

            // ✅ Check if passwords match
            if (password !== confirmPassword) {
                alert("❌ Passwords do not match!");
                return;
            }

            let users = JSON.parse(localStorage.getItem("users")) || [];

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
            window.location.href = "login.html"; // Redirect to login
        });
    }
});
