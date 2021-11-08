const log = console.log;

let miArray = "Alorem ipsum scammer simply laboris sit amet"

const aux = AgregarTres(miArray);

log(aux)
function AgregarTres(miArray)
{
    if(miArray.lengh < 6)
    {
        return "mide menos de seis";
    }
    else
    {
        let aux1 = miArray.slice(0,3);
        let aux2 = miArray.slice((miArray.length - 3), (miArray.length));
        return aux1.concat(aux2);
    }
}