// Contenido del archivo ejercicio63.js
// 63. Escribir un programa que pregunte al usuario su edad y muestre por pantalla todos los
// años que ha cumplido (desde 1 hasta su edad).
let edad = parseInt(prompt("Ingrese su edad:"));

let mensaje = "Años cumplidos:\n";
for (let i = 1; i <= edad; i++) {
    mensaje += i + "\n";
}

alert(mensaje);