// Create an array which value is the planets of the solar system.

const solarSystem = ['Mercury', 'Venus', 'Earth', 'Mars', 'Neptune'];

// For each planet in the array, create a <div> using createElement. 
// This div should have a class named "planet".

for (let i = 0; i < solarSystem.length; i++) {
    let newPlanet = document.createElement('div');
    newPlanet.classList.add('planet');
    newPlanet.textContent = solarSystem[i];
    solarSystem[i] = newPlanet;
};

// Each planet should have a different background color. 
// (Hint: you could add a new class to each planet - 
// each class containing a different background-color).

for (let i = 0; i < solarSystem.length; i++) {
    
    switch (i) {
        case 0:
            solarSystem[0].style.backgroundColor = 'gray'; 
            break;
        case 1:
            solarSystem[1].style.backgroundColor = 'orange';
            break;
        case 2:
            solarSystem[2].style.backgroundColor = 'lightblue';
            break;
        case 3:
            solarSystem[3].style.backgroundColor = 'lightSalmon';
            break;
        case 4:
            solarSystem[4].style.backgroundColor = 'blue';
            break; 
        default:
            break;
    }    
}

// Finally append each div to the <section> in the HTML (presented below).

for (let i = 0; i < solarSystem.length; i++) {
    document.querySelector('.listPlanets').insertAdjacentElement("afterend", solarSystem[i]);
} 

// Bonus: Do the same process to create the moons.

let allPlanet = document.querySelectorAll('.planet');
let moons = [];
for (let i = 0; i < allPlanet.length; i++) {
    if (allPlanet[i].textContent=='Earth') allMoons(1, i)
    if (allPlanet[i].textContent=='Mars') allMoons(2, i)
    if (allPlanet[i].textContent=='Neptune') allMoons(13, i)             
} 

function allMoons(q, i) {
        moons = createMoons(q);
        insertMoons(i);
}

function insertMoons(i) {
    for (let y = 0; y < moons.length; y++) {
        allPlanet[i].insertAdjacentElement('afterbegin', moons[y]);    
    };
}

function createMoons(x) {
        let m = [];
        let p = 80;
        for (let j = 0; j < x; j++) {
        const newMoon = document.createElement('div');
        newMoon.classList.add('moon');    
        newMoon.style.left += `${p+=50}px`;
        m[j] = newMoon; 
    } 
    return m;
}