// Contenido del archivo ejercicio34.js
// 34. Generar el algoritmo que dé como resultado el tiempo estimado para el llenado de
// un depósito.
// a. Q = V/t, siendo Q (caudal), V (volumen) y t (tiempo).
// b. Volumen = PI *(radio^2)* H (altura del depósito).
// El tiempo se encuentra en minutos. Normalmente se mide el volumen en litros y el
// tiempo en segundos.


let r = parseFloat(prompt("Ingrese el radio del depósito en metros: "));
let h = parseFloat(prompt("Ingrese la altura del depósito en metros: "));
let q = parseFloat(prompt("Ingrese el caudal de llenado en litros por segundo: "));

let v = 3.1416 * r * r * h * 1000;
let tsegundos = v / q;


alert("El tiempo estimado para el llenado del depósito es de aproximadamente " + tsegundos + " segundos.");
