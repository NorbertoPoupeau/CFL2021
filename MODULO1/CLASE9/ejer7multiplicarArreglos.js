let readlineSync=require("readline-sync");
let n=2;
let v1=new Array(n);
let v2=new Array(n);
let vProducto1=new Array(n);
let v3=new Array(n);
let v4=new Array(n);
let vProducto2=new Array(n);
let vProducto1PorvProducto2=new Array(n);
function cargarArreglos(v1,n){
    let i;
    for (i=0;i<=n;i++){
        v1[i]=readlineSync.questionInt("indique un valor para la posicion "+i+" del arreglo: ");
    }
}
function multiplicarArreglos(v1,v2,vProducto1,n){
    for(i=0;i<=n;i++)
    vProducto1[i]=v1[i]*v2[i];
    console.log(vProducto1);
}    
cargarArreglos(v1,n);
cargarArreglos(v2,n);
cargarArreglos(v3,n);
cargarArreglos(v4,n);
multiplicarArreglos(v1,v2,vProducto1,n);
multiplicarArreglos(v3,v4,vProducto2,n);
console.log("el arreglo resultante tiene los siguientes valores: ");
multiplicarArreglos(vProducto1,vProducto2,vProducto1PorvProducto2,n);
