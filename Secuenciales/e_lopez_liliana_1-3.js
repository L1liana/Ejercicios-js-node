///Nombre :Liliana Rocio López Jiménez
/// Grado y grupo: 4°E
///Secuenciales
///Ejercicio 1.3
let p = require('readline-sync');
let pi = Math.PI;
let r= Number(p.question('Ingresa el radio de la base del cono: '));
let h= Number(p.question('Ingresa la altura del cono: '));
let volumen = (1/3)*pi* Math.pow(r,2)*h;
console.log('El volumen del cono es :' +volumen);
