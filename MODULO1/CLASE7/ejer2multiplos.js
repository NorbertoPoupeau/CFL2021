let readlineSinc=require("readline-sync");
let num1=readlineSinc.questionInt("indique primer numero: ");
let num2=readlineSinc.questionInt("indique segundo numero: ");
function esMultiplo(num1,num2){
    return (num1%num2==0)
}
console.log(esMultiplo(num1,num2));