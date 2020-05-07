let p = require('readline-sync');
let s= Number(1500);
let a=0;
for(i=0; i<=6; i++){
 aum= s*.10;
 s=s+aum;
 a=a+s;
 console.log("El sueldo anual es: "+s)
}
console.log("Sueldo final: "+a)
