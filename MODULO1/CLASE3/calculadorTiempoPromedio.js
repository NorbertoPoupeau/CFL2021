let readlineSync = require ("readline-sync");
let vuelta1 = readlineSync.questionInt ("ingrese tiempo vuelta 1");
let vuelta2 = readlineSync.questionInt ("ingrese tiempo vuelta 2");
let vuelta3 = readlineSync.questionInt ("ingrese tiempo vuelta 3");
let vuelta4 = readlineSync.questionInt ("ingrese tiempo vuelta 4");
console.log ("Tiempo Total",(vuelta1+vuelta2+vuelta3+vuelta4));
console.log ("Tiempo Promedio",(vuelta1+vuelta2+vuelta3+vuelta4)/4);