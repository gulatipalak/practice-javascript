//Create a function that declares a variable using var inside a block scope (like inside an if or for loop). What happens when you try to access that variable outside the block?
function testVarScope() {
        if (true) {
            var x = 10;  // Declared with var inside an if block
        }
        console.log(x);  // Accessing x outside the block
    }
    
testVarScope();
    

// for (let i = 0; i < 3; i++) {
//         setTimeout(function() {
//             console.log(i); // This prints the value of i after 1 second //0 1 2
//         }, 1000);
//     }

//     for (var j = 0; j < 3; j++) {
//         setTimeout(function() {
//             console.log(j); // This prints the value of i after 1 second //3 3 3
//         }, 1000);
//     }
    