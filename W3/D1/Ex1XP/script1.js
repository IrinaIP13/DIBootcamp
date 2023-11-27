
// Retrieve the div and console.log it

let newDiv = document.getElementById('container');
console.log(newDiv);

// Change the name “Pete” to “Richard”

document.querySelector('.list').children[1].textContent = 'Richard';

// Delete the <li> that contains the text node “Sarah”. (It’s the second <li> of the second <ul>)

const lists = document.querySelectorAll('.list');
lists[1].children[1].remove();

// Change each first name of the two <ul>'s to your name. (Hint : use a loop)

lists.forEach(list => list.firstElementChild.textContent = 'Irina')

// Add a class called student_list to both of the <ul>'s.

lists.forEach(list => list.classList.add('student_list'));

// Add the classes university and attendance to the first <ul>

document.querySelector('ul').classList.add('university', 'attendance');