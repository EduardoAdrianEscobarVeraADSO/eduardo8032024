// Contenido del archivo ejercicio74.js
// 74. Escribir un programa que muestre el eco de todo lo que el usuario introduzca hasta que el
// usuario escriba “salir” que terminará.

let entrada = "";

while (entrada !== "salir") {
    entrada = prompt("Escriba algo ('salir' para terminar):");
    if (entrada !== "salir") {
        alert("Eco: " + entrada);
    }
};