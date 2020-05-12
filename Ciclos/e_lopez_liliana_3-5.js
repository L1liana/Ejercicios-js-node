///Nombre: Liliana Rocio López Jiménez
/// Grado y grupo: 4°E
///Ciclos
///Ejercicio 3.5
let p = require('readline-sync');
let k = Number(p.question('Ingresa el numero a multiplicar: '));
let i=0;
while(i<=10){
  m= k*i;
  console.log(i+" x "+k+" = "+m);
  i++
}
