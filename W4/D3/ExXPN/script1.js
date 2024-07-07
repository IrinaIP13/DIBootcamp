const data = [
  {
    name: "Butters",
    age: 3,
    type: "dog",
  },
  {
    name: "Cuty",
    age: 5,
    type: "rabbit",
  },
  {
    name: "Lizzy",
    age: 6,
    type: "dog",
  },
  {
    name: "Red",
    age: 1,
    type: "cat",
  },
  {
    name: "Joey",
    age: 3,
    type: "dog",
  },
  {
    name: "Rex",
    age: 10,
    type: "dog",
  },
];

// 1. Use a loop to find the sum of the dogs’ ages in human years.
// Hint: 1 dog year equals 7 human years

let sum = 0;
data.forEach((element) => {
  sum += element.age * 7;
});
console.log(sum);

// 2. Using the reduce() method, find the sum of the dogs’ ages in human years.

console.log(
  data.reduce((acc, val) => {
    return acc + val.age * 7;
  }, 0)
);
