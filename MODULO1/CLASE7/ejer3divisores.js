let readlineSinc=require("readline-sync");
let num1=readlineSinc.questionInt("indique numero a factorear: "); 
console.log(cantidadDeDivisores(num1))
function cantidadDeDivisores(num1){//retorna 1 por cada vez que esMultiplo=true
    let cantDivisores=0
    for (let i=1;i<=num1;i++){
        if(esMultiplo(num1,i)){
         cantDivisores++
    }
    }
    return cantDivisores
    function esMultiplo(num1,i){
        return (num1%i==0)
}
}  
