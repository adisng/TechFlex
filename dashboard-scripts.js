// Mock user data for the dashboard (could be replaced with a backend API call)
const userData = {
    name: "Aditya Singh",
    lastWorkoutDate: "2024-12-01"
};

// Update the dashboard with user data
document.addEventListener("DOMContentLoaded", () => {
    // Display user's name
    const userName = document.getElementById("userName");
    userName.textContent = userData.name;

    // Display last workout date
    const lastWorkoutDate = document.getElementById("lastWorkoutDate");
    lastWorkoutDate.textContent = userData.lastWorkoutDate;
});