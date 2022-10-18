function add(a, b) {
    return parseInt(a) + parseInt(b);
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function operate(func, a, b) {
    return func(a, b);
}

const display = document.querySelector("#display")
const buttons = document.querySelectorAll("button");

let displayValue = 0;
let storedValue = 0;
let operator = null;

buttons.forEach((button) => {
    button.addEventListener("click", function(e) {
        if (e.target.className === "number") {
            display.textContent += e.target.textContent;
            displayValue = display.textContent;
        } 

        if (e.target.className === "operator") {
            operator = e.target.id;
            storedValue = displayValue;
            display.textContent = "";
        }
        
        if (e.target.id === "btn-equals") {
            console.log(storedValue);
            console.log(displayValue);
            console.log(operate(add, storedValue, displayValue));
        }
    });
});

