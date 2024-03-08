// Contenido del archivo ejercicio55.js
// 55. En una tienda de HELADO da un descuento por compra a sus clientes con membresía
// dependiendo de su tipo, sólo existen tres tipos de membresía, tipo A, tipo B y tipo C. Los
// descuentos son los siguientes: Tipo A 10% de descuento Tipo B 15% de descuento Tipo C
// 20% de descuento.

let tipo = prompt("Tipo de membresía (A, B o C): ");
let precio = parseFloat(prompt("Precio total de la compra: "));

let descuento = 0;

if (tipo.toUpperCase() === 'A') {
  descuento = 0.1;
} else if (tipo.toUpperCase() === 'B') {
  descuento = 0.15;
} else if (tipo.toUpperCase() === 'C') {
  descuento = 0.2;
} else {
  alert("Tipo de membresía no válido.");
}

let totalDescuento = precio * descuento;
let totalConDescuento = precio - totalDescuento;

alert("El total con descuento es: " + totalConDescuento.toFixed(2));
