// Contenido del archivo ejercicio25.js
// 25. Una farmacia aplica el precio de los remedios el 10% de descuento, hacer un
// programa que ingresando el costo de los medicamentos calcule el descuento y el
// precio final.

let costo = prompt("introduzca el costo de los medicamentos: ");
costo = parseInt(costo);
let descuento = costo * 0.10;
let total = costo-descuento;
alert("el precio total es: " + total + " y ahorro: " + descuento)
