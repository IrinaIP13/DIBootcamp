// Analyze this code, what will be the output ?

let newArray = [1, 2, 3].map((num) => {
  if (typeof num === "number") return num * 2;
  return;
});

console.log(newArray);
