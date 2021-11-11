const log = console.log;
/*
let arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"];

const miArray = new Set(arr);

log(miArray);
*/


let arr = [2, 4, 7, 1, 2, "foo", 7, "bar", "qux", 3, "foo"];

let mostrar = arr.filter((item,index)=>{
  return arr.indexOf(item) === index;
})

log(mostrar);


