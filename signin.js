var responseDiv = document.body.querySelector(".response");


document.querySelector(".submit").addEventListener("click", function (){
    var validUser = document.body.querySelector(".input").value;
    var validPass = document.body.querySelector(".password").value;

    if(validUser == "cool" && validPass == "password"){
        responseDiv.innerHTML = "Logging in!";
        location.href = 'view.html';
    }else{
        responseDiv.innerHTML = "You didn't type in a valid username or password.";
    }
})