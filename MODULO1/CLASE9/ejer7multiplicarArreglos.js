let readlineSync=require("readline-sync");
let v1=new Array(3);
let v2=new Array(3);
let vProducto1=new Array(3);
let v3=new Array(3);
let v4=new Array(3);
let vProducto2=new Array(3);
let vProducto1PorvProducto2=new Array(3);
function multiplicarArreglos(v1,v2,vProducto1){
    let i;
    for (i=0;i<3;i++){
        v1[i]=readlineSync.questionInt("indique un numero para la posicion "+i+" del arreglo "+v1[3]+" :");
    }
    for (i=0;i<3;i++){   
        v2[i]=readlineSync.questionInt("indique un numero para la posicion "+i+" del arreglo "+v2[3]+" :");
    }
        vProducto1[i]=v1[i]*v2[i];
    return vProducto1[3];
    }
function multiplicarArreglosProducto(vProducto1,vProducto2,vProducto1PorvProducto2) {
    let i;
    for(i=0;i<3;i++){
        vProducto1PorvProducto2[i]=vProducto1[i]*vProducto2[i];
    }
    return vProducto1PorvProducto2;
}
multiplicarArreglos(v1,v2,vProducto1,3);
multiplicarArreglos(v3,v4,vProducto2,3);
console.log("el arreglo resultante tiene los siguientes valores: ");
multiplicarArreglosProducto(vProducto1,vProducto2,vProducto1PorvProducto2);
