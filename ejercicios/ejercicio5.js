// Contenido del archivo ejercicio5.js
//5. Para tributar un determinado impuesto se debe ser mayor de 16 años y tener unos ingresos iguales o superiores a 1000 mensuales, escribir un programa que pregunte al usuario su edad e ingresos mensuales y muestre por pantalla si el usuario debe tributar o no.

let edad = prompt("ingrese su edad: ")
let sueldo = prompt("ingrese su sueldo : ")

edad = parseInt(edad);
sueldo  = parseInt(sueldo);

if (edad >= 16 && sueldo >= 1000) {
  alert("usted debe tributar")
}
else {
  alert("usted no debe tributar")
}