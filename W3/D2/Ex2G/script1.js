// Display the value of the selected option.

// Add an additional option to the select tag:
// <option value="classic">Classic</option>

// The newly added option should be selected by default.


const select = document.getElementById('genres');
const classic = document.createElement('option');
classic.value = 'classic';
classic.innerText = 'Classic';
classic.selected = true;
select.appendChild(classic);
select.addEventListener('mouseout', SelectValue);

function SelectValue() {
    console.log(select.value);   
}

