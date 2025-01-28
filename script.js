// nav bar highlighted section 

// Get the current page URL. highlight the current page in the nav bar
const currentPage = window.location.pathname.split("/").pop(); 

const navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(link => {
    if (link.getAttribute('href') === currentPage) {
        link.classList.add('active');
    }
});

// dark mode
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('themeSwitch');
    const body = document.body;

    // Check if the toggle exists
    if (themeSwitch) {
        // Load previously selected theme from localStorage
        const isDarkMode = localStorage.getItem('darkMode') === 'true';
        if (isDarkMode) {
            body.classList.add('dark-mode'); // Apply dark mode class
            themeSwitch.checked = true;     // Set the toggle as checked
        }

        themeSwitch.addEventListener('change', () => {
            if (themeSwitch.checked) {
                body.classList.add('dark-mode');        // Enable dark mode
                localStorage.setItem('darkMode', 'true'); // Save to localStorage
            } else {
                body.classList.remove('dark-mode');     // Disable dark mode
                localStorage.setItem('darkMode', 'false'); // Save to localStorage
            }
        });
    }
});


// form validation

document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        // Get the values of the password and confirm password firelds
        const password = form.querySelector('input[name="password"]').value;
        const confirmPassword = form.querySelector('input[name="confirm-password"]').value;
        
        // Check if the password is longer than 8 characters
        if (password.length <= 8) {
            alert('Password must be longer than 8 characters.');
            event.preventDefault(); // Prevent the form from submitting

        // Check if the passwords match
        } else if (password !== confirmPassword) {
            alert('Passwords do not match.'); // Prevent the form from submitting
            event.preventDefault();
        } else {
            alert('Thank you for signing up!'); // Allow the form to submit and display a thank you message
        }
    });
});