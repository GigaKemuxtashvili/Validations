const name = document.querySelector("#name");
const lastName = document.querySelector("#lastName");
const position = document.querySelector('#position')
const region = document.querySelector('#region')
const email = document.querySelector('#email')
const password = document.querySelector("#password");
const passwordRepeat = document.querySelector('#passwordRepeat')
const form = document.querySelector("form");
const errorElement = document.querySelector("#error");
const workPlace = document.querySelector('#workPlace')

nameError = document.querySelector('#nameError')
regionError = document.querySelector('#regionError')
positionError = document.querySelector('#positionError')
emailError = document.querySelector('#emailError')
lastNameError = document.querySelector('#lastNameError')
passwordError = document.querySelector('#passwordError')
passwordRepeatError = document.querySelector('#passwordRepeatError')

document.getElementById('close').addEventListener("click", function() {
    document.getElementById('modal').style.display = 'none'

  }); 
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

form.addEventListener("submit", (e) => {
    e.preventDefault()
    var modalInfo = []
    if (name.value === `` || name.value == null) {
        nameError.innerText = `Name is required`;
    }else{
        nameError.innerText = ``;
    };
    if (lastName.value === `` || lastName.value == null) {
        lastNameError.innerText = `Name is required`;
    }else{
        lastNameError.innerText = ``;
    };
    if(email.value === '' || !validateEmail(email.value) ){
        emailError.innerText = 'validate email'
    }else{
        emailError.innerText = ``;
    };
    if(position.value === '' || position.value === '0' || position.value === undefined){
        positionError.innerText = 'select option'
    }else{
        positionError.innerText = ``;
    };
    if(region.value === '' || region.value === '0' || region.value === undefined ){
        regionError.innerText = 'select option'
    }else{
        regionError.innerText = ``;
    };
    
    if(password.value.length <=6) {
        passwordError.innerText = `Password must be longer than 6 character`
    }else if(password.value.length >= 20){
        passwordError.innerText = `Password must be less than 20 character`
    }else{
        passwordError.innerText = ''
    }

    if(passwordRepeat.value != password.value || passwordRepeat.value == '') {
        passwordRepeatError.innerText = `confirm password`
    }else{
        passwordRepeatError.innerText = ``
    }
    if (passwordRepeat.value == password.value && password.value.length >=6 
        && password.value.length >= 20 && region.value != '' && position.value != '' && email.value != '' || validateEmail(email.value)
        && name.value != `` && lastName.value != ``) {
            let modalName = document.getElementById('modal-name')
            let modalLastName = document.getElementById('modal-lastName')
            let modalRegion = document.getElementById('modal-region')
            let modalPosition = document.getElementById('modal-position')
            let modalEmail = document.getElementById('modal-email')

            modalName.innerHTML = name.value
            modalLastName.innerHTML = lastName.value
            modalRegion.innerHTML = region.value
            modalPosition.innerHTML = position.value
            modalEmail.innerHTML = email.value
            
            document.getElementById('modal').style.display = 'block'
            modalInfo.push(password.value, region.value, position.value, email.value, name.value, lastName.value, workPlace.value)
            console.log(modalInfo, 'info')
    };
});

