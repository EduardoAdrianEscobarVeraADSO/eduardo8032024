// Contenido del archivo ejercicio29.js
// 29. Un estudiante realiza cuatro exámenes. Realizar un algoritmo correspondiente para
// obtener el promedio de las calificaciones obtenidas. Las calificaciones van 1 a 5
// puntos.}

let n1 = prompt("introduzca la nota del examen 1: ");
let n2 = prompt("introduzca la nota del examen 2: ");
let n3 = prompt("introduzca la nota del examen 3: ");
let n4 = prompt("introduzca la nota del examen 4: ");
n1 = parseFloat(n1);
n2 = parseFloat(n2);
n3 = parseFloat(n3);
n4 = parseFloat(n4);
let promedio = (n1 + n2 + n3 + n4) / 4;
if (n1 < 1 || n1 > 5 || n2 < 1 || n2 > 5 || n3 < 1 || n3 > 5 || n4 < 1 || n4 > 5) {
    alert("hubo una calificacion no valida");
} else {
    alert("el promedio es: " + promedio);
}