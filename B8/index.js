// --------HOMEWORK----------------

// Bai tap 1

// Using If statement
const operator = prompt("Enter operator (either +, -, * or /): ");
let a = parseInt(prompt("Enter number a: "));
let b = parseInt(prompt("Enter number b: "));
let result = 0;

if (operator === "+") {
    result = a + b;
    console.log(`${a} ${operator} ${b} = ${result}`);
} else if (operator === "-") {
    result = a - b;
    console.log(`${a} ${operator} ${b} = ${result}`);
} else if (operator === "*") {
    result = a * b;
    console.log(`${a} ${operator} ${b} = ${result}`);
} else if (operator === "/") {
    result = a / b;
    console.log(`${a} ${operator} ${b} = ${result}`);
} 


// Using switch statement
const operator = prompt("Enter operator (either +, -, * or /): ");
let a = parseInt(prompt("Enter number a: "));
let b = parseInt(prompt("Enter number b: "));
let result = 0;

switch (operator) {
    case "+":
    result = a + b;
    console.log(`${a} ${operator} ${b} = ${result}`);
    break;

    case "-":
    result = a - b;
    console.log(`${a} ${operator} ${b} = ${result}`);
    break;

    case "*":
    result = a * b;
    console.log(`${a} ${operator} ${b} = ${result}`);
    break;

    case "/":
    result = a / b;
    console.log(`${a} ${operator} ${b} = ${result}`);
    break;
}


// Bai tap 2
// Using if statement
const number = parseInt(prompt("Enter a number: "));
let isPrime = true;

if (number <= 1) {
    console.log(`${number} is neither prime or composite`);
} else if (number > 1) {
    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        console.log(`${number} is a prime number`);
    } else {
        console.log(`${number} is not a prime number`);
    }
}


// --------LAB---------------------------------

// let a = 10;
// let b = 15;

// console.log(a > b);

// console.log(a == "10");

// console.log(a === "10");

// let x = 5;
// let y = 6;

// console.log(x !== y);

// Kiem tra tu 1 den 10 co bn so le

// let count = 0;
// for (let i = 1; i <= 10; i++) {
//     if (i % 2 === 1) {
//         count += 1;
//     }
// }
// console.log(count);

