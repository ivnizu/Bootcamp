//1
const titulo = document.getElementById('miTitulo');
const boton = document.getElementById('miBoton');

const mostrarTitulo = () =>
{
    if(titulo.style.display === "none")
    {
        titulo.style.display = "block";
    }
    else
    {
        titulo.style.display = "none";
    }
}
boton.addEventListener('click', mostrarTitulo)

//2
var newUl = document.createElement("ul");
var newLi = document.createElement("li");
var newInput = document.createElement("input");

newUl.appendChild(newLi); 
newLi.appendChild(newInput); 

document.body.insertBefore(newUl, boton);

//3
const today = new Date();
const year = today.getFullYear();

const añoActual = document.createTextNode(year);

document.body.insertBefore(añoActual, boton);


//4
var newDiv = document.createElement("div");
var btnUno = document.createElement("button");
var btnDos = document.createElement("button");
newDiv.appendChild(btnUno); 
newDiv.appendChild(btnDos); 

btnUno.setAttribute = "Boton UNO";

newDiv.style.width='500px';
newDiv.style.height='500px';
newDiv.style.backgroundColor = 'blue';
document.body.insertBefore(newDiv, boton);

const cambiarColor = () =>
{
    if(newDiv.style.backgroundColor == 'blue')
    {
        newDiv.style.backgroundColor = 'red';
    }
    else
    {
        newDiv.style.backgroundColor = 'blue';
    }
}
newDiv.addEventListener('click', cambiarColor);

btnUno.addEventListener(alert("Botón 1"));
btnDos.addEventListener(alert("Botón 2"));

//5

