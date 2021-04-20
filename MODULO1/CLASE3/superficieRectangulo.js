let readlineSync = require("readline-sync");
let base = readlineSync.questionInt("ingrese medida de base");
let altura = readlineSync.questionInt("ingrese medida de altura");
let area = base * altura
console.log("la superficie es", area);