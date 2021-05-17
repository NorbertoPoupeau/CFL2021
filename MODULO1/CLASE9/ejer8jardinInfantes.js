let readlineSync=require("readline-sync");
let cantidadAlumnos=readlineSync.questionInt("ingrese cantidad de alumnos: ");
function asignarAula(cantidadAlumnos){
    if(cantidadAlumnos<=30){
        console.log("le corresponde salita AMARILLA");
    }
    if(cantidadAlumnos>30&&cantidadAlumnos<=35){
        console.log("le corresponde salita VERDE");
    }
    if(cantidadAlumnos>35&&cantidadAlumnos<=40){
        console.log("le corresponde salita AZUL");
    }
}
while (cantidadAlumnos<=0||cantidadAlumnos>40) {
    console.log("cantidad invalida");
    cantidadAlumnos=readlineSync.questionInt("ingrese cantidad de alumnos: ");
}
if(cantidadAlumnos>0&&cantidadAlumnos<=40){
    asignarAula(cantidadAlumnos);
}

