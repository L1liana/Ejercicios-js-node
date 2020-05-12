///Nombre :Liliana Rocio López Jiménez
/// Grado y grupo: 4°E
///Decisiones
///Ejercicio 2.2
let p = require('readline-sync');
let horas= Number(p.question('Ingresa las horas trabajadas: '));
let salario= Number(p.question('Ingrese el salario por hora: '));
if(horas<=40){
sueldo= salario*horas;
console.log("El sueldo semanal es de: "+sueldo);
}
else{
  he= (horas-40)*(salario*2);
  sueldo = (salario*40)+he;
  console.log("El sueldo semanal es de: "+sueldo);
}
