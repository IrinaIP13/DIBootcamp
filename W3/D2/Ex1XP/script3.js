// Declare a global variable named allBoldItems.
// Create a function called getBoldItems() that 
// takes no parameter. This function should collect 
// all the bold items inside the paragraph and 
// assign them to the allBoldItems variable.
// Create a function called highlight() that 
// changes the color of all the bold text to blue.
// Create a function called returnItemsToDefault() 
// that changes the color of all the bold text back to black.
// Call the function highlight() on mouseover 
// (ie. when the mouse pointer is moved onto the paragraph), 
// and the function returnItemsToDefault() on mouseout 
// (ie. when the mouse pointer is moved out of the paragraph). 

const allBoldItems = '';

function getBoldItems() {
    const textStrong = document.getElementsByTagName('strong');
    return textStrong;   
}

function highlight() {
    for (let i = 0; i < arrayStrongs.length; i++) {
        arrayStrongs[i].style.color = 'red';    
    }
}

function returnItemsToDefault() {
    for (let i = 0; i < arrayStrongs.length; i++) {
        arrayStrongs[i].style.color = '';    
    }
}

const arrayStrongs = getBoldItems();

document.querySelector('p').addEventListener('mouseover', highlight);
document.querySelector('p').addEventListener('mouseout', returnItemsToDefault);