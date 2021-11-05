const log = console.log;

horas = prompt('Número de horas',' ');

log(CalcularSegundos(horas))

function CalcularSegundos()
{
    return horas*60*60;
}
