// Contenido del archivo ejercicio18.js
// 18. Escribir un programa que evalúe la siguiente expresión (a+7*c) / (b+2-a) + 2*b

let a = prompt("introduzca a: ")
let b = prompt("introduzca b: ")
let c = prompt("introduzca c: ")
a = parseInt(a);
b = parseInt(b);
let total = (a+7*c)/(b+2-a) + 2*b;
alert("el resultado es: " + total)