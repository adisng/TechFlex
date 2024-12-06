// Mock Data
const users = [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Chris Johnson", email: "chris.j@example.com" },
];

// Populate Users Table
function populateUsers() {
    const userList = document.getElementById("userList");
    userList.innerHTML = ""; // Clear existing rows

    users.forEach((user, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>
                <button class="edit" onclick="openEditModal(${index})">Edit</button>
                <button class="delete" onclick="deleteUser(${index})">Delete</button>
            </td>
        `;
        userList.appendChild(row);
    });
}

// Open Edit Modal
function openEditModal(index) {
    const user = users[index];
    document.getElementById("editName").value = user.name;
    document.getElementById("editEmail").value = user.email;

    const modal = document.getElementById("editUserModal");
    modal.style.display = "flex";

    // Save changes
    document.getElementById("editUserForm").onsubmit = (event) => {
        event.preventDefault();
        user.name = document.getElementById("editName").value;
        user.email = document.getElementById("editEmail").value;
        closeModal();
        populateUsers();
    };
}

// Close Modal
function closeModal() {
    document.getElementById("editUserModal").style.display = "none";
}

// Delete User
function deleteUser(index) {
    if (confirm("Are you sure you want to delete this user?")) {
        users.splice(index, 1);
        populateUsers();
    }
}

// Populate Stats and Charts
document.addEventListener("DOMContentLoaded", () => {
    // Stats
    document.getElementById("totalUsers").textContent = users.length;

    // Populate Users Table
    populateUsers();

    // User Growth Chart
    const ctx = document.getElementById("userGrowthChart").getContext("2d");
    new Chart(ctx, {
        type: "line",
        data: {
            labels: ["January", "February", "March", "April", "May"],
            datasets: [
                {
                    label: "New Users",
                    data: [10, 20, 35, 50, 75],
                    borderColor: "orange",
                    backgroundColor: "rgba(255, 165, 0, 0.5)",
                    fill: true,
                    tension: 0.2,
                },
            ],
        },
    });
});
