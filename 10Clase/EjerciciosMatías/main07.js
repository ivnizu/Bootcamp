const log = console.log;

let miArray = "asdf";

let aux = Validar(miArray);

log(aux)

function Validar(miArray)
{
    return miArray.includes(" ");
}
