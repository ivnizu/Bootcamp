const log = console.log;

let gradosFa = prompt("Grados Farenheit: ", '');
let gradosCe = prompt("Grados Celcius: ", '');

let auxFa = (gradosCe * 1.8) +32;
let auxCel = (gradosFa - 32)/1.8;

log("Farenheit a Celcius: " + auxCel);
log("Celcius a Farenheit: " + auxFa);