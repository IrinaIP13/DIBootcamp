const letters = ["x", "y", "z", "z"];

// 1. Use a for loop to get this output { x: 1, y: 1, z: 2 };
const output = {};
letters.forEach((element) => {
  if (output[element] === undefined) {
    output[element] = 1;
  } else output[element] += 1;
});
// console.log(output);

// 2. Use the reduce() method to get this output { x: 1, y: 1, z: 2 };

const output2 = letters.reduce((acc, val) => {
  let temp = {};
  temp[val] = 1;
  if (acc[val] === undefined) {
    acc = Object.assign(acc, temp);
  } else acc[val] += 1;
  return acc;
}, {});

console.log(output2);
