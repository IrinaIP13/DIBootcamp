// Exercise 1 : The World Translator

let lang = prompt('What language are you speaking?');
lang = lang.toLowerCase(); 
switch (lang) {
    case "english":
        console.log('Hello');
        break;
    case "french":
        console.log('Bonjour');
        break;
    case "hebrew":
        console.log('Shalom');
        break;
    default: 
    console.log('01110011 01101111 01110010 01110010 01111001');
}

// Exercise 2 : The Grade Assigner

let grade = +prompt('What is your grade 0-100 points?');
if (90<grade & grade<=100) {console.log('A')}
else if (80<grade & grade<=90) {console.log('B')}
else if (70<=grade & grade<=80) {console.log('C')}
else if (0<=grade & grade<70) {console.log('D')}
else {console.log('invalid number')};

// Exercise 3 : Verbing

let verb = prompt('Enter a word. It must be a verb');
if (verb.length>=3) {
    if (verb.endsWith('ing')) {
        console.log(verb.concat('ly')); 
    } else {console.log(verb.concat('ing'))}
} else {console.log(verb)}

