let reporte="lorem ipsum scammer simply laboris sit amet";

//1
reporte = reporte.replace(/\a/g, "x");
console.log("Ejercicio 1: " + reporte);

//2
reporte = reporte.replace(/\e/g, "E");
reporte = reporte.replace(/\i/g, "I");
reporte = reporte.replace(/\o/g, "O");
reporte = reporte.replace(/\u/g, "U");

console.log("Ejercicio 2: " + reporte);


/*
for(let i = 0; i< reporte.length; i++)
{
    if(reporte.indexOf(i) == 'e' || reporte.indexOf(i) == 'i' || reporte.indexOf(i) == 'o' || reporte.indexOf(i) == 'u')
    {
        reporte.indexOf(i).toUpperCase();        
    }
}

for(let i = 0; i< reporte.length; i++)
{
    if(reporte[i] == 'e' || reporte[i] == 'i' || reporte[i] == 'o' || reporte[i] == 'u')
    {
        reporte[i].toUpperCase();        
    }
}
*/

//3
reporte = reporte.charAt(0).toUpperCase() + reporte.substring(1);
console.log("Ejercicio 3: " + reporte);


//4
reporte = reporte.replace(/.$/, '@');
console.log("Ejercicio 4: " + reporte);

//reporte = reporte.replace(reporte.charAt(reporte.length-1), '@');
//reporte = reporte.replace(reporte.length/g, "@");


//5
var cont = 0
cont = reporte.match(/[aeiou]/gi). length;
console.log(cont);
