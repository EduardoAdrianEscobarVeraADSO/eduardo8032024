// Contenido del archivo ejercicio1.js
//1. Escribir un programa que pregunte al usuario su edad y muestre por pantalla si es mayor o menor de edad, el programa debe validar que solo se puedan ingresar números positivos.

edad = prompt("introduzca su edad: ");
if (edad >= 18) {
  alert("usted es mayor de edad")
}
else if (edad < 0) {
  alert("introduzca un numero positivo")
}
else {
  alert("usted es menor de edad")
}
