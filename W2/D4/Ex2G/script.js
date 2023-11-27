// Exercise 1 : Is_Blank

function isBlank(x) {
    if (/./.test(x)) {
        return false
    } else {
        return true
    }
}
console.log(isBlank(''));
console.log(isBlank('abc'));

// Exercise 2 : Abbrev_name

function abbrevName(y) {
    return y.substring(0,(y.lastIndexOf(' ')+2))+'.'
}
console.log(abbrevName("Robin Singh"));

// Exercise 3 : SwapCase

function toSwapCase(z) {
    let res = [];
    for (let i = 0; i < z.length; i++) {
        if (/[A-Z]/.test(z[i])) {
            res[i] = (z[i].toLowerCase())
        } else {
            res[i] = z[i].toUpperCase()
        }
    }
    return res.join('') 
}
console.log(toSwapCase('The Quick Brown Fox'));

// Exercise 4 : Omnipresent Value

function isOmnipresent(arr,num) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i].indexOf(num)==-1)
            return console.log(false)
    };
    return console.log(true)
}

isOmnipresent([[3, 4], [8, 3, 2], [3], [9, 3], [5, 3], [4, 3]], 3)
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 1)
isOmnipresent([[1, 1], [1, 3], [5, 1], [6, 1]], 6)