let userNumber;
let computerNumber;
let counter = 0;

function playTheGame() {
    let text = confirm('Would you like to play the game?')
    if (text==false) {
        alert('No problem, Goodbye')
        return
    } else {
        do {
        userNumber = +prompt('Enter a number between 0 and 10') 
        } while (checkNum()==false);
        compareNumbers(userNumber, computerNumber)
        return
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function checkNum() {
    if (/[^0-9]/.test(userNumber)==true) {
        alert('Sorry Not a number, Goodbye');
        return false
    } else if (0>userNumber||userNumber>10) { 
        alert('Sorry it\'s not a good number, Goodbye')
        return false
    } else {
        computerNumber = getRandomIntInclusive(0,10);
        return true
    }
    }

function compareNumbers(x, y){
    if (x==y) {       
        return alert('WINNER')
    } else  {x>y ? userNumber = +prompt('Your number is bigger then the computer\'s, guess again')
            : userNumber = +prompt('Your number is smaller then the computer\'s, guess again')};
            if (++counter>=3) {alert('out of chances') 
                                return counter = 0}
            if (checkNum())
                compareNumbers(userNumber, computerNumber)
                else return
}