// Contenido del archivo ejercicio48.js
// 48. Escriba un algoritmo que permita calcular el área, debe preguntar que figura
// geométrica desea calcular "Triángulo y Círculo: (Escriba T o C):
// a. Triangulo = base * altura / 2
// b. Circulo = PI * radio* radio

let opcion = prompt("introduzca si desea calcular el area de un triangulo(T) o de un circulo(C):")
opcion = opcion.toLowerCase();
if (opcion === "t"){
    let base = prompt("introduzca la base del triangulo: ");
    let altura = prompt("introduzca la altura del triangulo: ");
    alert("el area del triangulo es: " + (base * altura / 2).toFixed(2))
}
else{
    let radio = prompt("introduzca el radio del circulo: ");
    alert("el area del triangulo es: " +(3.14 * radio* radio).toFixed(2))
}