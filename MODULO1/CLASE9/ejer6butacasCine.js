let readlineSync = require("readline-sync");
let cantidadButacas = readlineSync.questionInt("ingrese cantidad de butacas: ");
let v = new Array(cantidadButacas);
cargarButacas(v);
console.log(v);
console.log("la cantidad de butacas vacias es: ", contarButacasVacias(v));
​
function cargarButacas(v) {
  for (let i = 0; i < v.length; i++) {
    v[i] = Math.round(Math.random());
  }
}
​
function contarButacasVacias(v) {
  let butacasVacias = 0;
  for (let i = 0; i < v.length; i++) {
    if (v[i] == false) {
      butacasVacias++;
    }
  }
  return butacasVacias;
}