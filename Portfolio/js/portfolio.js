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
    smenu.style.right = "-400px";
}

if ( screen.width > 1024) {
    let navi = document.querySelector(".navbar");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function(){
    if (lastScrollY < window.scrollY){
        navi.classList.add("nav-hide")
        console.log(screen.width)
    } else {
        navi.classList.remove("nav-hide")
    }
    lastScrollY = window.scrollY
    });
}
else {
    let navi = document.querySelector(".navbar.not(#menu)");
    let lastScrollY = window.scrollY;

    window.addEventListener("scroll", function(){
    if (lastScrollY < window.scrollY){
        navi.classList.add("nav-hide")
    } else {
        navi.classList.remove("nav-hide")
    }
    lastScrollY = window.scrollY
    });
}
// disappearing navbar

