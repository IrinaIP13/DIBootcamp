// Exercise 1 : List Of People

const people = ["Greg", "Mary", "Devon", "James"];
people.shift();
console.log(people);
people.splice(2,1,'Jason');
console.log(people);
people.push('Irina')
console.log(people);
console.log(people.indexOf('Mary'));
const peopleCopy = people.slice(1,3);
console.log(peopleCopy);
console.log(people.indexOf('Foo'));
let last = people[people.length-1];
console.log(last);
for(let i=0; i<people.length; i++)
{console.log(people[i])};
for(let i=0; i<people.length; i++)
{console.log(people[i])
if (people[i]==='Devon') break};

// Exercise 2 : Your Favorite Colors

let colors = ['orange', 'red', 'black', 'white', 'pink']
let ordinals = ['st','nd','rd','th','th']
for (let i = 0; i< colors.length; i++) 
console.log('My №', i+1,'choice is', colors[i]);
for (let i = 0; i< colors.length; i++)
console.log('My', i+1+ordinals[i],'choice is', colors[i]);

// Exercise 3 : Repeat The Question

let number;
do {
    number = +prompt('Enter the number > 10');
}
while (number<=10);
alert('Thank you');

// Exercise 4 : Building Management

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(''+building.numberOfFloors, 'floors in the building');
console.log(''+(building.numberOfAptByFloor.firstFloor
+building.numberOfAptByFloor.thirdFloor), 
'apartments are on the floors 1 and 3');
console.log(building.nameOfTenants[1]);
if(building.numberOfRoomsAndRent.sarah[1]+
    building.numberOfRoomsAndRent.david[1]>
    building.numberOfRoomsAndRent.dan[1])
    {building.numberOfRoomsAndRent.dan[1]=1200};
console.log(building.numberOfRoomsAndRent);  

// Exercise 5 : Family

const family = {
    father: 'Igor',
    mother: 'Irina',
    con: 'George',
    daughter: 'Oksana',
}
for (key in family) {
    console.log(key)
}
for (let x in family) {
    console.log(family[x])
}

// Exercise 6 : Rudolf

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
}
let sentence = '';
for(key in details){
    sentence = sentence + key + ' ' + details[key] + ' ';
}
console.log(sentence); 

// Exercise 7 : Secret Group

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let nameSociety = [];
for (let i=0; i<names.length; i++) {
    nameSociety[i] = names[i][0]
};
nameSociety = nameSociety.sort();
console.log(nameSociety.join(''));