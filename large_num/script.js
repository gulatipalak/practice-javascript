let Number1 = parseFloat(prompt("Enter any number for comparison:"));
let Number2 = parseFloat(prompt("Enter another number:"));

if (isNaN(Number1) || isNaN(Number2) || Number1<=0 || Number2<=0) {
    alert("Please enter a valid positive number for length and breadth.")
}
else {
    let largest_num = Number1 > Number2 ? Number1 : Number2 ;
    document.getElementById("result").innerHTML= largest_num;
    document.getElementById("number_1").innerHTML= Number1;
    document.getElementById("number_2").innerHTML= Number2;
}

// console.log("The area of the rectangular box is: "+ area_rectangle);