//Create a button on a webpage that, when clicked, changes the background color of the page. (Use JavaScript to attach the event listener to the button.)

let button = document.getElementById("add_btn");

button.addEventListener("click", function (){
        let li = document.createElement("li");
        let element = document.getElementById("unordered_list");
        let itemCount = element.children.length;
        let text = document.createTextNode("item " +  (itemCount + 1));
        li.appendChild(text);
        element.appendChild(li);
});