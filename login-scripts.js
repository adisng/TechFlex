// Login form validation
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent default submission for validation

    const email = document.getElementById('email');
    const password = document.getElementById('password');

    let isValid = true;

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
    } else {
        clearError(email);
    }

    // Validate password
    if (password.value.trim() === '') {
        showError(password, 'Password is required.');
        isValid = false;
    } else {
        clearError(password);
    }

    // If valid, submit the form
    if (isValid) {
        alert('Login successful!');
        this.submit();
    }
});

// Show error message
function showError(input, message) {
    const error = document.getElementById(`${input.id}Error`);
    error.textContent = message;
    error.style.display = 'block';
}

// Clear error message
function clearError(input) {
    const error = document.getElementById(`${input.id}Error`);
    error.textContent = '';
    error.style.display = 'none';
}