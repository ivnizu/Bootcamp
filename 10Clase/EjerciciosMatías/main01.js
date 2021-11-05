const log = console.log;

var fechaNacimiento = '';
var fechaActual='5/11/2021';

diaNac = prompt('Día de nacimiento',' ');
mesNac = prompt('Mes de nacimiento',' ');
anioNac = prompt('Año de nacimiento',' ');

fechaNacimiento = diaNac + '/' + mesNac + '/' + anioNac;

log(restaFechas(fechaNacimiento,fechaActual));

// Función para calcular los días transcurridos entre dos fechas
function restaFechas (fNac,fAct)
 {
 var aFecha1 = fNac.split('/');
 var aFecha2 = fAct.split('/');
 var fFecha1 = Date.UTC(aFecha1[2],aFecha1[1]-1,aFecha1[0]);
 var fFecha2 = Date.UTC(aFecha2[2],aFecha2[1]-1,aFecha2[0]);
 var dif = fFecha2 - fFecha1;
 var dias = Math.floor(dif / (1000 * 60 * 60 * 24));
 return dias;
 }



/*
fechaNacimiento = new Date('');
fechaActual = new Date();
diferencia = new Date();

fechaActual = fechaActual.getDate() + '-' + ( fechaActual.getMonth() + 1 ) + '-' + fechaActual.getFullYear();

diaNac = prompt('Día de nacimiento',' ');
mesNac = prompt('Mes de nacimiento',' ');
anioNac = prompt('Año de nacimiento',' ');

fechaNacimiento = diaNac + '-' + mesNac + '-' + anioNac;
//fechaNacimiento =  anioNac + '-' + mesNac + '-' + diaNac;

console.log(fechaActual);
console.log(fechaNacimiento);

diferencia = fechaActual.getTime()-fechaNacimiento.getTime();

res = Math.round(diferencia/(1000*60*60*24));

console.log(res);
*/


/*
diaNac = prompt('Día de nacimiento',' ');
mesNac = prompt('Mes de nacimiento',' ');
anioNac = prompt('Año de nacimiento',' ');

fechaNacimiento = diaNac+mesNac+anioNac;
console.log(fechaNacimiento);

fechaActual;

diaActual = fechaActual.getDate();
mesActual = '11';
anioActual = '2021';

fechaActual = diaActual+mesActual+anioActual;

console.log(fechaActual);

*/

/*
var hoy = new Date();

var fecha = hoy.getDate() + '-' + ( hoy.getMonth() + 1 ) + '-' + hoy.getFullYear();

console.log(fecha);

*/

