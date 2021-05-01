let readlineSinc=require("readline-sync");
let numDie=readlineSinc.questionInt("ingrese cantidad de dados: ");
let probability;//aca acumulo la cantidad necesaria de tiradas para obtener todos "6"
let faceDie=6// inicialice esta variable, pero mas que variable es una constante, los dados SIEMRE tiene 6 caras
while(numDie>0){
    probability=(faceDie**numDie)//la constante 6 elevada a la "N"cantidad de dados, me da las probabilidades
    console.log("La probabilidad de sacar todos 6 con ", numDie,"dados, es de una de cada ",probability,"tiradas");
    numDie=readlineSinc.questionInt("ingrese cantidad de dados: ");
}