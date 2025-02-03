//Create an input field where the user can type text. As the user types, show the length of the entered text in real-time (use input event).


document.addEventListener("DOMContentLoaded",function (){
        const input = document.querySelector("#username");
        const log = document.querySelector(".length");


        input.addEventListener("input", function (e) {
                log.textContent = `Length of the inputted value is ${e.target.value.length}`;
        });

});
