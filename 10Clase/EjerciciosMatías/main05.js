const log = console.log;

let reporte = ["lorem", "ipsum", "lorem", "scammer", "simply", "laboris", "sit", "amet", "laboris"];

log(reporte)

log(InvertirSinInvertir(reporte))

log(reporte)

function InvertirSinInvertir(miArray)
{
    return miArray.slice().reverse();
}
