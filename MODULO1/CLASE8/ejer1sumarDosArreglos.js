let readlineSinc=require("readline-sync");
let array1 = new Array(6);
let array2 = new Array(6);
let arrayResult = new Array(6);
let i
for (i=0;i<6;i++){
    array1[i]=readlineSinc.questionInt("indique un numero para la posicion ",i ,":");
}
for (i=0;i<6;i++){
    array2[i]=readlineSinc.questionInt("indique un numero para la posicion ",i ,":");
}
for (i=0;i<6;i++){
    console.log("la suma de las posiciones ",i ,"es:",arrayResult[i]=(array1[i]+array2[i]))
   
}
