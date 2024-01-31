let surname = document.getElementById('surname');
let othernames = document.getElementById('othernames');
let dob = document.getElementById('date');
let genders = document.getElementsByName('gender');
let stateoforigin = document.getElementById('stateoforigin');
let maritalstatuses = document.getElementsByName('MaritalStatus');
let job = document.getElementById('occupation');
let email = document.getElementById('email');
let number = document.getElementById('phonenumber');
let textarea = document.getElementById('textarea');
let confirmbutton = document.getElementById('btn_reg');
let message = document.getElementById('msg');



confirmbutton.addEventListener('click', function(e) {
    e.preventDefault();

    if(surname.value=="" || othernames.value=="" || dob.value=="" || genders.value=="" || stateoforigin.value=="" || maritalstatuses.value=="" || job.value=="" || email.value=="" || number.value=="" || textarea.value=="" ){
        message.innerHTML="Dear customer, please kindly fill in all fields!"
    }
    else{
        alert("Form Sent Successfully!")
    }
});
