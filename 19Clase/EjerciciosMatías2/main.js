const btnUno = document.getElementById("btnUno");
const btnDos = document.getElementById("btnDos");
const btnTres = document.getElementById("btnTres");

const showUno = document.getElementById("showUno");
const showDos = document.getElementById("showDos");
const showTres = document.getElementById("showTres");

btnUno.addEventListener('click',() =>{
    showUno.style.display = "block"
    showDos.style.display = "none"
    showTres.style.display = "none"
});

btnDos.addEventListener('click',() =>{
    showUno.style.display = "none"
    showDos.style.display = "block"
    showTres.style.display = "none"
});

btnTres.addEventListener('click',() =>{
    showUno.style.display = "none"
    showDos.style.display = "none"
    showTres.style.display = "block"
});
