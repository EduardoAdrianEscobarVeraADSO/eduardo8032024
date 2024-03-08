// Contenido del archivo ejercicio59.js
// 59. En un colegio, se necesita hacer una selección de basquetbol que represente al colegio,
// para lo cual es requisito indispensable que los postulantes sean menores o iguales a 19
// años, con una estatura de más de 175 cm y el peso tiene que estar entre los 80 kg y 75.

let edad = prompt("Ingrese la edad del postulante:");
let estatura = prompt("Ingrese la estatura del postulante:");
let peso = prompt("Ingrese el peso del postulante:");

if (edad <= 19 && estatura > 175 && peso >= 75 && peso <= 80) {
    alert("El postulante cumple con los requisitos y puede formar parte del equipo de baloncesto.");
} else {
    alert("El postulante no cumple con los requisitos para formar parte del equipo de baloncesto del colegio.");
}