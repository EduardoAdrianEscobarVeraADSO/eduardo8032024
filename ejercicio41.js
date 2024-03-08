// Contenido del archivo ejercicio41.js
// 41. Ingrese una frase que lo identifique como programador de Software y luego
// mostrar esta frase invertida.

let frase = "hola world";
let fraserevertida = "";
for (let i = frase.length - 1; i >= 0; i--) {
    fraserevertida += frase[i];
}
alert(fraserevertida);