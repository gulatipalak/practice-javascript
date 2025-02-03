//Use reduce to calculate the average of an array of numbers.

let arr = [20,1,40,3,6];

let sum = arr.reduce((acc,curr) => {
        acc = acc + curr;
        return acc;
});

let avg = sum/arr.length;

console.log(avg);