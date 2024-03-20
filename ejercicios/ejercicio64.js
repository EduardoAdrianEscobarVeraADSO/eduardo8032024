// Contenido del archivo ejercicio64.js
// 64. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// todos los números impares desde 1 hasta ese número separados por coma.

let n = parseInt(prompt("Ingrese un número entero positivo:"));
let impares = "";

if (n > 0) {
    for (let i = 1; i <= n; i += 2) {
        impares += i + ", ";
    }
    impares = impares.slice(0, -2);
    alert("Números impares desde 1 hasta " + n + ": " + impares);
} else {
    alert("Por favor, ingrese un número entero positivo válido.");
}