let readlineSync = require("readline-sync");
let conIngresos = false;
let num = readlineSync.questionInt("ingrese un numero: ");
let maxNum = num;
while (num != 0){
    conIngresos = true;
    if (num > maxNum){
        maxNum = num;
    }
    num = readlineSync.questionInt("ingrese un numero: ")
}
if (conIngresos){
    console.log("el maximo es ", maxNum);
}