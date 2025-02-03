//Create a function using an arrow function expression that calculates the factorial of a number.

let factorial = (num) => {
    let fact = 1;
    for( let i= 1; i<=num ; i++){
        fact *= i;
    }
    return fact;
}

let number = Number(prompt("Enter a number to calculate factorial of:"));

console.log(factorial(number));