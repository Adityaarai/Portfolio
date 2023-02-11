var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("activelink");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("activetab");
    }
    event.currentTarget.classList.add("activelink");
    document.getElementById(tabname).classList.add("activetab");
}
//disappearing about section

var smenu = document.getElementById("menu");

function openmenu(){
    smenu.style.right = "0";
}
function closemenu(){
    smenu.style.right = "-300px";
}
const scriptURL = 'https://script.google.com/macros/s/AKfycbyP2KXY8BcBQrj4A78sMfM_-nKA1km-gTUuowzB6ztTurAUVmlYGeBwecF4-TC1ozmS/exec'
const form = document.forms['Contact-Me']

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert('Success! Your message has been submitted.', response))
    .catch(error => console.error('Error!', error.message))
})
