let readlineSinc=require("readline-sync");
let n=readlineSinc.questionInt("indique tamaño del arreglo: ");
let array=new Array(n);
let i;
for(i=0;i<n;i++){
    array[i]=readlineSinc.questionInt("indique un valor para la posicion "+i+": ")
}
for(i=n-1;i>=0;i--){
    console.log(array[i])
}