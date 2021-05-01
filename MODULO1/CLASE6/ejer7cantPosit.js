let readlineSync = require("readline-sync");
let numIngresado = readlineSync.questionInt("ingrese un numero: ");
let contadorIngresado = 1;
let contadorPositivo = 1;
while (numIngresado !=0 ){
    contadorIngresado++
    if (numIngresado !=0 ){
        numIngresado = readlineSync.questionInt("ingrese un numero: ")
    }
    if (numIngresado>0){
        contadorPositivo++
    }    
    }
console.log(contadorPositivo,"positivos, ", contadorPositivo/contadorIngresado*100, "% del total")