const log = console.log;

let str = "origin"

str = str.replace(/\a/g, "1");
str = str.replace(/\e/g, "1");
str = str.replace(/\i/g, "1");
str = str.replace(/\o/g, "1");
str = str.replace(/\u/g, "1");

log("Ejercicio 1: " + str);

