function validate() {
    var user, pass, email, user1, pass1,pass2;
    user = document.getElementById("user").value;
    pass = document.getElementById("pass").value;

    if(user === "" || pass === "") {
        alert("All fields are required")
        return false;
    } 
    else if (user != "" && pass != "") {
        alert ("Welcome!!!")
    }
}

function validate1() {
    var  email, user1, pass1,pass2;
    user1 = document.getElementById("user1").value;
    pass1 = document.getElementById("pass1").value;
    pass2 = document.getElementById("pass2").value;
    email = document.getElementById("email").value;

    if(user1 === "" || pass1 === "" || pass2 === ""  || email === "") {
        alert("All fields are required")
        return false;
    }
    else if (user1 != "" && pass1 != "" && email != "") {
        alert ("Welcome!!!")
    }
}