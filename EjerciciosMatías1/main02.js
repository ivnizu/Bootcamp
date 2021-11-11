const log = console.log;

let num = 4;

if(num > 0 && num < 6)
    mostrarNumeros(num);
else
    log("Ingresar un número del 1 al 5")

function mostrarNumeros(num)
{
    for(num ; num < 11 ; num++)
        log(num)
}