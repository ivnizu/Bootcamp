const log = console.log;

let numAleatorio = Math.floor(Math.random() * (10 - 1)) + 1;

log(numAleatorio);
let numPrompt = prompt("Ingrese un número del 1 al 9");
log(numPrompt);

log(comparar(numAleatorio,numPrompt));

function comparar(numA, numB)
{
    if(numA == numB)
    {
        return "Son iguales";
    }
    return "No son iguales"
}

