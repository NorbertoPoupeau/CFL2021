function cargarVector(v,cantidad){
    let i;
    for(i=0;i<cantidad;i++){
        v[i]=readlineSinc.questionInt("ingrese valor de la posicion",i,": ");
    }
}
function mostrarVector(v,cantidad){
    let i;
        for(i=0;i<cantidad;i++){
        console.log(v[i]);
    }
}
function sumarVector(v1,v2,vSuma,cantidad){
    let i;
    for (i=0;i<cantidad;i++){
        vSuma[i]=v1[i]+v2[i];
    }
}
let readlineSinc=require("readline-sync");
let v1=new Array(6);
let v2=new Array(6);
let vSuma=new Array(6);
console.log("cargar vector 1: ");
cargarVector(v1,6);
console.log("cargar vector 2: ");
cargarVector(v2,6);
sumarVector(v1,v2,vSuma,6);
console.log("mostrar valores de vector 1: ");
mostrarVector(v1,6);
console.log("mostrar  valores de vector 2: ");
mostrarVector(v2,6);
console.log("mostrar suma de los dos vectores: ");
mostrarVector(vSuma,6);