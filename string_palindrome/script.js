//Write a function that checks if a string is a palindrome (reads the same forward and backward).

function isStringPalindrome(str) {
        // Convert to lowercase and remove non-alphanumeric characters (optional)
        str = str.toLowerCase().replace(/[^a-z0-9]/g, "");
       let reversed_string = str.split("").reverse().join("");
       return str === reversed_string;
}
 
console.log(isStringPalindrome("kalak"));