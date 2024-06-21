// Write a function called reverseArray which accepts an array and returns the array with all values reversed. See if you can do this without creating a new array!

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(array);

reverseArray();

function reverseArray() {
  let len = array.length - 1;
  for (let i = 0; i < len; i++) {
    let v = array[i];
    array[i] = array[len];
    array[len] = v;
    len--;
  }
  console.log(array);
}
