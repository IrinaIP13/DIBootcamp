// Exercise 1 : Checking The BMI

let George = {
    fullName: 'George Lemenarchuk',
    mass: 45,
    height: 1.6,
    bmi: function(){
            return (this.mass/this.height**2)}
}

let Oksana = {
    fullName: 'Oksana Moroz',
    mass: 25,
    height: 1.1,
    bmi: function(){
    return (this.mass/this.height**2)}
}

function calculationBMI(){
    if (George.bmi()>Oksana.bmi())
    {console.log(George.fullName, 'has the largest BMI')}
    else {console.log(Oksana.fullName,  'has the largest BMI')}
}

calculationBMI()

// Exercise 2 : Grade Average

const gradesList = [54,86,89,72,65,60];

function findAvg(arr) {
    let sum = 0;
for (let i = 0; i < arr.length; i++) {
    sum += arr[i];  
}
let res = sum/arr.length
return grade(res)}

function grade(x) {
    if (x>=65) {
        console.log('You passed')}
        else {console.log('You failed and must repeat the course')}
}

findAvg(gradesList);