let readlineSync = require("readline-sync");
let primerNumero = readlineSync.questionInt("ingrese el primer numero");
let segundoNumero = readlineSync.questionInt("ingrese el segundo numero");
let resultado = primerNumero + segundoNumero;
console.log("El resultado de la suma es", resultado);
