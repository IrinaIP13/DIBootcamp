// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”

setTimeout(helloWorld,2000);

function helloWorld() {
    alert('Hello World');
}

// In your Javascript file, using setTimeout, call a function after 2 seconds
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">

let count = 0;

setTimeout(pHelloWorld,2000);
const container = document.getElementById('container');
const paragraph = document.createElement('p')
paragraph.innerText = 'Hello World';

function pHelloWorld() {
    container.appendChild(paragraph);
    count++;
}

// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) 
// as soon as there will be 5 paragraphs inside the <div id="container">

const myInterval = setInterval(pHelloWorldInterval, 2000);

function pHelloWorldInterval() {
    document.getElementsByTagName('p')[0].innerHTML += '<br>Hello World';
    count++;
    if (count>=5) {
      stopInterval(myInterval);  
    } 
}

const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', stopInterval);


function stopInterval() {
    clearInterval(myInterval);
}
