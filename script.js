function add(a, b) {
    return a + b;
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

buttons.forEach((button) => {
    button.addEventListener("click", function(e) {
        if (e.target.className === "number") {
            display.textContent += e.target.textContent;
        }
    });
});

