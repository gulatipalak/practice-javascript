//Given a string, return the number of vowels in it.

function countVowels(str) {
        
        str = str.toLowerCase();
        let count = 0;

        for(char of str) {
                if (char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
                       count++; 
                }
        }
        return count;
}
 
let string = "madhavi";
console.log(`Number of vowels in ${string} are ${countVowels(string)}`);// template litrals