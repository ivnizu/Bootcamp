const log = console.log;


let reporte="lorem ipsum scammer simply laboris sit amet";

log(PrimerLetra(reporte));

function PrimerLetra(miArray)
{
    var matches = miArray.match(/\b(\w)/g); 
    var acronym = matches.join('' + ' ');
    return acronym;
}


