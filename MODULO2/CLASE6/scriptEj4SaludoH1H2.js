"use strict"
let checkbox = document.querySelector("#checkB");//engancho el checkbox a una variable
let btn = document.querySelector("#boton");//engancho el boton a una variable
btn.addEventListener("click", saludar);//engancho el evento click a la funcion que va a resolver
let saludoH1 = document.createElement("h1");
let saludoH2 = document.createElement("h2");


function saludar(){
    if(checkbox.checked){
        saludoH1.innerHTML("Hola H1")
        console.log(saludoH1)
    } else {
        saludoH2.innerHTML("Hola H2");
    }
}      
