// Retrieve the form and console.log it.
// Retrieve the inputs by their id and console.log them.
// Retrieve the inputs by their name attribute and console.log them.
// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.

const form = document.querySelector("form")
const inputFname = document.getElementById("fname");
const inputLname = document.getElementById("lname");

function ButtonInputsValue(event) {
    event.preventDefault();
    const inputFnameName = document.querySelector("input[name=fname]").value;
    const inputLnameName = document.querySelector("[name=lname]").value;
    console.log(inputFnameName, inputLnameName);
    if (inputFnameName==""||inputLnameName=="") 
    alert('Please fill in all fields')
    else {
        const ul = document.querySelector('.usersAnswer');
        ul.innerText = '';
        const firstLi = document.createElement('li');
        const secondLi = document.createElement('li');
        firstLi.innerText = inputFnameName;
        secondLi.innerText = inputLnameName;
        ul.append(firstLi, secondLi);
    }
}

form.addEventListener('submit', ButtonInputsValue);







