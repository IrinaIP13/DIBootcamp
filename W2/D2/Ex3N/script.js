// Exercise 1 : Age Difference

let person1 = +prompt('Enter the year of birth of the first person');
let person2 = +prompt('Enter the year of birth of the second person');
let difference;
if (person1>person2) {difference = person1-person2}
else {difference = person2-person1}
console.log('When will the youngest be', difference, 'years old, older will be twice as old')

// Exercise 2 : Zip Codes


let zipCode = prompt('Enter your zip code');
let pattern = /\b\d{5}\b/;
let result = pattern.test(zipCode);
if (result==true) {console.log('success')}
else {console.log('error')}

// Exercise 3 : Secret Word

let enterWord = prompt('Enter word');
let corWord = enterWord.match(/[^aeiou]/gi);
console.log(corWord.join(''));
let newWord = enterWord.replace(/a/gi,1);
newWord = newWord.replace(/e/gi,2);
newWord = newWord.replace(/i/gi,3);
newWord = newWord.replace(/o/gi,4);
newWord = newWord.replace(/u/gi,5);
console.log(newWord)
