const log = console.log;

let arr = [10, "20", 30, "40", 50];
let aux = [];

for(i = 0; i < arr.length; i++)
{
    if(typeof(arr[i]) != "number")
        arr[i] = parseInt(arr[i])
    aux += arr[i];
}

log(aux);