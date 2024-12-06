// Progress Data
const progressData = [];

// Form Submission Handler
document.getElementById("progressForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const date = document.getElementById("date").value;
    const weight = document.getElementById("weight").value;
    const bodyFat = document.getElementById("bodyFat").value;

    if (date && weight) {
        // Add to progressData
        progressData.push({ date, weight, bodyFat });
        updateProgressHistory();
        updateProgressChart();
    }
});

// Update History Table
function updateProgressHistory() {
    const tbody = document.getElementById("progressHistory");
    tbody.innerHTML = ""; // Clear current history

    progressData.forEach((entry, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.weight}</td>
            <td>${entry.bodyFat || "N/A"}</td>
            <td class="actions">
                <button class="edit" onclick="editEntry(${index})">Edit</button>
                <button class="delete" onclick="deleteEntry(${index})">Delete</button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

// Edit Entry
function editEntry(index) {
    const entry = progressData[index];
    document.getElementById("date").value = entry.date;
    document.getElementById("weight").value = entry.weight;
    document.getElementById("bodyFat").value = entry.bodyFat || "";
    progressData.splice(index, 1); // Remove the entry being edited
    updateProgressHistory();
}

// Delete Entry
function deleteEntry(index) {
    progressData.splice(index, 1); // Remove entry
    updateProgressHistory();
    updateProgressChart();
}

// Update Chart
function updateProgressChart() {
    const ctx = document.getElementById("progressChart").getContext("2d");
    const labels = progressData.map(entry => entry.date);
    const weights = progressData.map(entry => entry.weight);

    new Chart(ctx, {
        type: "line",
        data: {
            labels,
            datasets: [
                {
                    label: "Weight (kg)",
                    data: weights,
                    borderColor: "orange",
                    backgroundColor: "rgba(255, 165, 0, 0.5)",
                    fill: true,
                    tension: 0.2,
                },
            ],
        },
    });
}