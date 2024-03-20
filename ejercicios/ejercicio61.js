// Contenido del archivo ejercicio61.js
// 61. Hacer un programa que permita ingresar n Notas de alumnos (100 – 1), y que imprima cual
// fue la nota alta, la nota baja y cuantos alumnos obtuvieron la máxima nota de 100, cuantos
// obtuvieron las siguientes calificaciones:
// a. «a» = menor que 100 y mayor igual que 90
// b. «b» = menor que 90 y mayor igual que 80
// c. «c» = menor que 80 y mayor igual que 70
// d. «d» = menor que 70 y mayor igual que 60

let n = parseInt(prompt("Ingrese el número de notas de los alumnos:"));
let notaMin = 100;
let notasMaximas = [];
let canta = 0;
let cantb = 0;
let cantc = 0;
let cantd = 0;

for (let i = 0; i < n; i++) {
    let nota = parseFloat(prompt("Ingrese la nota del alumno " + (i + 1) + ":"));

    if (nota < notaMin) {
        notaMin = nota;
    }

    if (nota > 100) {
        notasMaximas = [nota];
    } else if (nota === 100) {
        notasMaximas.push(nota);
    } else if (nota >= 90) {
        canta++;
    } else if (nota >= 80) {
        cantb++;
    } else if (nota >= 70) {
        cantc++;
    } else {
        cantd++;
    }
}

let cantMax = notasMaximas.length;

alert("La nota más baja es: " + notaMin +
      "\nCantidad de alumnos con la nota máxima de 100: " + cantMax +
      "\nCantidad de alumnos con calificación 'A': " + canta +
      "\nCantidad de alumnos con calificación 'B': " + cantb +
      "\nCantidad de alumnos con calificación 'C': " + cantc +
      "\nCantidad de alumnos con calificación 'D': " + cantd);