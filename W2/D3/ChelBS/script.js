const numbers = [5,0,9,1,7,4,2,6,3,8];
console.log(numbers.toString());
console.log(numbers.join('+'));
console.log(numbers.join(' '));
console.log(numbers.join(''));
let temp;
for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length-i; j++) {
        if (numbers[j]<numbers[j+1]){
            temp = numbers[j+1];
            numbers[j+1] = numbers[j];
            numbers[j] = temp;
        } 
    }}
    console.log(numbers); 
