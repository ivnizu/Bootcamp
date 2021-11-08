const log = console.log;

let num1 = prompt();
let num2 = prompt();

log(Validar(num1, num2))

function Validar(num1,num2)
{
    if((100 - num1) < (100 - num2))
    {
        return num1 + " está más cerca de 100 que " + num2;
    }
    return num2 + " está más cerca de 100 que " + num1;

}