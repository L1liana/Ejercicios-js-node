///Nombre :Liliana Rocio López Jiménez
/// Grado y grupo: 4°E
///Secuenciales
///Ejercicio 1.1
let p = require('readline-sync');
let h= Number(p.question('Ingresa la altura del trapecio: '));
let l1 = Number(p.question('Ingresa el lado paralelo 1 del trapecio: '));
let l2 = Number(p.question('Ingresa el lado paralelo 2 del trapecio: '));
let area= (l1+l2)/2*h
console.log('El area del trapecio es: '+area);


