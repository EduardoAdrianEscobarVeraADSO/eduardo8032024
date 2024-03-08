// Contenido del archivo ejercicio32.js
// 32. Pablo compro 5 productos los dos primeros con un 5% de descuento y los 2 últimos
// con un 2% de descuento, realice un algoritmo que indique cuanto fue el valor a
// pagar por cada producto y el total de la compra.

let p1 = prompt("introduzca el valor del producto 1: ");
let p2 = prompt("introduzca el valor del producto 2: ");
let p3 = prompt("introduzca el valor del producto 3: ");
let p4 = prompt("introduzca el valor del producto 4: ");
let p5 = prompt("introduzca el valor del producto 5: ");

p1 = parseInt(p1);
p2 = parseInt(p2);
p3 = parseInt(p3);
p4 = parseInt(p4);
p5 = parseInt(p5);

d1 = p1- (p1 * 0.05);
d2 = p2- (p2 * 0.05);
d3 = p4- (p4*0.03)
d4 = p5- (p5*0.03)

alert("el valor a pagar por el primer producto es de: " + d1 + " del segundo " + d2 + " del tercero " + p3+ " del cuarto " + d3 + " y del quinto " + d4 );
alert("el total de todo es: " + (d1+d2+p3+d3+d4))