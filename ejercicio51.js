// Contenido del archivo ejercicio51.js
// 51. Calcular todos los pagos hechos de un restaurante y que si el consumo ingresado excede
// los $130.000 el descuento será del 15%, de lo contrario no hay descuento.

let pagos = prompt("introduzca el total de los pagos hechos: ");
if (pagos >= 130000) {
  let total = pagos - (pagos * 0.15);
  alert("el total con el 15% de descuento es: " + total)
}
else {
  alert("el total es " +  pagos)
}