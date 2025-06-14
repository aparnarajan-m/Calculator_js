let displayValue  = "";
let n1 = "";
let operator = "";
let n2 = "";

//Value Adding on Display
function press(value) {
    displayValue += value;
    document.getElementById("display").value = displayValue;
}

//Setting Operators
function setOperator(op) {
    n1 = displayValue;
    operator = op;
    displayValue += operator;
    document.getElementById("display").value = displayValue;
}

//find numbers squares
function square() {
    displayValue = displayValue ** 2;
    document.getElementById("display").value = displayValue;
}
// Calculate the values
function calculate() {
    let parts = displayValue.split(operator);
    n2 = parts[1];

    let result = 0;
    switch (operator) {
        case "+":
            result = Number(n1) + Number(n2);
            break;
        case "-":
            result = Number(n1) - Number(n2);
            break;
        case "*":
            result = Number(n1) * Number(n2);
            break;
        case "/":
            result = Number(n1) / Number(n2);
            break;
        default:
            result = "Error";            
    }
    displayValue = result.toString();
    document.getElementById("display").value = displayValue;

    n1 = "";
    operator = "";
    n2 = "";
}

//Delete the lastOnes
function deleteLast() {
    displayValue = displayValue.slice(0, -1);
    document.getElementById("display").value = displayValue;
}

//Clear display
function clearDisplay() {
    displayValue = "";
    n1 = "";
    operator = "";
    n2 = "";

    document.getElementById("display").value = "";
}

//Adding keyBoard Support
document.addEventListener("keydown", function(event) {
    const key = event.key;
    if (!isNaN(key) || key === ".") {
        press(key); 
    } else if (["+", "-", "*", "/"].includes(key)) {
        setOperator(key); 
    } else if (key === "Enter" || key === "=") {
        calculate(); 
    } else if(key === "Backspace" || key === "DEL"){
        deleteLast();
    }else if (key === "Delete" || key === "AC") {
        clearDisplay(); 
    }
});
