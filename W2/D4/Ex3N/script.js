// Exercise 1: Random Number
function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);}

let randomNum = getRandomIntInclusive(1,100);
console.log(randomNum);
printEven();

function printEven(){
    let res = '';
for (let i = 0; i < randomNum; i++) {
    if (i%2==0){
        res += i + ' ';
    }   
}
console.log(res);
}

// Exercise 2: Capitalized Letters

function capitalize(str) {
    let resEven = '';
    let resOdd = '';
    for (let i = 0; i < str.length; i++) {
        if (i%2==0) { 
            resEven += str[i].toUpperCase()+str[i+1]
    }else {resOdd += str[i-1] + str[i].toUpperCase()}    
}   return [resEven, resOdd]
} 

console.log(capitalize("abcdef"));

// Exercise 3 : Is Palindrome?

    let word = 'Madam';
    Polindrom(word);

    function Polindrom(str) {
        str = str.toLowerCase()
        let strPol = '';
        for (let i = str.length-1; i >= 0; i--) {
            strPol= strPol + str[i];
        }
        if (strPol===str) {
            return console.log(word, '- a string is a palindrome'); 
        } else {
            return console.log(word, '- a string is not a palindrome');
        }
    }

// Exercise 4 : Biggest Number

const array = [-1,0,3,100, 99, 2, 99] ;
const array2 = ['a', 3, 4, 2]; 
const array3 = [];

biggestNumberInArray(array)
biggestNumberInArray(array2)
biggestNumberInArray(array3)

function biggestNumberInArray(arrayNumber) {
    let max = 0;
    for (let i = 0; i < arrayNumber.length; i++) {
        if ((typeof arrayNumber[i])==='number' & 
            arrayNumber[i]>max) {
            max = arrayNumber[i];
        }       
    } return console.log(max);
}

// Exercise 5: Unique Elements

let list = [1,2,1,2,3,4,3,3,3,4,5,4,5];
console.log(list);
console.log(unique(list));

function unique(array) {
    let newList = [];
    for (let i = 0, j = 0; i < array.length; i++) {
        if (newList.indexOf(array[i])==-1){
            newList[j]=array[i];
            j++;
        }
    } return newList;
}