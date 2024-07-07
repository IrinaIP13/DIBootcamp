// 1. Using a method, take this array
const array = [[1], [2], [3], [[[4]]], [[[5]]]];
// and modify it to look like this array: [1,2,3,[4],[5]].
// Bonus Try to do it on one line.

console.log(array.reduce((acc, val) => acc.concat(...val)));

// 2. Using a method, take this array
const greeting = [
  ["Hello", "young", "grasshopper!"],
  ["you", "are"],
  ["learning", "fast!"],
];
// and modify it to look like this
// array: ["Hello young grasshopper!","you are","learning fast!"].

let newArrayWords = greeting.map((value) => value.join(" "));
console.log(newArrayWords);

// 3. Turn the greeting array into a string: ‘Hello young grasshopper! you are learning fast!’.

console.log(newArrayWords.join(" "));

// 4. Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]];
console.log(trapped.flat(Infinity));
