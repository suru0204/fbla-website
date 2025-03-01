document.addEventListener("DOMContentLoaded", function () {
    let signupForm = document.getElementById("signupForm");

    if (signupForm) {
        signupForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent page refresh

            let email = document.getElementById("email").value;
            let password = document.getElementById("password").value;
            let role = document.getElementById("role").value; // Assuming role dropdown exists

            let users = JSON.parse(localStorage.getItem("users")) || []; // Get existing users

            // Check if email is already registered
            if (users.some(user => user.email === email)) {
                alert("Email is already registered! Try logging in.");
                return;
            }

            // Store new user
            let newUser = { email, password, role };
            users.push(newUser);
            localStorage.setItem("users", JSON.stringify(users));

            alert("Signup successful! You can now log in.");
            window.location.href = "login.html"; // Redirect to login page
        });
    }
});
