///Nombre: Liliana Rocio López Jiménez
/// Grado y grupo: 4°E
///Ciclos
///Ejercicio 3.3
let p = require('readline-sync');
let ab=0;
let am=0;
let as=0;
let b = Number(p.question('Ingresa la cantidad de billetes: '));
for(i=1; i<=b; i++){
  let vb = Number(p.question('Ingresa el valor del billete: '));
  ab=ab+vb;
}
let m = Number(p.question('Ingresa la cantidad de monedas: '));
for(i=1; i<=m; i++){
  let vm = Number(p.question('Ingresa el valor del billete: '));
  am=am+vm;
}
as=ab+am;
console.log('El total de la caja registradora es: '+as);
