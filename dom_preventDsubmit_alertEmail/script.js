//Create a form with an email input field. When the form is submitted, prevent the default form submission and show an alert with the entered email.

const form = document.getElementById("form");

form.addEventListener("submit",(e) => {
        e.preventDefault();
        alert(document.querySelector("#useremail").value);
});
