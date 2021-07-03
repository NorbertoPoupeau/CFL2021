"use strict";
function ActualizarSaludo() {
    let nodoInput = document.getElementById("txtNombre");
    let nombre = nodoInput.value;
    let nodoSaludo = document.getElementById("txtSaludo")
    nodoSaludo.innerHTML = "Hola," + nombre;
    console.log(nombre);
};    