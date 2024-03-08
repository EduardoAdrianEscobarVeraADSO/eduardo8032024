// Contenido del archivo ejercicio33.js
// 33. Calcular la edad de una madre en el momento que dio a luz a alguno de sus hijos.


let madre = prompt("Ingresa el año de nacimiento de la madre:");
let hijo = prompt("Ingresa el año de nacimiento del hijo:");

madre = parseInt(madre);
hijo = parseInt(hijo);


let edad = hijo - madre;

alert("La madre tenía " + edad + " años en el momento del nacimiento de su hijo.");