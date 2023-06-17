// Create an array called allBooks. 
// This is an array of objects. Each object is a book that has 4 keys 
// (ie. 4 properties) : title, author, image : a url,
// alreadyRead : which is a boolean (true or false)

const allBooks = [];

const book1 = {
    title: '"How to Win Friends and Influence People"',
    author: 'Dale Carnegie',
    image: 'https://assets-eu-01.kc-usercontent.com/bcd02f72-b50c-0179-8b4b-5e44f5340bd4/deb7ecfa-73a7-4ef3-bc74-c89e1e606979/How%20to%20Win%20Friends%20and%20Influence%20People.jpg?w=270&h=438&auto=format&bg=%23efefef&fit=crop',
    alreadyRead: true,
}

const book2 = {
    title: 'Bad Blood',
    author: 'John Carreyrou',
    image: 'https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-171/edition/9781509868087.jpg',
    alreadyRead: false,
}

const book3 = {
    title: 'Empire of Pain',
    author: 'Patrick Radden Keefe',
    image: 'https://ik.imagekit.io/panmac/tr:f-auto,di-placeholder_portrait_aMjPtD9YZ.jpg,w-270/edition/9781529063103.jpg',
    alreadyRead: false,
}

allBooks.push(book1, book2, book3)

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.


function makeStrHTML() {
let strHTML = '';
    for (const book of allBooks) {
        strHTML += `
        <tr style="${book.alreadyRead ? 'color:red' : ''}">
            <td><img src= "${book.image}"/></td>
            <td>${book.title} written by ${book.author}</td>
            <td>Already read : ${book.alreadyRead}</td>
        </tr>
        `
    } return strHTML;
}


const newTable = document.createElement('table');
newTable.innerHTML = `
    <thead>
        <tr>
            <th colspan="3">My Book List</th>
        </tr>
    </thead>
    <tbody>
        ${makeStrHTML()}
    </tbody>
    `

const booksDiv = document.getElementsByClassName('list-books');
booksDiv[0].appendChild(newTable);
const img = document.getElementsByTagName('img');

for (let i = 0; i < allBooks.length; i++) {
    img[i].style.width = '100px'; 
}
