// Write a JavaScript function to remove: null, 0, "", false, undefined and NaN values from an array

let array = [NaN, 0, 15, false, -22, "", undefined, 47, null];
console.log("Array:", array);
removeCertainValues();
console.log("Correct array:", array);

function removeCertainValues() {
  const arrayDelElem = [null, 0, "", false, undefined];
  arrayDelElem.forEach((element) => {
    let numElem = array.indexOf(element);
    console.log(numElem);
    if (numElem !== -1) array.splice(numElem, 1);
  });
  for (let i = 0; i < array.length; i++) {
    if (isNaN(array[i])) array.splice(i, 1);
  }
}
