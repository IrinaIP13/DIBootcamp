// Exercise 1 : Information ----------------------

function infoAboutMe() {
    console.log('My name is Irina, I am 41 years old, I love taking photos');
}
infoAboutMe()

function infoAboutPerson(personName, personAge, personFavoriteColor) {
    console.log('Your name is', personName + ', you are', personAge, 
    'years old, your favorite color is', personFavoriteColor);
}
infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")

// Exercise 2 : Tips -------------------------------

function calculateTip() {
    let tip = 0;
    let amountBill = +prompt('Amount of the bill');
    if (amountBill<50) {
        tip = amountBill/100*20
    } else if (50<=amountBill<=200) {
        tip = amountBill/100*15}
        else {
            amountBill/100*10}
    console.log(amountBill, '+', tip, '=', amountBill+tip);
}
calculateTip()

// Exercise 3 : Find The Numbers Divisible By 23 -----

let enterDivisor = +prompt('Enter divisor')
isDivisible(enterDivisor)

function isDivisible(divisor) {
    let res = 0;
    let strNum = '';
    for (let i = 0; i <= 500; i++) {
        if (i%divisor==0) {
            strNum = strNum + i +' '
            res += i
        }        
    }
    console.log(strNum)
    console.log(res);
}

// Exercise 4 : Shopping List ---------------------

const stock = { 
    "banana": 6, 
    "apple": 0,
    "pear": 12,
    "orange": 32,
    "blueberry":1
}  
const prices = {    
    "banana": 4, 
    "apple": 2, 
    "pear": 1,
    "orange": 1.5,
    "blueberry":10
} 

let shoppingList = ['banana', 'orange', 'apple']

console.log(myBill())
console.log(stock);

function myBill() {
    let res = 0;
    for (let index = 0; index < shoppingList.length; index++) {
        if (stock[shoppingList[index]]==0 in stock) {
            console.log(shoppingList[index], 'is out of stock')}
            else {res += prices[shoppingList[index]]
                stock[shoppingList[index]]--}
    } 
    return res       
}

// Exercise 5 : What’s In My Wallet ? ------------------

function changeEnough(itemPrice, amountOfChange) {
    let res = 0
    res += (0.25*amountOfChange[0])
    res += (0.1*amountOfChange[1])
    res += (0.05*amountOfChange[2])
    res += (0.01*amountOfChange[3])
    if (itemPrice<=res) {
        return true
    } else {return false}
}

console.log(changeEnough(4.25, [25, 20, 5, 0]))
console.log(changeEnough(14.11, [2, 100, 0, 0]))
console.log(changeEnough(0.75, [0, 0, 20, 5]))

// Exercise 6 : Vacations Costs ---------------------

function hotelCost(){
    let nightsHotel;
    let pattern = /[^0-9]/;
    do {
        nightsHotel = prompt('The number of nights you would like to stay in the hotel')
    } while (pattern.test(nightsHotel))
    return nightsHotel*140
}

function planeRideCost(){
    let destination;
    let pattern = /[^a-zA-Z]/;
    do {
        destination = prompt('Your destination')
    } while (pattern.test(destination))
    if (destination=='London') {
        return 183
    } else if (destination=='Paris') {
        return 220
    } else {
        return 300
    }
}    

function rentalCarCost() {
    let rentCar;
    let pattern = /[^0-9]/;
    do {
        rentCar = prompt('The number of days would you like to rent the car')
    } while (pattern.test(rentCar))
    if (rentCar<=10) {
        return rentCar*40
    } else {
        return rentCar*40-rentCar*40*5/100
    }    
}

function totalVacationCost() {
    console.log('The car cost: $' + rentalCarCost() + 
    ', the hotel cost: $' + hotelCost() + 
    ', the plane tickets cost: $'+ planeRideCost());
}

totalVacationCost()

// Exercise 6 BONUS : Vacations Costs -----------------

function hotelCost(y){
    return y*140
}

function planeRideCost(z){
    if (z=='London') {
        return 183
    } else if (z=='Paris') {
        return 220
    } else {
        return 300
    }
}    

function rentalCarCost(x) {
    if (x<=10) {
        return x*40
    } else {
        return x*40-x*40*5/100
    }    
}

function totalVacationCost() {
    let rentCar;
    do {
        rentCar = prompt('The number of days would you like to rent the car')
    } while (/[^0-9]/.test(rentCar))
    let nightsHotel;
    do {
        nightsHotel = prompt('The number of nights you would like to stay in the hotel')
    } while (/[^0-9]/.test(nightsHotel))
    let destination;
    do {
        destination = prompt('Your destination')
    } while (/[^a-zA-Z]/.test(destination))


    console.log('The car cost: $' + rentalCarCost(rentCar) + 
    ', the hotel cost: $' + hotelCost(nightsHotel) + 
    ', the plane tickets cost: $'+ planeRideCost(destination));
}

totalVacationCost()