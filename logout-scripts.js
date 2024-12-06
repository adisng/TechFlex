// Simulate Logout Process
document.addEventListener("DOMContentLoaded", () => {
    // Clear user session or token (if using localStorage/sessionStorage)
    localStorage.removeItem("authToken"); // Example for token-based logout
    sessionStorage.clear(); // Clears session data
    
    // Optional: Send a logout request to the server
    // fetch("/api/logout", { method: "POST" }).then(response => console.log(response));

    // Redirect to login page after 2 seconds
    setTimeout(() => {
        window.location.href = "login.html"; // Adjust the path if needed
    }, 2000);
});