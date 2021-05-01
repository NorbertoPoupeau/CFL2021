let readlineSync = require ("readline-sync");
let clave = readlineSync.question("indique clave: ");
let contador;
for (contador=1;contador<4;contador++) {
    if ((clave!="eureka") && (contador<4)){
        
        console.log ("clave incorrecta,vuelva a ingresar al sistema")
        clave = readlineSync.question("indique clave: ")
    } else {
        console.log ("clave correcta, accede al sitema")
    }
}
    
