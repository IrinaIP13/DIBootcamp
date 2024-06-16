const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

for (let i = 0; i < colors.length; i++) {
  const num = i + 1;
  console.log(
    num +
      ((num === 1) | (num === 2) | (num === 3) ? ordinal[num] : ordinal[0]) +
      " choice is " +
      colors[i]
  );
}
