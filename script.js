const number = document.querySelectorAll('.number');
const operation = document.querySelectorAll('.operation');
const deleteButton = document.querySelector('.delete');
const allClear = document.querySelector('.all-clear');
const equalTo = document.querySelector('.equal-to');
const previousOperand = document.querySelector('.previous-operand');
const currentOperand = document.querySelector('.current-operand');
let operand = undefined;

allClear.addEventListener('click', function() {
    previousOperand.textContent = "";
    currentOperand.textContent = "";
})

deleteButton.addEventListener('click', function() {
    currentOperand.innerHTML = currentOperand.textContent.toString().slice(0, -1);
})

number.forEach(number => {
    number.addEventListener('click', function() {
        if (Number.isNaN(Number(previousOperand.textContent))  === false) previousOperand.textContent = ""
        if(number.textContent === "." && currentOperand.textContent.toString().includes('.')) return
        currentOperand.textContent = currentOperand.textContent.toString() + number.textContent.toString();
    })
})

operation.forEach(operation => {
    operation.addEventListener('click', function() {
        operand = operation.textContent;
        if (currentOperand.textContent === "" && previousOperand.textContent !== "") {
            previousOperand.textContent = previousOperand.textContent.toString().slice(0, -1) + operand;
        }else {
            previousOperand.textContent = currentOperand.textContent.toString() + " " + operand;
        }
        currentOperand.textContent = "";
    } )
})

equalTo.addEventListener('click', function() {
    if (currentOperand.textContent === "" || currentOperand.textContent === ".") return
    if(operand === "÷") {
        previousOperand.textContent = Number.parseFloat(previousOperand.textContent.toString().slice(0, -2)) / 
        Number.parseFloat(currentOperand.textContent);
    } else if(operand === "*") {
        previousOperand.textContent = Number.parseFloat(previousOperand.textContent.toString().slice(0, -2)) * 
        Number.parseFloat(currentOperand.textContent);
    } else if(operand === "+") {
        previousOperand.textContent = Number.parseFloat(previousOperand.textContent.toString().slice(0, -2)) + 
        Number.parseFloat(currentOperand.textContent);
    } else if(operand === "-") {
        previousOperand.textContent = Number.parseFloat(previousOperand.textContent.toString().slice(0, -2)) - 
        Number.parseFloat(currentOperand.textContent);
    }
    currentOperand.textContent = "";
})