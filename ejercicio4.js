// Contenido del archivo ejercicio4.js
//4. Escribir un programa que pida al usuario un numero entero y muestre por pantalla si es par o impar.

let numero = prompt("introduzca un numero: ");
numero = parseInt(numero);

if (numero % 2 === 0) {
  alert("el numero es par")
}
else {
  alert("el numero es inpar")
}
