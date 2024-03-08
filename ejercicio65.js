// Contenido del archivo ejercicio65.js
// 65. Escribir un programa que pida al usuario un número entero positivo y muestre por pantalla
// la cuenta atrás desde ese número hasta cero separados por comas.
// let numero = parseInt(prompt("Ingrese un número entero positivo:"));
// let cuentaAtras = "";


if (numero > 0) {
    for (let i = numero; i >= 0; i--) {
        if (i !== numero) {
            cuentaAtras += ", ";
        }
        cuentaAtras += i;
    }
    alert("Cuenta atrás desde " + numero + " hasta 0:\n" + cuentaAtras);
} else {
    alert("Por favor, ingrese un número entero positivo válido.");
}