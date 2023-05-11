// Exercise 1 : Evaluation -----------------------
5 >= 1 //true
0 === 1 //false
4 <= 1 //false
1 != 1 //false
"A" > "B" //false
"B" < "C" //true
"a" > "A" //true
"b" < "A" //false
true === false //false
true != true //false

// Exercise 2 : Ask For Numbers -------------------
let strEnter = prompt('Enter three numbers separated by commas');
let arrEnter = strEnter.split(',');
arrEnter[0] = +(arrEnter[0])
arrEnter[1] = +(arrEnter[1])
arrEnter[2] = +(arrEnter[2])
let res2 = arrEnter[0]+arrEnter[1]+arrEnter[2];
alert('Sum of numbers ' + res2)

// Exercise 3 : Find Nemo ------------------------
let strEnterNemo = prompt('Write a sentence containing the word "Nemo"');
let arrEnterNemo = strEnterNemo.split(' ');
let res3 = arrEnterNemo.indexOf('Nemo');
if (res3>=0) alert ('I found Nemo at ' + res3) 
else alert('I can’t find Nemo')

// Exercise 4 : Boom ------------------------------
let num = +prompt("enter the number");
let arr = ['b', 'o', 'o', 'm'];
let o = 'o';
let res4;
if (num<2) alert(arr.join(''))
else { 
    o = o.repeat(num-1);
    arr[1] = o;
    if (num%2==0) {res4 = arr.join('')+'!'}
    else {res4 = arr.join('')};
    if (num%5==0) res4 = res4.toUpperCase();
    alert(res4);
    }