// Get the value of each of the inputs in the HTML file when the form 
// is submitted. Remember the event.preventDefault()
const button = getButton()
const shuffleButton = document.getElementById('shuffle')
button.addEventListener('click', handleClick)
shuffleButton.addEventListener('click', shuffleStories)

// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked 
// the button should change the story currently displayed 
// (but keep the values entered by the user). The user could click 
// the button at least three times and get a new story. 
// Display the stories randomly.
// Make sure the values are not empty
// Write a story that uses each of the values.

function getFormValues() {
    const noun = document.getElementById('noun').value;
    const adjective = document.getElementById('adjective').value;
    const person = document.getElementById('person').value;
    const verb = document.getElementById('verb').value;
    const place = document.getElementById('place').value;
    return { noun, adjective, person, verb, place}
}

function handleClick(e) {
    shuffleStories(e, true);
}

function shuffleStories(e, isFirstStory = false) {
    e.preventDefault();
    const { noun, adjective, person, verb, place } = getFormValues();
    if ([noun, adjective, person, verb, place].includes('')) return;    
    const randomNumber = generateRandomNumber();
    const stories = [writeStory(), writeStory2(), writeStory3()]
    const story = isFirstStory ? stories[0] : stories[randomNumber];
    appendStoryToPage(story);
}

function generateRandomNumber() {
    return Math.floor(Math.random() * 3)
}

function appendStoryToPage(story) {
    const paragraph = document.getElementById('story');
    const span = document.createElement('span');
    span.innerText = story;
    paragraph.innerText = '';
    paragraph.appendChild(span);
}

function writeStory() {
    const { noun, adjective, person, verb, place } = getFormValues();
    return `I like to look at ${noun}s, I think that they are ${adjective}.
    My favorite person is ${person}. We often ${verb} together when we are in ${place}`
}

function writeStory2() {
    const { noun, adjective, person, verb, place } = getFormValues();
    return `I hate ${noun}s, I think that they are ${adjective}.
    I especially hate ${person}. We never ${verb} I am in ${place}`
}
function writeStory3() {
    const { noun, adjective, person, verb, place } = getFormValues();
    return `When I am in ${place}, I look at the people there and I find them ${adjective}.
    If I could meet someone? it world be ${person}. I would like to ${verb}
    them with a ${noun}`  
}

function getButton() {
    return document.getElementById('lib-button');
}