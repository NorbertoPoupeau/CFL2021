let readlineSync = require("readline-sync");
let numero = readlineSync.questionInt ("ingrese un numero: ");
while (numero==0){
    console.log ("numero invalido, ingrese valor mayor")
    numero = readlineSync.questionInt ("ingrese un numero: ")
}
if (numero%2==0){
    console.log ("el numero", numero, "es par")
    } else {
        console.log ("el numero", numero, "es impar")
    }
            

