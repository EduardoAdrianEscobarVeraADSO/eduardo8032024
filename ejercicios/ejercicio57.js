// Contenido del archivo ejercicio57.js
// 57. Consideramos la asignación de una calificación literal a un rango dado de calificaciones
// numéricas de la siguiente manera: Rango de calificaciones: 9.1 a 10 Asignar la calificación
// de A equivale a Excelente 8.1 a 9 Asignar la calificación de A equivale a Muy bien 7.5 a 8
// Asignar la calificación de A equivale a Bien Menor a 7.5 asignar la calificación de NA No
// Aprobado.

let cal = parseFloat(prompt("Ingrese la calificación numérica:"));
let calLit;

if (cal >= 9.1 && cal <= 10) {
    calLit = "A (Excelente)";
} else if (cal >= 8.1 && cal < 9) {
    calLit = "A (Muy bien)";
} else if (cal >= 7.5 && cal < 8) {
    calLit = "A (Bien)";
} else {
    calLit = "NA (No Aprobado)";
}

alert("La calificación literal es: " + calLit);