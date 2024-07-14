function displayStudentInfo(objUser) {
  let { first, last } = objUser;
  console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo({ first: "Elie", last: "Schoppik" });

function displayStudentInfo2({ first, last }) {
  console.log(`Your full name is ${first} ${last}`);
}

displayStudentInfo2({ first: "Elie", last: "Schoppik" });
