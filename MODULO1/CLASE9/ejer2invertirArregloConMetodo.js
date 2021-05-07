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
function mostrarVectorInvertido(v,cantidad){
    let i;
    for(i=cantidad-1;i=0;i--){
        console.log(v[i]);
    }
}
function invertirVector(v,cantidad){
    let iIzq=0;
    let iDer=cantidad-1;
    let aux;
    while(iIzq<iDer){
        aux=(v[iIzq]);
        v[iIzq]=v[iDer];
        v[iDer]=aux;
        iIzq++;
        iDer--;
    }
}
let readlineSinc=require("readline-sync");
let cantidad=readlineSinc.questionInt("ingrese tamaño del arreglo: ");
let v=new Array(cantidad);
console.log("ingrese numeros al arreglo: ");
    cargarVector(v,cantidad);
console.log("mostrando arreglo invertido: ");
    mostrarVectorInvertido(v,cantidad);
console.log("invierto los valores en el arreglo: ");
    invertirVector(v,cantidad);
console.log("mostrando arreglo original: ");
    mostrarVector(v,cantidad);
