let readlineSinc=require("readline-sync");
let n=readlineSinc.questionInt("indique un tamaño para el arreglo: ");
let array=new Array(n);
let numeroCero=0;
let numeroNegativo=0;
let numeroPositivo=0;
for(let i=0;i<n;i++){
    array[i]=readlineSinc.questionInt("indique un valor numerico para la posicion " +i+": ")
     if(array[i]==0){
        numeroCero++
    }
    if(array[i]>0){
        numeroPositivo++
    }
    if(array[i]<0){
        numeroNegativo++
    }    
}  
console.log("el arreglo contiene",numeroCero,"ceros, ",numeroPositivo,"numeros positivos y ",numeroNegativo,"negativos");
