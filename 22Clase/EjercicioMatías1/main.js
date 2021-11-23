
const btnHamburguer = document.getElementById("icon");
const btnIcon = document.getElementById("btnIcon");
const nav = document.getElementById("myTopnav");


btnHamburguer.addEventListener('click',() =>{
    if (nav.className === "navHeader") {
        nav.className += " responsive";
        btnIcon.className = 'fas fa-times';
    } else {
        nav.className = "navHeader";
        btnIcon.className = 'fa fa-bars';
    }
});

