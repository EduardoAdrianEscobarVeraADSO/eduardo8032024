// • Escribe una función que tome una cadena y devuelva una nueva cadena sin las vocales.

function sinvocales(palabra) {
  // Usa una expresión regular para encontrar todas las vocales y reemplazarlas con una cadena vacía
  return palabra.replace(/[aeiouáéíóú]/gi, "");
}

let palabra = prompt("Introduzca una palabra: ");
let resultado = sinvocales(palabra);
alert("La palabra sin vocales es: " + resultado);