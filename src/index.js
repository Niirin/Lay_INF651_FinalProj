function getValue() {
    let user = document.getElementById("name");
    let email = document.getElementById("email");
    let isEmail;
    if (email != ""){
        isEmail=validateEmail(email);
    }
    let userName = user.value;
    let userEmail ;
    if (isEmail){
        userEmail= email.value;
    }
    else {
        alert("Please enter a valid email!")
    }

}

function validateEmail(input) {
    let validRegEx =  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (input.value.match(validRegEx)) {
        return true;
    }
    else {
       return false;
    }
}