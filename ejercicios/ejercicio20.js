// Contenido del archivo ejercicio20.js
// 20. Escriba un algoritmo que permita obtener las raíces reales de la ecuación de
// segundo grado: a * x2 + b + x + c, siendo X un valor constante.

const x = prompt("introduzca el valor de x para obtener las raices reales de segundo grado:");
let a = prompt("introduzca el valor de a: ");
let b = prompt("introduzca el valor de b: ");
let c = prompt("introduzca el valor de c: ");
a = parseFloat(a);
b = parseFloat(b);
c = parseFloat(c);
let total = a * x * x + b + x + c;
alert("el valor total es " + total)