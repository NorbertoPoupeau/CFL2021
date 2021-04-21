let readlineSync = require ("readline-sync");
let usuario = readlineSync.question ("ingrese nombre de usuario ");
let claveUsuario = readlineSync.question ("ingrese su clave ");
if (usuario == ("Juan") && claveUsuario == ("ClaveJuan")) {
 console.log ("acceso permitido")
}   
 else {
 console.log ("usuario o clave incorrecto,reintente")
}