function cargarVector(v,cantidad){
    let i;
    for(i=0;i<cantidad;i++){
        v[i]=readlineSync.questionInt("ingrese valor de la posicion "+i+": ");
    }
}
function multiplicarVector(v1,v2,vProducto,cantidad){
    let i;
    for (i=0;i<cantidad;i++){
        vProducto[i]=v1[i]*v2[i];
    }
}
function sumaTotal(vProducto,cantidad){
    let i;
    let sumaDelArreglo=0
    for(i=0;i<cantidad;i++){
        sumaDelArreglo=sumaDelArreglo+vProducto[i];
    }
    return sumaDelArreglo;
}
let readlineSync=require("readline-sync");
let cantidad=readlineSync.questionInt("ingrese tamano del arreglo: ");
let v1=new Array(cantidad);
let v2=new Array(cantidad);
let vProducto=new Array(cantidad);
console.log("ingrese valores del arreglo 1: ");
    cargarVector(v1,cantidad);
console.log("ingrese valores del arreglo 2: ");
    cargarVector(v2,cantidad);
multiplicarVector(v1,v2,vProducto,cantidad);
console.log("el valor escalar del arreglo es: ",sumaTotal(vProducto,cantidad));


