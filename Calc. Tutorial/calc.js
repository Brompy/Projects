const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};
//

function inputDigit(digit) {
    const { displayValue, waitingForSecondOperand } = calculator;
    //Overwrite 'displayValue' if the current value is '0', otherwise append to it.
    if(waitingForSecondOperand === true) {
        calculator.displayValue = digit;
        calculator.waitingForSecondOperand = false;
    } else {
        calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    }
    console.log(calculator);
}
//

function inputDecimal(dot) {
    //IF the 'displayValue' property does not already contain a decimal point...
    if (!calculator.displayValue.includes(dot)) {
        //append the decimal point
        calculator.displayValue += dot;
    }
}
//

function handleOperator(nextOperator) {
    //Destructure the porperties on the calc. object
    const { firstOperand, displayValue, operator } = calculator
    //'parseFloat' converts string to floating-point #.
    const inputValue = parseFloat(displayValue);

    if(operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        console.log(calculator);
        return;
    }

    //verify that 'firstOperand' is null and 'inputValue' is not NaN
    if(firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    } else if (operator) {
        const result = calculate(firstOperand, inputValue, operator)
        
        calculator.displayValue = String(result);
        calculator.firstOperand = result;
    }
    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
    console.log(calculator);
}
//

function calculate(firstOperand, secondOperand, operator) {
    if (operator === '+') {
        return firstOperand + secondOperand;
    } else if (operator === '-') {
        return firstOperand - secondOperand;
    } else if (operator === '*') {
        return firstOperand * secondOperand;
    } else if (operator === '/') {
        return firstOperand / secondOperand;
    }
    return secondOperand;
}

resetCalculator = () => {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
    console.log(calculator);
}

function updateDisplay(){
    const display = document.querySelector('.calculator-screen');
    display.value = calculator.displayValue;
}

updateDisplay();

const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) => {
    const { target } = event;

    if(!target.matches('button')) {
        return;
    }

    if(target.classList.contains('operator')) {
        handleOperator(target.value);
        updateDisplay();
        return;
    }

    if(target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if(target.classList.contains('all-clear')) {
        resetCalculator();
        updateDisplay();
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});
