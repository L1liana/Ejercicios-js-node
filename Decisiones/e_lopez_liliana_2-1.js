///Nombre: Liliana Rocio López Jiménez
/// Grado y grupo: 4°E
///Decisiones
///Ejercicio 2.1
let p = require('readline-sync');
let edad= Number(p.question('Ingresa tu edad: '));
if(edad>=18){
  console.log('Puedes votar')
}
else{
  console.log('No puedes votar por ser menor de edad')
}

