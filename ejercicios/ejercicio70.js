// Contenido del archivo ejercicio70.js
// 70. Escribir un programa que almacene la cadena de caracteres contraseña en una variable,
// pregunte al usuario por la contraseña hasta que introduzca la contraseña correcta.
const contraseña = "1234rafa";
let contraseña_usu = prompt("introduzca la contraseña: ")
if (contraseña_usu != contraseña) {
  while (true) {
    let contraseña_usu = prompt("Contraseña incorrecta introduzca la contraseña: ")
    if (contraseña_usu === contraseña) {
      alert("contraseña correcta")
      break
    }
  }
}