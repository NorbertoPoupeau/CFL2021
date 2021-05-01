let readlineSinc=require ("readline-sync");
let nombreAlumno=readlineSinc.question("ingrese nombre alumno: ");
let notaPractica;
let notaProblema;
let notaTeoria;
while (nombreAlumno != ""){//mientras nombreAlumno contenga texto, ciclar
    notaPractica = readlineSinc.questionInt ("ingrese nota de Practicas: ");
    notaProblema = readlineSinc.questionInt ("ingrese nota Problemas:");
    notaTeoria = readlineSinc.questionInt ("ingrese nota Teoria: ");
    if (((notaPractica>=0)&&(notaPractica<=10))&&((notaProblema>=0)&&(notaProblema<=10))&&((notaTeoria>=0)&&(notaTeoria<=10))){
        console.log ("El alumno: ", nombreAlumno, "obtuvo una calificacion de: ", ((notaPractica*0.1) + (notaProblema*0.5) + (notaTeoria*0.4)), "puntos")
      //si todas las notas son mayores o = a cero y menor o = a 10 multiplico cada nota por el coeficiente y sumo
    } else {
        console.log ("las notas ingresadas son invalidas, reingrese notas")
    }
   
    nombreAlumno = readlineSinc.question ("ingrese nombre alumno: "); 
}  



