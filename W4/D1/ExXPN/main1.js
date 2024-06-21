const menu = [
  {
    type: "starter",
    name: "Houmous with Pita",
  },
  {
    type: "starter",
    name: "Vegetable Soup with Houmous peas",
  },
  {
    type: "dessert",
    name: "Chocolate Cake",
  },
];

// Using an array method and ternary operator, check if at least one
// element in the menu array is a dessert.

menu.find(findDessert);

function findDessert(value) {
  return value.type === "dessert" ? console.log("Menu contains dessert") : 0;
}

// Using an array method, check if all the elements in the array are starters.

console.log("All menu items are starter: " + menu.every(checkStarter));

function checkStarter(value) {
  return value.type === "starter";
}

// Using an array method, check if there is at least one element in
// the array that is a main course. If not, add a main course of your
// choice to the array.

if (menu.some(findMain) === false) menu.push({ type: "main", name: "Soup" });

function findMain(value) {
  return value.type === "main";
}

// Using this array :

const vegetarian = ["vegetable", "houmous", "eggs", "vanilla", "potatoes"];

// Using an array method, add a key “vegetarian” (a boolean) to the menu
// array. The value of the key should be true if the name of the course
// contains at least one element from the vegetarian array.

menu.forEach((element) => {
  element.vegetarian = false;
  for (let i = 0; i < vegetarian.length; i++) {
    nameLC = element.name.toLowerCase();
    if (nameLC.includes(vegetarian[i])) element.vegetarian = true;
  }
});
console.log(menu);
