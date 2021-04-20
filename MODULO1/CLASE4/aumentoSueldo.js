let readlineSync=require("readline-sync");
let sueldo=readlineSync.questionInt("indique su sueldo ");
if (sueldo<=15000){
    console.log("su aumento es del 20%",sueldo*1.2);
}    else {
        if (sueldo>=15001&&sueldo<=20000){
        console.log("su aumento es del 10%",sueldo*1.1);        
}           else {
                if(sueldo>=20001&&sueldo<=25000){
                    console.log("su aumento es del 5%",sueldo*1.05);
                }   else{
                    console.log("su sueldo no persibe aumento")
                }
}
}