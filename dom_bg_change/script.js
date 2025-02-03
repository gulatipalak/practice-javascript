//Create a button on a webpage that, when clicked, changes the background color of the page. (Use JavaScript to attach the event listener to the button.)

let button = document.getElementById("btn_change_bg");

button.addEventListener("click", function (){
        if (document.body.style.backgroundColor == "black") {
                document.body.style.backgroundColor="white";
                document.body.style.color="black"; 
        }
        else {
                document.body.style.backgroundColor="black";
                document.body.style.color="white";
        }
          
});