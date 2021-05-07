function cargarVector(v,cantidad){
    let i;
    for(i=0;i<cantidad;i++){
        v[i]=readlineSinc.questionInt("ingrese valor de la posicion "+i+": ");
    }
}
function mostrarVector(v,cantidad){
    let i;
    for(i=0;i<cantidad;i++){
        console.log(v[i]);
    }
}
function contarPositivos(v,cantidad){
    let contador=0;
    let i;
    for(i=0;i<cantidad;i++){
        if(v[i]>0){
            contador++
        }
    }
    return contador;
}
function contarNegativos(v,cantidad){
    let contador=0;
    let i;
    for(i=0;i<cantidad;i++){
        if(v[i]<0){
            contador++
        }
    }
    return contador;
}
function contarCero(v,cantidad){
    let contador=0;
    let i;
    for(i=0;i<cantidad;i++){
        if(v[i]==0){
            contador++
        }
    }
    return contador;
}
let readlineSinc=require("readline-sync");
let cantidad=readlineSinc.questionInt("ingrese tamaño del arreglo: ");
let v=new Array(cantidad);
console.log("ingrese numeros al arreglo: ");
    cargarVector(v,cantidad);
let numPos=contarPositivos(v,cantidad);
let numNeg=contarNegativos(v,cantidad);
let numCero=contarCero(v,cantidad);
console.log("los valores del arreglo son: ");
    mostrarVector(v,cantidad);
console.log(numPos,"positivos");
console.log(numNeg,"negativos");
console.log(numCero,"ceros");


