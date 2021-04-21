let readlineSync = require("readline-sync");
let articulo = readlineSync.questionInt("anote precio articulo ");
let cantidad = readlineSync.questionInt("anote cantidad articulo ");
let totalCompra = (articulo*cantidad);
let descuento = (totalCompra*0.15);
let tiketFinal = (totalCompra*0.85)
let mesCompra = readlineSync.question("anote mes de su compra");
if (mesCompra==("Octubre")){
    console.log("Su Compra Total $", totalCompra)
    console.log("15% Descuento $", descuento)
    console.log("Su Pago Final $", tiketFinal)
}
    else {console.log("al mes ingresado no le corresponde descuento")
}