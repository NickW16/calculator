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

/*
let numbOne = 10;
let numbTwo = 5;
let result = subtract(numbOne, numbTwo);
console.log(result);
/*

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

let isPositive = true;

document.querySelector("#plus-or-minus").addEventListener('click', function () {
    if (isPositive) {
        display.textContent = '-' + display.textContent;
    } else {
        display.textContent = display.textContent.replace('-','');
    }
    isPositive = !isPositive; // toggle feature
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
        operatorCount += 1;
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

let maxDot = 1;
let dotCount = 0; // this limits dots to 1.

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
            return 'Nice Try'; // division by zero
        }
        result = divide(a, b);
    } else {
        return null;
    }
    return parseFloat(result.toFixed(7));
}


// this finishes the equation once '=' is pressed
document.querySelector("#equal").addEventListener('click', function () {
    expressionResult(display.textContent);
});
    


function expressionResult(a) {
    const expression = a;
    const parts = expression.match(/-?\d+\.?\d*|[+\-*\/]/g);

    // Check if we have at least three parts:
    if (parts && parts.length >= 3) {
        let numbOne = parseFloat(parts[0]);
        let operation = parts[1];
        let numbTwo = parseFloat(parts[2]);

        //check if negative
        if (parts[0].startsWith('-') && !isNaN(numbOne)) {
            numbOne = -Math.abs(numbOne);
        }

        // this is to prevent trolling
        if (isNaN(numbTwo)) {
            numbTwo = numbOne; 
        }

        // Call the operation function
        let result = operate(numbOne, numbTwo, operation);
        
        // display and reset
        display.textContent = result; 
        operatorCount = 0; 
        dotCount = 0; 
        numbOne = '';
        numbTwo = '';
        operation = '';
    } else {
        display.textContent = 'Error';
        operatorCount = 0;
        dotCount = 0;
        numbOne = '';
        numbTwo = '';
        operation = '';
    }
}