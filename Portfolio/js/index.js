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

window.addEventListener('resize', function(){
    let width = window.innerWidth;

    if ( width > 1024) {
        let navi = document.querySelector(".navbar");
        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", function(){
        if (lastScrollY < window.scrollY){
            navi.classList.add("nav-hide");
        } else {
            navi.classList.remove("nav-hide");
        }
        lastScrollY = window.scrollY;
        });
    }
    else if (width < 1024){
        let navi = document.querySelector(".navbar");
        let lastScrollY = window.scrollY;

        window.addEventListener("scroll", function(){
        if (lastScrollY < window.scrollY){
            navi.classList.add("nav-hide");
        } else {
            navi.classList.remove("nav-hide");
        }
        lastScrollY = window.scrollY;
        });
    }
    width = window.innerWidth;
});
// disappearing navbar

