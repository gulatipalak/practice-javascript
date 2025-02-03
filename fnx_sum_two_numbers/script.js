// Write a program that does the following:

// Takes an array of strings (names).
let names = ["Palak", "Madhavi", "Priti", "Shubham", "Ragav"];

// Filters out names that are shorter than 5 characters.
let shorter_name = names.filter( (value) => value.length < 5 );
console.log("Names that are shorter than 5 characters: " + shorter_name);

// Transforms the remaining names to uppercase.

let longer_names= names.filter( (value) => value.length >= 5 ).map((value) => value.toUpperCase());
console.log("Remaining names to uppercase: " + longer_names);// string + array returns String.
//console.log(longer_names); // returns array.

// Calculates the total length of all the names in the array.

let length_of_names = names.map((value) => {
    return "Number of characters in the " + value +" : "+ value.length;
});


console.log(length_of_names.join(", "));