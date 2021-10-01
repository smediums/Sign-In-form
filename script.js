//Variables

const username = document.getElementById('name');
const pwd = document.getElementById('password')

//Validation Check

function validateInput(){

        //Username validation
    if (username.value.length < 4 || username.value.length == ""){
        notVaild(username);
    }else {
        valid(username);
    }

        //Password
    if (pwd.value.length < 7 || pwd.value.length === '' || pwd.value.length > 13){
        notVaild(pwd);
    }else{
        valid(pwd);

    }
}

document.querySelector("button") 
.addEventListener("click",(e) => {
    e.preventDefault();
    validateInput();
});

        //Validation functions
function valid(input){
    let parent = input.parentElement;
    let messageElm = parent.querySelector('small');
    messageElm.style.visibility = "hidden";
    parent.classList.add('success');
    parent.classList.remove('error');
}
function notVaild(input){
    let parent = input.parentElement;
    let messageElm = parent.querySelector('small');
    messageElm.style.visibility = "visible";
    parent.classList.add('error');
    parent.classList.remove('success');
}



