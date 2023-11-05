// We will create a form that ask the user for their email. Then, using a function we will check the validity of the user’s input.
// Add an input that has a type="email" to your form.
// Write your own javascript validation function to check if the entered value is a valid email address. The address should contain some valid characters, and the @ sign, more characters then a . (period) and some more characters.
// On “submit”, the validation function should run and validate the email address.

const inputEmail = document.querySelector('input');
const submitButton = document.querySelector('button');
const regulEmail = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

submitButton.addEventListener('click', validateEmail);

function validateEmail() {
    if(inputEmail.value.match(regulEmail)) alert('Thank you!')
    else alert('Please enter a valid email address');
}