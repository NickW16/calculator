/* mathematic functions: */
function add (a, b) {
    let result = a + b;
    return result
};

function subtract (a, b) {
    let result = a - b;
    return result
};

function multiply (a, b) {
    let result = a * b;
    return result
};

function divide (a, b) {
    let result = a / b;
    return result
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
document.querySelector("#percentage").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '%';
    }
});
document.querySelector("#divide").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '/';
    }
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
document.querySelector("#multiply").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '*';
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
document.querySelector("#add").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '+';
    }
});
document.querySelector("#subtract").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '-';
    }
});
document.querySelector("#dot").addEventListener('click', function () {
    if (display.textContent.length < MAX_LENGTH) {
        display.textContent += '.';
    }
});

// this is the operation function
function operate (a, b, operation) {
    if (operation === '+') {
        return add(a, b);
    };
    if (operation === '-') {
        return subtract(a, b);
    };
    if (operation === '*') {
        return multiply(a, b);
    };
    if (operation === '/') {
        return divide(a, b);
    } else {
        return null;
    }
}


// this finishes the equation once '=' is pressed
document.querySelector("#equal").addEventListener('click', function () {
    const expression = display.textContent;
    const parts = expression.split(/([\+\-\*\/])/);     // this part splits the string and turns it into an array

    // this splits the array intro 3 parts: number 1, operator and number 2
    if (parts.length === 3) {
        let numbOne = parseFloat(parts[0].trim());
        let operation = parts[1].trim();
        let numbTwo = parseFloat(parts[2].trim());

        // calls the function
        let result = operate(numbOne, numbTwo, operation);

        // displays the result
        display.textContent = result;
    }
});
