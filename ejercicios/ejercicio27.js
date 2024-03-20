// Contenido del archivo ejercicio27.js
// 27. Elaborar un algoritmo para calcular el promedio final de la materia de algoritmos.
// dicha calificación se compone de los siguientes porcentajes:
// a. 55% del promedio final de sus calificaciones de los tres (3) parciales.
// b. 30% de la calificación examen final.
// c. 15% de la calificación trabajo final.
// Solicitar al usuario las calificaciones de los parciales, el examen final y el trabajo final
let parcial1 = prompt("Ingrese la calificación del primer parcial:");
let parcial2 = prompt("Ingrese la calificación del segundo parcial:");
let parcial3 = prompt("Ingrese la calificación del tercer parcial:");
let examenFinal = prompt("Ingrese la calificación del examen final:");
let trabajoFinal = prompt("Ingrese la calificación del trabajo final:");


parcial1 = parseFloat(parcial1);
parcial2 = parseFloat(parcial2);
parcial3 = parseFloat(parcial3);
examenFinal = parseFloat(examenFinal);
trabajoFinal = parseFloat(trabajoFinal);


let promedioParciales = (parcial1 + parcial2 + parcial3) / 3;
let promedioFinal = (promedioParciales * 0.55) + (examenFinal * 0.3) + (trabajoFinal * 0.15);
alert("El promedio final de la materia de algoritmos es: " + promedioFinal);