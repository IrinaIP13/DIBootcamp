// Line up the Turtle and the Rabbit at the start line

const startLine = "     ||<- Start line";
let turtle = "🐢";
let rabbit = "🐇";

const countSpace = countTab(startLine);
turtle = turtle.padStart(countSpace + 2, " ");
rabbit = rabbit.padStart(countSpace + 2, " ");

function countTab(array) {
  let count = 2;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === " ") count++;
    else return count;
  }
}

console.log(startLine);
console.log(turtle);
console.log(rabbit);

// What happens when you run turtle = turtle.trim().padEnd(9, '='); ?

turtle = turtle.trim().padEnd(9, "=");
console.log(turtle);
