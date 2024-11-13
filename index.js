const addButton = document.querySelector('.addButton');
const form = document.querySelector('.form');
const saveButton = document.querySelector('.saveButton');
const cancelButton = document.querySelector('.cancelButton');
const clearButton = document.querySelector('.clearButton');
const nameInput = document.getElementById('floatingInputName');
const dateInput = document.getElementById('floatingDate');
const designationInput = document.getElementById('floatingInputDesignation');
const ageInput = document.getElementById('floatingInputAge');

// Initially show the form and hide the "Add New" button
form.style.display = 'block';
addButton.style.display = 'none';

// Function to toggle visibility of the form and "Add New" button
function toggleFormVisibility() {
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    addButton.style.display = addButton.style.display === 'none' ? 'block' : 'none';
}

// Save button functionality
saveButton.addEventListener('click', function () {
    if (validateForm()) {
        const table = document.querySelector('tbody');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${nameInput.value}</td>
            <td>${designationInput.value}</td>
            <td>${dateInput.value}</td>
            <td>${ageInput.value}</td>
            <td><button class="btn btn-danger deleteButton">Delete</button></td>
        `;

        table.appendChild(newRow);

        // Clear the form fields
        nameInput.value = '';
        dateInput.value = '';
        designationInput.value = '';
        ageInput.value = '';

        // Hide the form and show the "Add New" button
        toggleFormVisibility();
    }
});

// Cancel button functionality
cancelButton.addEventListener('click', function () {
    // Hide the form and show the "Add New" button
    toggleFormVisibility();
});

// Clear button functionality
clearButton.addEventListener('click', function () {
    nameInput.value = '';
    dateInput.value = '';
    designationInput.value = '';
    ageInput.value = '';
});

// Show form when "Add New" button is clicked
addButton.addEventListener('click', toggleFormVisibility);

// Validate form function
function validateForm() {
    if (!nameInput.value || !dateInput.value || !designationInput.value || !ageInput.value) {
        alert('Please fill in all the fields.');
        return false;
    }
    return true;
}

// Delete button functionality for each row
document.querySelector('table').addEventListener('click', function (event) {
    if (event.target.classList.contains('deleteButton')) {
        event.target.closest('tr').remove();
    }
});
