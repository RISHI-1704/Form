const addButton = document.querySelector('.addButton');
const form = document.querySelector('.form');
const saveButton = document.querySelector('.saveButton');
const cancelButton = document.querySelector('.cancelButton');
const clearButton = document.querySelector('.clearButton');
const nameInput = document.getElementById('floatingInputName');
const dateInput = document.getElementById('floatingDate');
const designationInput = document.getElementById('floatingInputDesignation');
const ageInput = document.getElementById('floatingInputAge');

form.style.display = 'block';
addButton.style.display = 'none';

function toggleFormVisibility() {
    form.style.display = form.style.display === 'none' ? 'block' : 'none';
    addButton.style.display = addButton.style.display === 'none' ? 'block' : 'none';
}

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

      
        nameInput.value = '';
        dateInput.value = '';
        designationInput.value = '';
        ageInput.value = '';

        toggleFormVisibility();
    }
});

cancelButton.addEventListener('click', function () {
    toggleFormVisibility();
});

clearButton.addEventListener('click', function () {
    nameInput.value = '';
    dateInput.value = '';
    designationInput.value = '';
    ageInput.value = '';
});

addButton.addEventListener('click', toggleFormVisibility);

function validateForm() {
    if (!nameInput.value || !dateInput.value || !designationInput.value || !ageInput.value) {
        alert('Please fill in all the fields.');
        return false;
    }
    return true;
}

document.querySelector('table').addEventListener('click', function (event) {
    if (event.target.classList.contains('deleteButton')) {
        event.target.closest('tr').remove();
    }
});
