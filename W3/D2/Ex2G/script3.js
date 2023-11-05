// Create an empty array. For example: let shoppingList=[].
// Create a form containing : a text input field and an “AddItem” button. Add this form to the DOM.
// Type what you need to buy in the text input field, then add the new item to the array as soon as you click on the “AddItem” button (Hint: create a function named addItem()).
// Add a “ClearAll” button to the DOM, that when clicked on, should call the clearAll() function (see below).
// Create a function named clearAll() that should clear out all the items in the shopping list.

let shoppingList=[];
var i = 0;

const newForm = document.createElement('form');
const newInput = document.createElement('input');
const newButtonAdd = document.createElement('button');
const newBattonClear = document.createElement('button');

newInput.type = 'text';
newInput.required = true;
newButtonAdd.innerText = 'Add Item';
newBattonClear.innerText = 'clear All';
newBattonClear.id = 'clear';

const div = document.getElementById('root');
div.appendChild(newForm).append(newInput, newButtonAdd, newBattonClear);

const button = document.querySelector('button');
button.addEventListener('click', addItem);
const buttonClear = document.getElementById('clear');
buttonClear.addEventListener('click', clearAll);


function addItem(e) {
    e.preventDefault();
    const input = document.querySelector('input');
    shoppingList[i++] = input.value;
    input.value = '';
    console.log(shoppingList);
}

function clearAll(event) {
    event.preventDefault();
    shoppingList = [];
    console.log(shoppingList);
}