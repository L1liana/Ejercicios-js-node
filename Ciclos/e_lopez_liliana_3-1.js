///Nombre: Liliana Rocio López Jiménez
/// Grado y grupo: 4°E
///Ciclos
///Ejercicio 3.1
let p = require('readline-sync');
let s= Number(1500);
let a=0;
for(i=1; i<=6; i++){
 aum= s*.10;
 s=s+aum;
 a=a+s;
 console.log("El sueldo anual del año "+i+" es: "+s);
}
console.log("Sueldo final: "+a);

