//take a number n as input from user. create an array of numbers from 1 to n.
let n = Number(prompt ("Enter any number:"));

if(n>0) {
    let arr = [];
    for (let i = 0; i<n; i++) {
        arr[i] = i + 1 ;
    }
    console.log("Array is created: " +arr);

    //use the reduce method to calculate the sum of all the numbres in the array.
    let sum = arr.reduce ((res,curr) => {
        return res + curr;
    },0 /*initial value*/);

    console.log("Sum of all the numbers in array: " + sum);

    //use the reduce method to calculate the product of all the numbres in the array.

    let pro = arr.reduce((res,curr) => {
            return res * curr;
    },1 /*initial value*/);

    console.log("Product of all the numbers in array: " + pro)
}
else {
    console.log("Please enter a positive number.")
}


