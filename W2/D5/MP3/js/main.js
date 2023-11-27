let expression = '';
function number(num) {

    expression = expression + num;
return document.getElementById('result').innerHTML = expression;
}

function operator(operator) {
    expression = expression + operator;
    return document.getElementById('result').innerHTML = expression;  
}

function equal() {
    let res = eval(expression);
    expression = expression + ' = ' + res;
    document.getElementById('result').innerHTML = expression;
    expression = res;
    return expression;
}

function resetButton() {
    expression = '';
    return document.getElementById('result').innerHTML = '0';
}

function clearButton() {
    return document.getElementById('result').innerHTML = 
    (expression = expression.substring(0,expression.length-1));
}