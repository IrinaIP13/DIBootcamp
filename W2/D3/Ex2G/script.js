// Exercise 1 : Divisible By Three

let numbers = [123, 8409, 100053, 333333333, 7];
numbers.forEach(item => {
    console.log(item%3===0);
});

// Exercise 2 : Attendance

let guestList = {
    randy: "Germany",
    karla: "France",
    wendy: "Japan",
    norman: "England",
    sam: "Argentina"
  }
let nameGuest = prompt('Enter name');
let nameGuestCor = nameGuest.toLowerCase();
if (nameGuestCor in guestList){
    console.log('Hi! I\'m', nameGuest, 
    'and I\'m from', guestList[nameGuestCor])
}
else console.log('Hi! I\'m a guest');

// Exercise 3 : Playing With Numbers

let age = [20,5,12,43,98,55];
let sum = 0;
age.forEach(item => {
    sum += item;
});
console.log(sum);
let max = 0;
for (const i of age) {
    if(max<i) max=i;
}
console.log(max);

