let readlineSync=require("readline-sync");
let textoOrigen=readlineSync.question("ingrese texto a analizar: ");//texto ingresado por usuario
let cantidadCadaLetra=new Array(26);//arreglo que contiene la cantidad de cada letra en el texto
let porcentajeCadaLetra=new Array(26);//contiene el porcentaje de cada letra contra el total del texto
function contarLetras(textoOrigen,cantidadCadaLetra){//recorro el texto y cargo el arreglo con cada letra
    let i;
    textoOrigen.toLowerCase();//paso el texto completo a un solo tipo de letra
    for(i=0;i<textoOrigen.length;i++){
            if(textoOrigen[i]==a){
                cantidadCadaLetra[i]++;
            }
        }
}
function calcularPorcentaje(textoOrigen,porcentajeCadaLetra,cantidadCadaLetra){
    let i;
    for(i=0;i<textoOrigen.length();i++){
        porcentajeCadaLetra[i]=cantidadCadaLetra[i]/textoOrigen.length()*100
    }
}
contarLetras(textoOrigen,cantidadCadaLetra);
console.log("la cantidad de cada letra es: ",cantidadCadaLetra);
calcularPorcentaje(textoOrigen,porcentajeCadaLetra,cantidadCadaLetra);
console.log("el porcentaje de ocurrencia es de: ",porcentajeCadaLetra,"%");

