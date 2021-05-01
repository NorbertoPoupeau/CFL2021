let readlineSync = require("readline-sync");
let precioProducto = readlineSync.questionInt("ingrese precio producto");
let descuentoProducto = readlineSync.questionInt("ingrese descuento");
console.log("precio final", precioProducto*(100-descuentoProducto)/100);
