$(document).ready(function() {

    $('.button').click(function()
   {
        let firstname = document.getElementById("fname").value;
        let lastname = document.getElementById("lname").value;
        let email = document.getElementById("email").value
        let number = document.getElementById("number").value;
        let inputpass = document.getElementById("inputPassword").value;
        let repeatpass = document.getElementById("repeatPassword").value;
        let message = document.getElementById("message").value;
        
        if(firstname == "" || lastname == ""|| email == "" ||number == "" ||message == "" || inputpass == "" ||repeatpass =="" )
        {
            alert("Data be filled out");
        }
        else
        {
          
            window.open("courses.html");
        }
    });







 





    






})


