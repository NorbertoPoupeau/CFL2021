let readlineSync = require("readline-sync");
let alturaPersona = readlineSync.questionFloat("ingrese su altura");
let suAltura = alturaPersona;
if (alturaPersona>=1.30){"usted puede acceder al juego";
    console.log("usted puede acceder al juego");
} else {console.log("usted no puede acceder al juego,altura insuficiente")};
