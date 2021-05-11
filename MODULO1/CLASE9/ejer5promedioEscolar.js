function cargaDeDatos(nombreAlumno,nota1,nota2,nota3){//ingreso por consola todos los datos requeridos 
    let i;
    for(i=0;i<n;i++){
        nombreAlumno[i]=readlineSync.question("Ingrese nombre del alumno: ");
        nota1[i]=readlineSync.questionInt("Ingrese primer nota: ");
        nota2[i]=readlineSync.questionInt("Ingrese segunda nota: ");
        nota3[i]=readlineSync.questionInt("Ingrese tercer nota: ");
        if (nota1[i] >= 0 && nota2[i] >= 0 && nota3[i] >= 0 && nota1[i] <= 10 && nota2[i] <= 10 && nota3[i] <= 10) {
            console.log("las notas son validas");//corrijo ingreso de notas fuera del rango 0-10
          } else {
            console.log("Alguna de las 3 notas es invalida, por favor vuelva a ingresarlas");
            nota1[i] = readlineSync.questionInt("Ingrese primer nota: ");
            nota2[i] = readlineSync.questionInt("Ingrese segunda nota: ");
            nota3[i] = readlineSync.questionInt("Ingrese tercer nota: ");
          }
    }
}
function promedioDeNotas(nota1,nota2,nota3,nombreAlumno){
    let i  
    for(i=0;i<n;i++){
        notaPromedio[i]=((nota1[i]+nota2[i]+nota3[i])/3);//con los arreglos cargados, calculo resultados para cada posicion
        console.log("el promedio del alumno",nombreAlumno[i],"es",notaPromedio[i]);//muestro resultados segun consigna
    }
}
let readlineSync=require("readline-sync");
let n=readlineSync.questionInt("Ingrese cantidad de alumnos: ");
nombreAlumno=new Array(n);
nota1=new Array(n);
nota2=new Array(n);
nota3=new Array(n);
notaPromedio=new Array(n);//inicializo arreglos
console.log("cargar datos de cada alumno: ");
cargaDeDatos(nombreAlumno,nota1,nota2,nota3);//invoco funcion de carga de datos
console.log("los promedios son: ");
promedioDeNotas(nota1,nota2,nota3,nombreAlumno);//muestro resultados

