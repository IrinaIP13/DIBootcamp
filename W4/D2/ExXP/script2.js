// Create a function that receives a weight in kilograms and returns
// it in grams. (Hint: 1 kg is 1000gr)

// 1. First, use function declaration and invoke it.
function conv1(kg) {
  return kg * 1000;
}
console.log(conv1(2));

// 2. Then, use function expression and invoke it.
let conv2 = function (kg) {
  return kg * 1000;
};
console.log(conv2(5));

// 3. Write in a one line comment, the difference between function
// declaration and function expression.
// 4. Finally, use a one line arrow function and invoke it.
let conv3 = (kg) => kg * 1000;
console.log(conv3(7));
