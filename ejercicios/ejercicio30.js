// Contenido del archivo ejercicio30.js
// 30. Comprobar la fortaleza de una contraseña teniendo en cuenta que debe tener
// entre 8 y 12 caracteres, y al menos una mayúscula, una minúscula, y un dígito.

let contraseña = prompt("ingrese su contraseña: ")
const regex = /[A-Z]/;
const regex2 = /[a-z]/;
const regex3 = /\d/;
if(contraseña.length >= 8 && contraseña.length <= 12 && regex.test(contraseña) && regex2.test(contraseña) && regex3.test(contraseña)){
    alert("su contraseña cumple con todas las condiciones")
}
else{
    alert("su contraseña no cumple con las condiciones")
}
