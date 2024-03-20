// Contenido del archivo ejercicio71.js
// 71. Escribir un programa que pida al usuario un número entero y muestre por pantalla si es un
// número primo o no.

let n = parseInt(prompt("Ingrese un número entero:"));
let esPrimo = true;

if (n <= 1) {
    esPrimo = false;
} else {
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            esPrimo = false;
            break;
        }
    }
}

if (esPrimo) {
    alert(n + " es un número primo.");
} else {
    alert(n + " no es un número primo.");
}

