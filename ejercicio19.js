// Contenido del archivo ejercicio19.js
// 19. Escribir un programa que calcule el área y el volumen de un cilindro.


let radio = prompt("introduzca el radio del cilindro: ");
let altura = prompt("introduzca la altura del cilindro: ");
radio = parseFloat(radio)
altura = parseFloat(altura)
let volumen_t= 3.14*radio*radio*altura;
let area_t = 2*3.14*radio*altura+2*3.14*radio*radio;
alert("el area del cilindro es: " + area_t + " y el volumen es: " + volumen_t);