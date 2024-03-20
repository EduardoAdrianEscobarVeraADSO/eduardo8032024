// Contenido del archivo ejercicio54.js
// 54. Restarle al primer número al segundo (siempre y cuando el primero sea mayor que él
// segundo, en caso contrario indicar con un mensaje que la operación no es posible
// realizarla.
let num1 = prompt("introduzca el primer numero: ");
let num2 = prompt("introduzca el segundo numero: ");

num1 = parseFloat(num1);
num2 = parseFloat(num2);

if (num1 >= num2) {
  let total = num1 - num2;
  alert("el resultado de la esta es: " + total);
}
else {
  alert("la resta no es posible")
}