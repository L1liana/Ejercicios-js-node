let p = require('readline-sync');
let edad= Number(p.question('Ingresa tu edad: '));
if(edad>=18){
  console.log('Puedes votar')
}
else{
  console.log('No puedes votar por ser menor de edad')
}
