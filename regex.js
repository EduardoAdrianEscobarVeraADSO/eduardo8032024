// let palabra = "epe_12345";
// let regex = /^[a-zA-Z]{3}_[0-9]{5}$/
// console.log(regex.test(palabra))

// let correo = "eduardoadrianescobar12@pipii.com";
// let regex2 = /^[\w\.]+@[a-z]{5,7}\.[a-z]{3}$/;
// console.log(regex2.test(correo))

let contraseña = "aaaaaA9aqasw#";
let regex3 = /^(?=.*[A-Z]{1})(?=.*[a-z]{5,})(?=.*[0-9]{1})(?=.*[!@#$%^&*()_+]{1})[A-Za-z0-9!@#$%^&*()_+]{12,16}$/;
console.log(regex3.test(contraseña))

//solo imprimir numeros pares, o impares

