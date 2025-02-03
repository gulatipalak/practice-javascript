//Write a program that checks if a number is positive, negative, or zero using an if statement.
let num = prompt("Enter a number:").trim();

if (isNaN(num) || num==="") {
	alert("Please enter a valid number.");
}
else {
	num = Number(num);
	if (num > 0 ) {
		console.log("Number is positive");
	}
	else if (num < 0 ) {
		console.log("Number is negative");
	}
	else {
		console.log("Number is zero.");
	}
}