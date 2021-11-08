const log = console.log;

let hola = "hola";
let mundo = "mundo";

let aux = Concatenar(hola, mundo);

log(aux)

function Concatenar(miArray1, miArray2)
{
    return miArray1.concat(" ").concat(miArray2);
}
