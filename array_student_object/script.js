//Create an array of objects representing students with name and marks. Write a function to calculate the average marks of all students.
let arr = [{name: "palak", marks: 200},{name: "shalini", marks: 130},{name: "lalit", marks: 150}];

function average_marks(arr) {
        // console.log(arr);
        let marks_sum = arr.map((arr) => arr.marks).reduce((acc,curr) => acc + curr);
        let marks_avg = marks_sum / arr.length;
        console.log("Average marks of all students are: " + marks_avg);
}

average_marks(arr);