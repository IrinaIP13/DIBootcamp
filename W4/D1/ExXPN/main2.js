// Write a JavaScript function that takes 2 parameters: a string and a number.
let string = prompt("Enter a string");
let number = +prompt("Enter a number");

// The function should chop the string into chunks of your chosen length
// (the second parameter), and the outcome should be represented in an array
// console.log(string_chop(string,number));

console.log(string_chop(string, number));

function string_chop(str, num) {
  const resArray = [];
  for (let i = 0; i < str.length; i = i + num) {
    resArray.push(str.substr(i, num));
  }
  return resArray;
}
