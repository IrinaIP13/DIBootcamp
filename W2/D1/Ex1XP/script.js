let addressNumber = '13';
let addressStreet = 'Yerushalayim 63';
let country = 'Israel';

let globalAddress = "";
globalAddress = globalAddress.concat("I live in ", addressStreet, " ", addressNumber, ", in ", country);

document.getElementById("demo").innerHTML = globalAddress;
console.log(globalAddress);