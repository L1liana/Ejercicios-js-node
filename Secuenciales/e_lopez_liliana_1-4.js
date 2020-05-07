let p = require('readline-sync');
let b= Number(p.question('Ingresa la base del triángulo: '));
let h= Number(p.question('Ingresa la altura altura del triángulo: '));
let area = (b*h)/2;
console.log('El área del triángulo es :' +area);
