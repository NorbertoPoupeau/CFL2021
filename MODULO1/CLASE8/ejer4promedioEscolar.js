let readlineSinc=require("readline-sync");
let nombreAlumno,nota1,nota2,nota3,notaPromedio;
let n=readlineSinc.questionInt("Ingrese cantidad de alumnos: ");
nombreAlumno=new Array(n);
nota1=new Array(n);
nota2=new Array(n);
nota3=new Array(n);
notaPromedio=new Array(n);
for(i=0;i<n;i++){
    nombreAlumno[i]=readlineSinc.question("Ingrese nombre del alumno: ");
    nota1[i]=readlineSinc.questionInt("Ingrese primer nota: ");
    nota2[i]=readlineSinc.questionInt("Ingrese segunda nota: ");
    nota3[i]=readlineSinc.questionInt("Ingrese tercer nota: ");
}
for(i=0;i<n;i++){
    notaPromedio[i]=((nota1[i]+nota2[i]+nota3[i])/3);
    console.log("el promedio del alumno",nombreAlumno[i],"es",notaPromedio[i]);
}