let readlineSync=require("readline-sync");
let textoOrigen=readlineSync.question("ingrese texto a analizar: ");//texto ingresado por usuario
let cantidadCadaLetra=new Array(26);//arreglo que contiene la cantidad de cada letra en el texto
let porcentajeCadaLetra=new Array(26);//contiene el porcentaje de cada letra contra el total del texto
let n=textoOrigen.length//defino a la variable "n" como el tamaño del string
function contarLetras(n,textoOrigen,cantidadCadaLetra){//recorro el texto y cargo el arreglo con cada letra
    let i;
    let textoTodoMinuscula=textoOrigen.toLowerCase().trim();//paso el texto completo a un solo tipo de letra
    for(i=0;i<n;i++){
            if(textoTodoMinuscula[i]=="a"){
                cantidadCadaLetra[i]++;//si el contenido de textoTodoMinuscula en "i"es igual a "a"
            }                          //que sume 1 en la posicion "i" del arreglo cantidadCadaLetra
        }
}
function calcularPorcentaje(n,porcentajeCadaLetra,cantidadCadaLetra){
    let i;
    for(i=0;i<n;i++){
        porcentajeCadaLetra[i]=cantidadCadaLetra[i]/n*100
    }
}
contarLetras(textoOrigen,cantidadCadaLetra);
console.log("la cantidad de cada letra es: ",cantidadCadaLetra);
calcularPorcentaje(textoOrigen,porcentajeCadaLetra,cantidadCadaLetra);
console.log("el porcentaje de ocurrencia es de: ",porcentajeCadaLetra,"%");

