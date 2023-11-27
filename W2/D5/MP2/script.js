let word;
let letter;
let arrWord = [];
let counter = 0;
let c = 0;
let allLetters = [];

do {
    word = prompt('Enter a number with at least 8 letters')
    if (word.length<8) {
        alert('Few characters')
    }    
} while (word.length<8)

for (let i = 0; i < word.length; i++) {
    arrWord[i] = '*';
}
console.log(arrWord.join(' '));

do {
    letter = prompt ('Enter a letter'); 
    check() 
    allLetters.push(letter);
    console.log(allLetters.join(' '));
for (let i = 0; i < word.length; i++) {
    if (letter==word[i]) {
        arrWord[i] = word[i] 
        c++      
    } 
}
if (c==word.length) {
    console.log(arrWord.join(' '));
    break;
}
console.log(arrWord.join(' '));
} while (counter++<10);

if (arrWord.indexOf('*')==-1) {
    alert ('CONGRATS YOU WIN');
} else alert('YOU LOSE')

function check() {
    while (allLetters.indexOf(letter)!=-1) {
        letter = prompt('This letter has already been, please enter another')
    }
    return
}