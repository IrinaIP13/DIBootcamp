// Evaluate these (ie True or False)

console.log([2] === [2], {} === {});

// What is, for each object below, the value of the property number and why?

const object1 = { number: 5 };
const object2 = object1;
const object3 = object2;
const object4 = { number: 5 };

object1.number = 4;
console.log(object2.number);
console.log(object3.number);
console.log(object4.number);

// Create a class Animal with the attributes name, type and color. The type is the animal type, for example: dog, cat, dolphin ect …

class Animals {
  constructor(name, type, color) {
    this.name = name;
    this.type = type;
    this.color = color;
  }
}

// Create a class Mamal that extends from the Animal class. Inside the class, add a method called sound(). This method takes a parameter: the sound the animal makes, and returns the details of the animal (name, type and color) as well as the sound it makes.

class Mamal extends Animals {
  constructor(name, type, color) {
    super(name, type, color);
  }

  sound(noise) {
    return console.log(
      `${noise} I'm a ${this.type}, named ${this.name} and I'm ${this.color}`
    );
  }
}

// Create a farmerCow object that is an instance of the class Mamal. The object accepts a name, a type and a color and calls the sound method that “moos” her information.
// For example: Moooo I'm a cow, named Lily and I'm brown and white

let cow1 = new Mamal("Lily", "cow", "brown and white");
cow1.sound("Moooo");
