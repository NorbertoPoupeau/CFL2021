let readlineSync = require ("readline-sync");
let primerNumero = readlineSync.questionInt ("ingrese primer numero  ");
let segundoNumero = readlineSync.questionInt ("ingrese segundo numero  ");
let tercerNumero = readlineSync.questionInt ("ingrese tercer numero  ");
if (primerNumero>segundoNumero&&primerNumero>tercerNumero){
    console.log(primerNumero,"es mayor que",segundoNumero,"y",tercerNumero);
} else {
  if (segundoNumero>primerNumero&&segundoNumero>tercerNumero) {
   console.log(segundoNumero,"es mayor que",primerNumero,"y",tercerNumero);
  } else {
    if (tercerNumero>primerNumero&&tercerNumero>segundoNumero) {
     console.log(tercerNumero,"es mayor que",primerNumero,"y",segundoNumero);
    } else {
     console.log("son todos iguales")
    }
  }
}