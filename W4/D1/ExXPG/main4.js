// Write a JavaScript function to concatenate a given string n times (default is 1)

console.log(repeat('Ha!',3));

function repeat(string, n) {
    let str = '';
    for (let i = 0; i < n; i++) {
        str = str + string;
    } 
    return str;
}