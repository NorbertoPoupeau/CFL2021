"use strict"
let boton = document.querySelector("#tareaIn");
boton.addEventListener("click", cargarTarea);//engancho el boton 1 y asocio el evento a la funcion

let btnClean = document.querySelector("#tareaClean");//engancho el boton 2 y asocio el evento a la funcion
btnClean.addEventListener("click", borrarTarea);

let inputTareas = document.querySelector("#agregarTarea").value;//creo variable con el valor del input de carga 

let variable = document.querySelector("#listaTareas").innerHTML = inputTareas;// creo variable que guarda en la lista el valor de el input



function cargarTarea(){
    
}
function borrarTarea(){

}

