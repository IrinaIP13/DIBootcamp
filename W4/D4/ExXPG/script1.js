// 1. Create a function called printFullName.
// 2. The function should return a string like the example below
// 'Your full name is Elie Schoppik`

function printFullName(objFullName) {
  console.log(`Your full name is ${objFullName.first} ${objFullName.last}`);
}

printFullName({ first: "Elie", last: "Schoppik" });
