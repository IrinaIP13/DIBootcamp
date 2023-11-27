// Using a DOM property, retrieve the h1 and console.log it.

const h1 = document.querySelector('h1');
console.log(h1);

// Using DOM methods, remove the last paragraph in the <article> tag.

const article = document.querySelector('article');
article.lastElementChild.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

const h2 = document.querySelector('h2');
h2.addEventListener('click', MakeRed);

function MakeRed() {
    h2.style.backgroundColor = 'red';
}

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).

const h3 = document.querySelector('h3');
h3.addEventListener('click', HideText);

function HideText() {
    h3.style.display = 'none';
}

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.

const button = document.createElement('button');
button.textContent = 'Make all paragraphs bold';
article.appendChild(button);
const allPar = document.getElementsByTagName('p');
button.addEventListener('click', MakeBold)

function MakeBold() {
    for (let i = 0; i < allPar.length; i++) {
        allPar[i].style.fontWeight = '900';
    }
}

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)

h1.addEventListener('mouseover', ChangeSize);

function ChangeSize() {
    let numRandom = Math.round(Math.random()*100);
    console.log(numRandom);
    h1.style.fontSize = `${numRandom}px`;
}

// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)

const secondPar = document.getElementsByTagName('p')[1];
secondPar.addEventListener('mouseover', HidePar);

function HidePar() {
    secondPar.style.animation = 'fadeOut 3s ease-in forwards';
}