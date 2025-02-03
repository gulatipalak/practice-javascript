//Write a function that takes a string as input and returns the string with the first letter of each word capitalized.

function stringCapitalized(str) {
        let substring = str.split(" ");
        let capitalized_string= substring.map ((str) => str.charAt(0).toUpperCase() + str.slice(1));
        console.log(capitalized_string.join(" "));
}
 
stringCapitalized("lorem ipsum is the first letter");