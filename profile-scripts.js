// Mock user data (replace with API call in real applications)
const userData = {
    name: "John Doe",
    email: "john.doe@example.com",
    notifications: true,
    darkMode: false,
};

// Populate form with user data on load
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("name").value = userData.name;
    document.getElementById("email").value = userData.email;
    document.getElementById("notifications").checked = userData.notifications;
    document.getElementById("darkMode").checked = userData.darkMode;
});

// Save changes to user profile
document.getElementById("profileForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    if (password && password !== confirmPassword) {
        alert("Passwords do not match.");
        return;
    }

    // Update userData object (replace with an API call)
    userData.name = name;
    userData.email = email;

    alert("Profile updated successfully!");
});