$(document).ready(function() {

    $('.button').click(function()
    {
         let address = document.getElementById("inputEmail").value;
         let password = document.getElementById("inputPassword").value;
       
         
         if(address == "" || password == "" )
         {
             alert("Data be filled out");
         }
         else
         {
             window.open("courses.html");
         }
     });





    






})


