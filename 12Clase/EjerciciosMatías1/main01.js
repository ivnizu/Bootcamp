const log = console.log;

let num = 5235848;

num = num.toString();

log(calcularSumaDigitos(num));

function calcularSumaDigitos(numero)
{
    let res = 0;

    for(i = 0; i < numero.length; i++)
    {
        res += parseInt(numero[i]);
    }
    return res;
}


/*
x.split('').forEach(x => y += parseInt(x));

const substract = str =>{
    let pos = str.indexOf("+")
    let num1 = parseInt(str.slice(0,pos))
    let num2 = parseInt(str.slice(pos + 1,str.length))
    return num1 + num2
}
*/