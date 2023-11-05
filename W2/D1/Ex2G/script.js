// Exercise 1 : Favorite Color -----------------------
let sentence = ["my","favorite","color","is","blue"];
let sentenseString = sentence.join()
console.log(sentenseString)

// Exercise 2 : Mixup -------------------------------
let str1 = "mix";
let str2 = "pod";
str1 = str2.slice(0,2)+str1
str2 = str1.slice(2,4)+str2.slice(-1)
str1 = str1.slice(0,2)+str1.slice(-1)
console.log(str1)
console.log(str2)
console.log(str1.concat(" ", str2))

// Exercise 3 : Calculator----------------------------
let num1 = +prompt("enter the first number");
let num2 = +prompt("enter the second number");
alert(String(num1 + ' + ' + num2 + ' = ' + (num1+num2)));
alert(String(num1 + ' - ' + num2 + ' = ' + (num1-num2)));
alert(String(num1 + ' * ' + num2 + ' = ' + (num1*num2)));
alert(String(num1 + ' / ' + num2 + ' = ' + (num1/num2)));
