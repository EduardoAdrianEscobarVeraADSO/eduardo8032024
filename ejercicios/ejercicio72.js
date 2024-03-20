// Contenido del archivo ejercicio72.js

// 72. Escribir un programa que pida al usuario una palabra y luego muestre por pantalla una a
// una las letras de la palabra introducida empezando por la última.

let palabra = prompt("Ingrese una palabra:");
let longitud = palabra.length;
let palabraInvertida = "";


for (let i = longitud - 1; i >= 0; i--) {
    palabraInvertida += palabra[i] + " ";
}

alert("La palabra invertida es: " + palabraInvertida);