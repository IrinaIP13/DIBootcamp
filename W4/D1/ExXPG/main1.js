// Write a JavaScript program to find the sum of all elements in an array

const array = [255, 3, 90, 642, 8, 10, 63, 82, 37];
console.log("Array: " + array);
sumAllElements(array);

function sumAllElements(array) {
  let sum = 0;
  array.forEach((element) => {
    sum += element;
  });
  console.log("Sum: " + sum);
}
