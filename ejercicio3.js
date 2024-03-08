// Contenido del archivo ejercicio3.js
//3. Escribir un programa que pida al usuario dos números y muestre por pantalla su división, si el divisor es cero el programa debe mostrar un error, se debe manejar mediante excepciones y el mensaje debe ser personalizado.

let dividendo = prompt("Introduzca el primer número: ");
let divisor = prompt("Introduzca el segundo número: ");

dividendo = parseFloat(dividendo);
divisor = parseFloat(divisor);

try {
  if (divisor === 0) {
    throw new Error("El divisor no puede ser 0");
  }
} catch (error) {
  alert("Error: " + error.message);
}

let resultado = dividendo / divisor;
alert(resultado);
