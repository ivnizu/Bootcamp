const log = console.log;


let texto = "index.exe"

log(ObtenerExtension(texto));

function ObtenerExtension(miTexto)
{
    return miTexto.split('.').pop();
}