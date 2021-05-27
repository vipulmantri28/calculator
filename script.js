const number = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operation');
const deleteButton = document.querySelector('.delete');
const allClear = document.querySelector('.all-clear');
const equalTo = document.querySelector('.equal-to');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');
let operand = undefined;

allClear.addEventListener('click', function() {
    previousOperand.innerHTML = "";
    currentOperand.innerHTML = "";
})

deleteButton.addEventListener('click', function() {
    currentOperand.innerHTML = currentOperand.innerHTML.toString().slice(0, -1);
})

number.forEach(number => {
    number.addEventListener('click', function() {
        if(number.innerHTML === "." && currentOperand.innerHTML.toString().includes('.')) return
        currentOperand.innerHTML = currentOperand.innerHTML.toString() + number.innerHTML.toString();
    })
})

operation.forEach(operation => {
    operation.addEventListener('click', function() {
        operand = operation.innerHTML;
        previousOperand.innerHTML = currentOperand.innerHTML.toString() + " " + operand;
        currentOperand.innerHTML = "";
    } )
})

equalTo.addEventListener('click', function() {
    if (currentOperand.innerHTML === "") return
    if(operand === "÷") {
        currentOperand.innerHTML = Number.parseFloat(previousOperand.innerHTML.toString().slice(0, -2)) / 
        Number.parseFloat(currentOperand.innerHTML);
    } else if(operand === "*") {
        currentOperand.innerHTML = Number.parseFloat(previousOperand.innerHTML.toString().slice(0, -2)) * 
        Number.parseFloat(currentOperand.innerHTML);
    } else if(operand === "+") {
        currentOperand.innerHTML = Number.parseFloat(previousOperand.innerHTML.toString().slice(0, -2)) + 
        Number.parseFloat(currentOperand.innerHTML);
    } else if(operand === "-") {
        currentOperand.innerHTML = Number.parseFloat(previousOperand.innerHTML.toString().slice(0, -2)) - 
        Number.parseFloat(currentOperand.innerHTML);
    }
    previousOperand.innerHTML = "";
})