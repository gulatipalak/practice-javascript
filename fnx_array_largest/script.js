//Write a function that accepts an array of numbers and returns the largest number in the array

function largest(arr) {

    if (arr.length === 0) {
        console.log("Array is empty.");
        return;
    }
    
    let output = arr.reduce((accumulator , current) => {
        let largest_num = accumulator ;
        if (accumulator > current) {
            largest_num = accumulator ;
        }
        else {
            largest_num = current;
        }
        return largest_num;
    });

    console.log (output);
}

largest([31,5,9,30]);