// Contenido del archivo ejercicio60.js
// 60. Hacer un programa que permita ingresar n cantidad de cursos, si la cantidad de cursos que
// lleva el alumno es menor que 6 el pago será $2.000.000 por cada curso, pero si la cantidad
// de cursos es mayor que 6 el pago será únicamente de $1.200.000.


let cantidadCursos = prompt("Ingrese la cantidad de cursos que lleva el alumno:");

if (cantidadCursos <= 6) {
    let pagoTotal = cantidadCursos * 2000000;
    alert("El pago total será de $" + pagoTotal);
} else {
    let pagoTotal = cantidadCursos * 1200000;
    alert("El pago total será de $" + pagoTotal);
}
