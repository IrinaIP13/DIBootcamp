// Write a JavaScript program to remove duplicate items in an array

let array = [33, 89, 33, 40, 33, 93, 20, 33, 33, 2, 33, 9];
console.log("Array:", array);
array = removeDuplicate(array);
console.log("Correct array:", array);

function removeDuplicate(array) {
  let corArray = [];
  array.forEach((element) => {
    if (corArray.includes(element) === false) corArray.push(element);
  });
  return corArray;
}
