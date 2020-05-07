let p = require('readline-sync');
let pi = Math.PI;
let r= Number(p.question('Ingresa el radio: '));
let longitud  = 2*r*pi;
console.log('La longitud de la circunferencia del radio es:' +longitud);
