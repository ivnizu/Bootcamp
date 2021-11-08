const log = console.log;

let num1 =  prompt();
let num2 =  prompt();

num1 = parseInt(num1, 10);
num2 = parseInt(num2, 10);


log(Resultado(num1, num2))

function Resultado(numA, numB)
{
    if(numA == 100 || numB == 100 || (numA+numB) == 100)
    {
        return true;
    }
    return false;
}