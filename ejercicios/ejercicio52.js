// Contenido del archivo ejercicio52.js
// 52. En cierta empresa se les paga a sus trabajadores de la siguiente forma: si el empleado es
// de planta, la hora trabajada se le paga a $20000, si el empleado es administrativo, la hora
// trabajada se le paga a $10000. Para calcular su pago es necesario conocer el total de
// horas trabajadas.

let puesto = prompt("introduzca su puesto, de planta(p) o administrativo(a)");
puesto = puesto.toLowerCase();
let horas = prompt("introduzca las horas trabajadas: ");
if (puesto === "p") {
  let total = horas * 20000;
  alert("en total se le pagara: " + total);
}
else {
  let total = horas * 10000;
  alert("en total se le pagara " + total)
}