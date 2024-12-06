// Mock data for the diet plan (can be replaced with a backend API)
const dietData = {
    monday: ["Oatmeal with berries", "Grilled chicken with quinoa", "Greek yogurt", "Baked salmon with vegetables"],
    tuesday: ["Smoothie bowl", "Turkey sandwich with salad", "Nuts and an apple", "Stir-fried tofu with brown rice"],
    // Add more days
};

// Dynamically populate the diet plan
document.addEventListener("DOMContentLoaded", () => {
    Object.keys(dietData).forEach((day) => {
        const dayCard = document.getElementById(day);
        const ul = dayCard.querySelector("ul");
        ul.innerHTML = ""; // Clear placeholder data

        dietData[day].forEach((meal) => {
            const li = document.createElement("li");
            li.textContent = meal;
            ul.appendChild(li);
        });
    });
});