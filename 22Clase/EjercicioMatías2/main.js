const btnUno = document.getElementById("btnUno");
const btnDos = document.getElementById("btnDos");
const btnTres = document.getElementById("btnTres");

const showUno = document.getElementById("showUno");
const showDos = document.getElementById("showDos");
const showTres = document.getElementById("showTres");

btnUno.addEventListener('click',() =>{
    showUno.className = 'show';
    showDos.className = 'notShow';
    showTres.className = 'notShow';
});


btnDos.addEventListener('click',() =>{
    showUno.className = 'notShow';
    showDos.className = 'show';
    showTres.className = 'notShow';
});

btnTres.addEventListener('click',() =>{
    showUno.className = 'notShow';
    showDos.className = 'notShow';
    showTres.className = 'show';
});



