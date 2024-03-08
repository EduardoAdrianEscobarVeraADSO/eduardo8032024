// Contenido del archivo ejercicio44.js
// 44. Realice el siguiente algoritmo para convertir pesos a dolores y a euros, utilizando
// como constante el valor de una moneda.

const valorDolar = 0.00028;
const valorEuro = 0.00024;

let pesos = prompt("Ingrese la cantidad de pesos colombianos: ");

let dolares = pesos * valorDolar;
let euros = pesos * valorEuro;

alert(`${pesos} pesos colombianos son aproximadamente ${dolares.toFixed(2)} dólares y ${euros.toFixed(2)} euros.`);
