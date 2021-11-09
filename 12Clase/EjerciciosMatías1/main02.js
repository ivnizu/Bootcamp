const log = console.log;

let miArray= '102 + 17 + 2 + 20 + 40';

log(sumarElementos(miArray));

function sumarElementos(numArray)
{
    let aux = 0;
    let arrayAux = '';
    let flag = 0
    
    for(i = 0; i < numArray.length; i++)
    {
        if(numArray[i] != ' ' && numArray[i] !='+')
        {
            arrayAux += numArray[i];
            flag = 0;
        }
        else
        {
            flag = 1;
        }
        if(i == (numArray.length-1))
        {
            flag = 1;

        }

        if(flag == 1 && arrayAux != '')
        {
            aux += parseInt(arrayAux);
            arrayAux = '';
            flag = 0; 
        }
    }
    return aux;
}





/*

const log = console.log;

let miArray= '102 + 17 + 2 + 20 ';

log(sumarElementos(miArray));

function sumarElementos(numArray)
{
    let aux = 0;
    let arrayAux = '';
    let flag = 0
    
    for(i = 0; i < numArray.length; i++)
    {
        if(numArray[i] != ' ' && numArray[i] !='+')
        {
            arrayAux += numArray[i];
            log(arrayAux);
            flag = 1;
        }
        else if(flag == 1)
        {
            aux += parseInt(arrayAux);
            log(aux);
            arrayAux = '';
            flag = 0; 
        }
    }
    return aux;
}


*/