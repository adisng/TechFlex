document.getElementById('registrationForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission for validation

    const username = document.getElementById('username');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirmPassword');

    let isValid = true;

    // Validate username
    if (username.value.trim() === '') {
        showError(username, 'Username is required.');
        isValid = false;
    } else {
        clearError(username);
    }

    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.value.trim())) {
        showError(email, 'Please enter a valid email address.');
        isValid = false;
    } else {
        clearError(email);
    }

    // Validate password
    const passwordStrength = calculatePasswordStrength(password.value.trim());
    if (passwordStrength < 2) {
        showError(password, 'Password is too weak.');
        isValid = false;
    } else {
        clearError(password);
    }

    // Validate confirm password
    if (password.value.trim() !== confirmPassword.value.trim()) {
        showError(confirmPassword, 'Passwords do not match.');
        isValid = false;
    } else {
        clearError(confirmPassword);
    }

    // If valid, submit the form
    if (isValid) {
        alert('Registration successful!');
        this.submit();
    }
});

// Show error
function showError(input, message) {
    const error = document.getElementById(`${input.id}Error`);
    error.textContent = message;
    error.style.display = 'block';
}

// Clear error
function clearError(input) {
    const error = document.getElementById(`${input.id}Error`);
    error.textContent = '';
    error.style.display = 'none';
}

// Password strength checker
document.getElementById('password').addEventListener('input', function () {
    const strength = calculatePasswordStrength(this.value);
    const strengthIndicator = document.getElementById('passwordStrength');
    strengthIndicator.innerHTML = ''; // Clear previous strength indicator

    const bar = document.createElement('span');
    if (strength === 1) {
        bar.classList.add('strength-weak');
    } else if (strength === 2) {
        bar.classList.add('strength-medium');
    } else if (strength === 3) {
        bar.classList.add('strength-strong');
    }
    strengthIndicator.appendChild(bar);
});

// Helper function to calculate password strength
function calculatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[!@#$%^&*]/.test(password)) strength++;
    return strength;
}