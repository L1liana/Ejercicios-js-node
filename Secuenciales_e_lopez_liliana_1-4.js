let p = require('readline-sync');
let b= Number(p.question('Ingresa la base del triángulo: '));
let h= Number(p.question('Ingresa la altura altura del triángulo: '));
let area = (b*h)/2;
console.log('El área del triángulo es :' +area);
1.5.	Cálcular de la longitud de una circunferencia de radio r
let p = require('readline-sync');
let pi = Math.PI;
let r= Number(p.question('Ingresa el radio: '));
let longitud  = 2*r*pi;
console.log('La longitud de la circunferencia del radio es:' +longitud);
