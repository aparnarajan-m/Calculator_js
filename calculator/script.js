let displayValue  = "";
let n1 = "";
let operator = "";
let n2 = "";

function getValue(value) {
    displayValue += value;
    document.getElementById("screen").value = displayValue;
}

function getOperator(op) {
    n1 = displayValue;
    operator = op;
    displayValue = "";
}

function calculate() {
    n2 = displayValue;
    let result = 0;
    switch (operator) {
        case '+':
            result = Number(n1) + Number(n2);
            break;
        case '-':
            result = Number(n1) - Number(n2);
            break;
        case '*':
            result = Number(n1) * Number(n2);
            break;
        case '/':
            result = Number(n1) / Number(n2);
            break;        
    }
    displayValue = result.toString();
    document.getElementById("screen").value = displayValue;
    n1 = "";
    operator = "";
    n2 = "";
}

function clearScreen() {
    displayValue = "";
    n1 = "";
    operator = "";
    n2 = "";
    document.getElementById("screen").value = "";
}