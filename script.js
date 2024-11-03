/* mathematic functions: */
function add (a, b) {
    return a + b;
};

function subtract (a, b) {
    return a - b;
};

function multiply (a, b) {
    return a * b;
};

function divide (a, b) {
    return a / b;
};


/* operation variables */

let numbOne = '';
let numbTwo = '';
let operation = '';
let display = document.querySelector("#display");
const MAX_LENGTH = 8; // display maximum length

/* button functionalities: */
document.querySelector("#clear").addEventListener('click', function () {
    display.textContent = '';
    numbOne = '';
    numbTwo = '';
    operation = '';
});

document.querySelector("#backspace").addEventListener('click', function () {
    if (display.textContent.length > 0) {
        display.textContent = display.textContent.slice(0, -1);
    }
});

// PERCENTAGE
let percentage = true;

document.querySelector("#percentage").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH && percentage) {
        display.textContent = '0.' + display.textContent;
    } else {
        display.textContent = display.textContent.replace('0.','');
    }
    percentage = !percentage // toggle
});
document.querySelector("#numbSeven").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent +='7';
    }
});
document.querySelector("#numbEight").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '8';
    }
});
document.querySelector("#numbNine").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '9';
    }
});
document.querySelector("#numbFour").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '4';
    }
});
document.querySelector("#numbFive").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '5';
    }
});
document.querySelector("#numbSix").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '6';
    }    
});
document.querySelector("#numbThree").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '3';
    }
});
document.querySelector("#numbTwo").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '2';
    }
});
document.querySelector("#numbOne").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '1';
    }
});
document.querySelector("#numbZero").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '0';
    }
});

let maxOperator = 1;
let operatorCount = 0; // this avoids equations with multiple operators

document.querySelector("#add").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH && operatorCount < maxOperator) {
        operatorCount += 1;
        display.textContent += '+';
    } else {
        expressionResult(display.textContent)
    }
});
document.querySelector("#subtract").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH && operatorCount < maxOperator) {
        display.textContent += '-';
    } else {
        expressionResult(display.textContent)
    }
});
document.querySelector("#multiply").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH && operatorCount < maxOperator) {
        operatorCount += 1;
        display.textContent += '*';
    } else {
        expressionResult(display.textContent)
    }
});
document.querySelector("#divide").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH && operatorCount < maxOperator) {
        operatorCount += 1;
        display.textContent += '/';
    } else {
        expressionResult(display.textContent)
    }
});

let maxDot = 2;
let dotCount = 0; // this limits dots to 2.

document.querySelector("#dot").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH && dotCount < maxDot) {
        dotCount += 1;
        display.textContent += '.';
    } else {
        expressionResult(display.textContent)
    }
});

// this is the operation function
function operate (a, b, operation) {
    let result;
    if (operation === '+') {
        result = add(a, b);
    }
    else if (operation === '-') {
        result = subtract(a, b);
    }
    else if (operation === '*') {
        result = multiply(a, b);
    }
    else if (operation === '/') {
        if (b === 0) {
            return 'Nice Try'; // handle division by zero
        }
        result = divide(a, b);
    } else {
        return null;
    }
    return parseFloat(result.toFixed(5));
}


// this finishes the equation once '=' is pressed
document.querySelector("#equal").addEventListener('click', function () {
    expressionResult(display.textContent);
});
    


function expressionResult (a) {
    const expression = a;
    const parts = expression.split(/([\+\-\*\/])/).map(part => part.trim());     // this part splits the string and turns it into an array
    // this splits the array intro 3 parts: number 1, operator and number 2
    if (parts.length === 3) {
        let numbOne = parseFloat(parts[0]);
        let operation = parts[1];
        let numbTwo = parseFloat(parts[2]);

        // this prevents trolling the calculator
        if (isNaN(numbTwo)) {
            numbTwo = numbOne;
        };


        // calls the function
        let result = operate(numbOne, numbTwo, operation);
        operatorCount = 0; // resets the operator
        dotCount = 0; // resets the dot count
        display.textContent = result; // displays the result
        operation = '';
        numbOne = '';
        numbTwo = '';
        console.log(result);

    } else {
        display.textContent = '';
        operation = '';
        operatorCount = 0;
        dotCount = 0;
    }
};