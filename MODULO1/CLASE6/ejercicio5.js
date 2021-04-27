let readlineSync = require("readline-sync");
let factor = readlineSync.questionInt("ingrese factor de multiplicacion: ");
let cantidadProductos = readlineSync.questionInt("ingrese cantidad de productos a calcular: ");
let factor2=0;
let producto;
while(factor2+1<=cantidadProductos){
   factor2=(factor2+1)
   producto=(factor*factor2)
   console.log(factor,"*",factor2,"=",producto)
}
