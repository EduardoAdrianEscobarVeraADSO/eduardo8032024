// Contenido del archivo ejercicio2.js
//2. escribir un programa que almacene la cadena de caracteres contraseña de una variable, pregunte al usuario por la contraseña e imprima por pantalla si la contraseña introducida por el usuario coincide con la guardada en la variable sin tener en cuenta mayúsculas y minúsculas, se debe validar que solo se pueda ingresar valores alfanuméricos.

let contrasena = "referé";
let contrasenaingre = prompt("introduzca su contraseña: ");
contrasenaingre = contrasenaingre.toLowerCase();

function alfanumerico(contrasena) {
  return /^[a-zA-Z0-9áéíóúÁÉÍÓÚÑñ]+$/.test(contrasena);
}
if (alfanumerico(contrasenaingre) && contrasenaingre===contrasena) {
  alert("la contraseña es alfanumerica y es correcta")
}
else {
  alert("la contraseña es incorrecta")
}
