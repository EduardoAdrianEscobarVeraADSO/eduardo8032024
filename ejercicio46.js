// Contenido del archivo ejercicio46.js
// 46. Calcule el mayor de tres números, permitiendo leer 3 valores diferentes.

let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");
let num3 = prompt("Ingrese el tercer número:");


num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

let mayor;

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
} else {
    mayor = num3;
}

alert("El mayor de los tres números es: " + mayor);