// 1. Create a global variable called bankAmount which value is the amount
// of money currently in your account.
const bankAmount = 3232;

// 2. Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
const vat = 0.17;

// 3. Create an array with all your monthly expenses, both positive
// and negative (money made and money spent).
const details = ["+200", "-100", "+146", "+167", "-2900"];

// 4. Create a program that modifies the expenses (ie. the positive AND
//     the negative expenses) so that they will include taxes
//     (multiply each expense by the VAT).
// 5. Display your current bankAccount standing at the end of the month.

const currentBankAccount = addVatAndTotal(details);
const currentBankAccount2 = addVatAndTotal2(details);
console.log(currentBankAccount, currentBankAccount2);

function addVatAndTotal(expenses) {
    let total = 5000;
    expenses.forEach(element => {
        const expense = Number(element);
        total += expense*(1+vat);
    });
    return total;
}

function addVatAndTotal2(expenses) {
    return expenses.reduce((total, current) => {
    return (total += Number(current)*(1+vat))
    }, 5000);
}

