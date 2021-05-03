let readlineSinc=require("readline-sync");
let base=readlineSinc.questionInt("indique la base de la potencia: ");
let exponent=readlineSinc.questionInt("indique el exponente de la potencia: ");
function power(base,exponent){
    let result=1
    for(let i=0;i<exponent;i++){
    result*=base
}
    return result;
}
console.log("La potencia de base y exponente dados es: ",power(base,exponent));
