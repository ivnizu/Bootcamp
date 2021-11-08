const log = console.log;

let cosaOlvidada = prompt();

log(MostrarMensaje())


function MostrarMensaje()
{
    if(cosaOlvidada == 'Ricardo')
    {
        return 'Ricardo es tu tio';
    }
    if(cosaOlvidada == 'Roberto')
    {
        return "Roberto es tu hermano";
    }
    if(cosaOlvidada == 'Argentina')
    {
        return "El pais al que perteneces";
    }
    if(cosaOlvidada == 'Dinamita')
    {
        return "Es tu gato";
    }
}

