// Add a click event listener to the <input type="button">. 
// When clicked on, it should call a function named : 
// removecolor() that removes the selected color from the dropdown list.

const select = document.getElementById('colorSelect');
const button = document.querySelector('input');

button.addEventListener('click', removecolor);

function removecolor() {
    const option = document.getElementsByTagName('option');
    for (let i = 0; i < option.length; i++) {
        if (option[i].value===select.value)
        option[i].remove();
    }
}
