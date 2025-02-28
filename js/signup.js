document.getElementById("signupForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let fullname = document.getElementById("fullname").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let userRole = document.getElementById("userRole").value;

    if (password !== confirmPassword) {
        alert("❌ Passwords do not match!");
        return;
    }

    let users = JSON.parse(localStorage.getItem("users")) || [];

    if (users.find(user => user.email === email)) {
        alert("❌ Email already exists! Try logging in.");
        return;
    }

    // ❌ Prevent users from signing up as an admin
    if (userRole === "admin") {
        alert("❌ You cannot sign up as an admin.");
        return;
    }

    let newUser = {
        fullname: fullname,
        email: email,
        password: password,
        role: userRole
    };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("✅ Account created successfully! Redirecting to login...");
    window.location.href = "login.html";
});

