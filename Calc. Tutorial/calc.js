const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

function inputDigit(digit) {
    const { displayValue } = calculator;
    //Overwrite 'displayValue' if the current value is '0', otherwise append to it.
    calculator.displayValue = displayValue === '0' ? digit : displayValue + digit;
    console.log(calculator);
}

function inputDecimal(dot) {
    //IF the 'displayValue' property does not already contain a decimal point...
    if (!calculator.displayValue.includes(dot)) {
        //append the decimal point
        calculator.displayValue += dot;
    }
}

function handleOperator(nextOperator) {
    //Destructure the porperties on the calc. object
    const { firstOperand, displayValue, operator } = calculator
    //'parseFloat' converts string to floating-point #.
    const inputValue = parseFloat(displayValue);

    //verify that 'firstOperand' is null and 'inputValue' is not NaN
    if(firstOperand === null && !isNaN(inputValue)) {
        calculator.firstOperand = inputValue;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
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
    }

    if(target.classList.contains('decimal')) {
        inputDecimal(target.value);
        updateDisplay();
        return;
    }

    if(target.classList.contains('all-clear')) {
        console.log('clear', target.value);
        return;
    }

    inputDigit(target.value);
    updateDisplay();
});
