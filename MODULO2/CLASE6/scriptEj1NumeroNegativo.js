"use strict"
let primerNumero;
let segundoNumero;
function mostrarNegativoPositivo(primerNumero,segundoNumero){
    primerNumero = document.getElementById("primerNumero").value;
    segundoNumero = document.getElementById("segundoNumero").value;
    if(primerNumero<0&&segundoNumero>0){
        alert("Se cumple la condicion NUMERO NEGATIVO en CAMPO 1 y NUMERO POSITIVO en campo 2");
      } else if(primerNumero>0&&segundoNumero<0){
        alert("Se cumple la condicion NUMERO POSITIVO en CAMPO 1 y NUMERO NEGATIVO en campo 2");
    } else{
        alert("no se cumple ninguna de las condiciones enumeradas");
    }
}
    
function resultado(){
    mostrarNegativoPositivo(primerNumero,segundoNumero);
}
console.log(mostrarNegativoPositivo(primerNumero,segundoNumero))