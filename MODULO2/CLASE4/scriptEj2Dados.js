"use strict";
function randomDados() {
    return Math.floor(Math.random() * (6 - 1 + 1) ) + 1;
}//carga un arreglo de 1000 posiciones con numeros aleatorios del 1 al 6
function cargarArregloDados(dado1, cantidad) {
    for (let i = 0; i < cantidad; i++) {
      dado1[i] = randomDados();
    }
}
function sumarVector(dado1,dado2,vSuma){
    let i;//suma dos arreglos y carga la suma en un tercero
    for (i=0;i<dado1.length;i++){
        vSuma[i]=dado1[i]+dado2[i];
    }
}
function contarNumeros(vSuma, valor){
    let i;//recorre compara y suma en un contador la cantidad de valor encontrados en el arreglo vSuma
    let cantidad=0;
    for (i=0;i<vSuma.length;i++){
        if (vSuma[i]==valor){
            cantidad=cantidad+1;
        }
    }
    return cantidad;
}
function contarSietes() {
    let cantidad=1000;
    let dado1=new Array(cantidad);
    let dado2=new Array(cantidad);
    let vSuma=new Array(cantidad);
    cargarArregloDados(dado1, cantidad);
    cargarArregloDados(dado2, cantidad);
    sumarVector(dado1,dado2,vSuma,cantidad)
    //contarNumero(vSuma,7);
    //console.log ("la cantidad de 7 obtenidos en 1000 tiradas son: ",contarSietes(vSuma, cantidad));
    document.querySelector('p').innerHTML="La cantidad de 7 obtenidos en 1000 tiradas son: "+contarNumeros(vSuma, 7);
}

