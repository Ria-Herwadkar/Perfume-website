// js/login.js

// Get references to the form and error message container.
const loginForm = document.getElementById("loginForm");
const errorMessage = document.getElementById("errorMessage");

// Only attach the event listener if the form exists.
if (loginForm) {
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Retrieve the input values.
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Hardcoded credentials for demonstration.
    const validEmail = "admin@example.com";
    const validPassword = "password123";

    // Check if the provided credentials match the hardcoded ones.
    if (email === validEmail && password === validPassword) {
      // Simulate a successful login by setting flags in localStorage.
      localStorage.setItem("loggedIn", "true");
      localStorage.setItem("userEmail", email);
      // Redirect the user to a protected page (e.g., index.html)
      window.location.href = "index.html";
    } else {
      // If the credentials don't match, show an error message.
      errorMessage.textContent = "Invalid email or password. Please try again.";
    }
  });
}

// Update the navigation authentication container only if it exists.
const navAuthContainer = document.getElementById("navAuth");
if (navAuthContainer) {
  if (localStorage.getItem("loggedIn") === "true") {
    const username = localStorage.getItem("userEmail");
    navAuthContainer.innerHTML = `
      <span class="me-2">Welcome, ${username}!</span>
      <button id="logoutButton" class="btn btn-outline-secondary">Logout</button>
    `;
    document.getElementById("logoutButton").addEventListener("click", function() {
      localStorage.removeItem("loggedIn");
      localStorage.removeItem("userEmail");
      window.location.href = "login.html";
    });
  } else {
    navAuthContainer.innerHTML = `
      <a href="login.html" class="btn btn-outline-primary me-2 login-button">Login</a>
      <a href="register.html" class="btn btn-primary sign-up-button">Sign-up</a>
    `;
  }
}
