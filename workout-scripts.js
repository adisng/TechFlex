// Mock data to update workout dynamically (can be replaced with a backend API)
const workoutData = {
    monday: ["Push-ups - 3 sets of 15", "Plank - 2 minutes", "Running - 30 minutes"],
    tuesday: ["Squats - 3 sets of 20", "Lunges - 2 sets of 12 each leg", "Cycling - 45 minutes"],
    wednesday: ["Rest Day"],
    thursday: ["Bench Press - 3 sets of 12", "Deadlifts - 4 sets of 8", "Jogging - 20 minutes"],
    friday: ["Bicep Curls - 3 sets of 15", "Tricep Dips - 3 sets of 15", "Swimming - 30 minutes"],
    saturday: ["Yoga - 1 hour", "Stretching - 15 minutes", "Hiking - 1.5 hours"],
    sunday: ["Rest Day"]
};

// Populate the workout schedule dynamically
document.addEventListener("DOMContentLoaded", () => {
    Object.keys(workoutData).forEach(day => {
        const dayCard = document.getElementById(day);
        const ul = dayCard.querySelector("ul");
        ul.innerHTML = ""; // Clear any placeholder data
        workoutData[day].forEach(activity => {
            const li = document.createElement("li");
            li.textContent = activity;
            ul.appendChild(li);
        });
    });
});