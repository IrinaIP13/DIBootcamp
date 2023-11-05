// in the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method

const navBar = document.getElementById('navBar');
navBar.setAttribute('id', 'socialNetworkNavigation');

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method

const newli = document.createElement('li');
const newUl = document.querySelector('ul');
newUl.appendChild(newli);

const newA = document.createElement('a');
newA.setAttribute('href', '#');
newA.innerText = 'Logout';

newUl.lastChild.appendChild(newA);

// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property)

console.log(newUl.firstElementChild.textContent);
console.log(newUl.lastElementChild.textContent);

