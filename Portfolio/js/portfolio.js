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

let navi = document.querySelector(".navbar");
let lastScrollY = window.scrollY;

window.addEventListener("scroll", function(){
    if (lastScrollY < window.scrollY){
        navi.classList.add("nav-hide")
    } else {
        navi.classList.remove("nav-hide")
    }

    lastScrollY = window.scrollY
});
// disappearing navbar

