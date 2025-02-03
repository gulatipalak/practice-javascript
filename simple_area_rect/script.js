let length = prompt("Enter the Length of the box:");
let breadth = prompt("Enter the Breadth of the box:");

if (isNaN(length) || isNaN(breadth) || length<=0 || breadth<=0) {
    alert("Please enter a valid positive number for length and breadth.")
}
else {
let area_rectangle = length * breadth;

document.getElementById("length").innerHTML= length;
document.getElementById("breadth").innerHTML= breadth;
document.getElementById("area").innerHTML= area_rectangle;
}

// console.log("The area of the rectangular box is: "+ area_rectangle);