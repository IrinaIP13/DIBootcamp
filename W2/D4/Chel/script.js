let words = prompt('Enter words separated by commas')
let arrWords = words.split(',')
arrTrim();
let max = maxWords()
arrPadEnd()

console.log('*'.repeat(max+4));
arrWords.forEach(e => {
    console.log('* ' + e + ' *'); 
});
console.log('*'.repeat(max+4));

function arrTrim () {
    for (let i = 0; i < arrWords.length; i++) {
        arrWords[i] = arrWords[i].trim()
    };
}

function maxWords () {
    let res = 0;
    for (let i = 0; i < arrWords.length; i++) {
        if (arrWords[i].length>res) {
           res = arrWords[i].length;}
    };
    return res;
}

function arrPadEnd () {
    for (let i = 0; i < arrWords.length; i++) {
        if (arrWords[i].length<max) {
            arrWords[i] = arrWords[i].padEnd(max,' ')
        }
    };
}