// Add a “light blue” background color and some padding to the <div>

const newDiv = document.querySelector('div');
newDiv.style.backgroundColor = 'lightblue';
newDiv.style.padding = '10px';

// Do not display the <li> that contains the text node “John”. (the first <li> of the <ul>)

const newList = document.querySelectorAll('li');
newList[0].style.display = 'none';

// Add a border to the <li> that contains the text node “Pete”. (the second <li> of the <ul>)

newList[1].style.border = '1px solid red';

// Change the font size of the whole body

document.body.style.fontSize = '26px';

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div)

if (newDiv.style.backgroundColor == 'lightblue') {
    alert('Hello x and y');
}

