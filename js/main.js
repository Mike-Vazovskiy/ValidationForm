let nameError = document.getElementById("nameError");
let phoneError = document.getElementById("phoneError");
let emailError = document.getElementById("emailError");
let messageError = document.getElementById("messageError");
let submitError = document.getElementById("submitError");

function validateName() {
    let name = document.getElementById("contactName").value;

    if(name.length == 0) {
        nameError.innerHTML = "Name is required!"
        return false;
    }
    if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
        nameError.innerHTML = "Write full name!"
        return false;
    }
    nameError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validatePhone() {
    let phone = document.getElementById("contactPhone").value;

    if(phone.length == 0) {
        phoneError.innerHTML = "Phone is required!";
        return false;
    }
    if(phone.length !== 11){
        phoneError.innerHTML = "Phone should be 11 digits";
        return false;
    }
    if(!phone.match(/^[0-9]{11}$/)){
        phoneError.innerHTML = "Only digits please.";
        return false;
    }
    phoneError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateEmail() {
    let email = document.getElementById("contactEmail").value;

    if(email.length == 0) {
        emailError.innerHTML = "Email is required!";
        return false;
    }
    if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
        emailError.innerHTML = "Invalid Email";
        return false;
    }
    emailError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
    return true;
}

function validateText() { 
    let message = document.getElementById("contactText").value;
    let required = 30;
    let left = required - message.length;

    if(left > 0) {
        messageError.innerHTML = left + " more  characters required";
        return false;
    }
    messageError.innerHTML = '<i class="fa-solid fa-circle-check"></i>';
}

function validateForm() {
    if(!validateName() || !validatePhone() || !validateEmail() || !validateText()) {
        submitError.style.display = "block";
        submitError.innerHTML = 'Please fix errors to submit!';
        setTimeout(function(){submitError.style.display = 'none';}, 3000)
        return false;
    }
}