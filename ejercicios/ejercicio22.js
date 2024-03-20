// Contenido del archivo ejercicio22.js
// 22. Escribir un programa que muestre el pago de una llamada telefónica sabiendo que
// cada minuto cuesta $355 pesos y un IVA 20%.

let tiempo = prompt("introduzca la duracion en minutos: ");
tiempo = parseInt(tiempo)
let total = (tiempo * 355) * 0.20
let totald = (total+tiempo*355)
alert("el total a pagar es: " + totald)