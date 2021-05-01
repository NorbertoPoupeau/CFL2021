let readlineSync = require("readline-sync");
let numeroInicial = readlineSync.questionInt("ingrese numero inicial: ");
let numeroFinal = readlineSync.questionInt("ingrese numero final: ");
let contador;
let acumulado = 0;
for(contador=numeroInicial;contador<=numeroFinal;contador++){
    acumulado+=contador;
   }    
   console.log("el numero inicial es: ", numeroInicial);
   console.log("el numero final es:", numeroFinal);
   console.log("la suma es:", acumulado);
   
    
    
