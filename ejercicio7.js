// Contenido del archivo ejercicio7.js
//7. los tramos impositivos para la declaración de la renta en un determinado país son:
// a. entre 10000 y 20000 ---- 5%
// b. entre 20000 y 35000 ---- 10%
// c. entre 35000 y 60000 ---- 20%
// d. más de 60000 ---- 45%
// escribir un programa que pregunte al usuario su renta anual y muestre por pantalla
// el tipo de impositivo que le corresponde.

let rentaanual = prompt("Introduzca su renta anual: ");
rentaanual = parseInt(rentaanual);

if (rentaanual >= 10000 && rentaanual <= 20000) {
  alert("A usted le corresponde el 5%");
} else if (rentaanual > 20000 && rentaanual <= 35000) {
  alert("A usted le corresponde el 10%");
} else if (rentaanual > 35000 && rentaanual <= 60000) {
  alert("A usted le corresponde el 20%");
} else {
  alert("A usted le corresponde el 45%");
}