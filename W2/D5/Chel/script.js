let number = +prompt('Enter number')
while (/[^0-9]/.test(number)) {
    number = prompt('This is not a number, enter a number')
}
console.log(number + ' bottles of beer on the wall');
for (let i = 1; i < number+1; i++) {
    if (i==1) {
        console.log('Take 1 down, pass it around');
    } else {
        console.log('Take ' + i + ' down, pass them around');
    }
    console.log((number-i) + ' bottles of beer on the wall');
}
