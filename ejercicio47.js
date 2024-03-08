// Contenido del archivo ejercicio47.js
// 47. Desarrollar un diagrama que lea 3 valores diferentes e indique cual es el mayor de
// ellos, el menor o si son iguales

let num1 = prompt("Ingrese el primer número:");
let num2 = prompt("Ingrese el segundo número:");
let num3 = prompt("Ingrese el tercer número:");

num1 = parseFloat(num1);
num2 = parseFloat(num2);
num3 = parseFloat(num3);

let mayor;
let menor;

if (num1 >= num2 && num1 >= num3) {
    mayor = num1;
} else if (num2 >= num1 && num2 >= num3) {
    mayor = num2;
} else {
    mayor = num3;
}
if (num1 <= num2 && num1 <= num3) {
    menor = num1;
} else if (num2 <= num1 && num2 <= num3) {
    menor = num2;
} else {
    menor = num3;
}

if (num1 === num2 && num1 === num3 && num2 === num3) {
    alert("Los tres números son iguales");
}
else if (num1 === num2) {
    alert("El primer y segundo número son iguales");
}
else if (num2 === num3) {
    alert("El segundo y tercer número son iguales");
}
else if (num1 === num3) {
    alert("El primer y tercer número son iguales");
}

alert("El mayor de los tres números es: " + mayor + " y el menor: " + menor);
