const totalTip = document.getElementById('totalTip');

function calculateTip() {
    const textEach = document.getElementById('each');
    textEach.style.display = 'inline';
    const billAmount = document.getElementById('billamt').value;
    const serviceQuality = document.getElementById('serviceQual').value;
    let numberOfPeople = document.getElementById('peopleamt').value;
    
    if (serviceQuality==='0'||billAmount===''||billAmount.match(/[^0-9]/)) 
    alert('Please enter a correct value');
    if (numberOfPeople<=1||numberOfPeople.match(/[^0-9]/)||numberOfPeople==='') {
        numberOfPeople = 1;
        document.getElementById('peopleamt').value = '1';
        textEach.style.display = 'none';
    }  
    
    let total = +(billAmount*serviceQuality)/numberOfPeople;
    total.toFixed(2);
    
    totalTip.style.display = 'block';
    
    document.getElementById('tip').innerText = total;
}

totalTip.style.display = 'none';

document.getElementById('calculate').onclick = (calculateTip);






// In this exercise you will calculate how much your tip would be after eating in a restaurant.

// First Part :
// Create a js file name main.js.

// Create a function called calculateTip() that takes no parameter.

// Create a variable called billAmount that fetches the value of the input, which id is billAmt (check the HTML file) –> It’s the amount of the bill.

// Create a variable called serviceQuality that fetches the value of the input, which id is serviceQual (check the HTML file) –> It’s the quality of the service.

// Create a variable called numberOfPeople that fetches the value of the input, which id is numOfPeople (check the HTML file) –> It’s the number of people sitting at the table.

// Create a condition :
// If serviceQuality is equal to zero, or billAmount is empty, alert the user to enter these values.

// Create another condition after the first one :
// If the input numberOfPeople is empty or is smaller than 1, set a default value of 1 to numberOfPeople and make sure that the tag which id is each, is not displayed (check the end of the HTML file).

// Create a variable named total: the value should be ( billAmount * serviceQuality ) / numberOfPeople (the outcome is the average tip each person should pay)

// Use the toFixed method to round total to two decimal points.

// Add the CSS property “display:block” to the tag which id is totalTip.

// Display the variable total in the tag which id is tip.


// Second Part:
// To avoid displaying the total if the function calculateTip() is not called, add the CSS property “display:none” to the tag which id is totalTip.
// Call the function calculateTip() when the tag which id is calculate is clicked.
// Hint : use the method onclick.
