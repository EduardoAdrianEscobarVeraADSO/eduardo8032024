// Contenido del archivo ejercicio53.js
// 53. Calcular el valor total del valor de 5 productos, el IVA y el subtotal, visualizar los resultados
// de: Iva, Subtotal y Total de la compra de los artículos.
let p = prompt("Ingrese el precio unitario de cada producto: ");
let c = prompt("Ingrese la cantidad de productos: ");
let t = 0.16;

let s = p * c;
let i = s * t;
let total = s + i;


alert("Subtotal: " + s);
alert("IVA: " + i);
alert("Total de la compra: " + total);
