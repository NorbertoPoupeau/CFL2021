let readlineSinc = require ("readline-sync");
let numIngreso = readlineSinc.questionInt("ingrese un numero entero: ");
let numMax = numIngreso
let numMin = numIngreso
let cantIngreso = 0
let sumatoria = 0
while (numIngreso!=0){
    cantIngreso++;//cantidad de veces que se ingresaron numeros(divisor del promedio)
    sumatoria += numIngreso;//suma total de los numeros ingresados(dividendo del promedio)
    if (numIngreso < numMin){
        numMin = numIngreso
    }
    if (numIngreso > numMax){
        numMax = numIngreso
    }
    numIngreso = readlineSinc.questionInt("ingrese un numero entero: ");//repetir ingreso de numeros hasta "cero"
}
console.log ("el numero mayor es: ", numMax);
console.log ("el numero menor es: ", numMin);
console.log ("la media es: ", sumatoria/cantIngreso);