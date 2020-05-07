let p = require('readline-sync');
let n = Number(p.question('Ingresa la cantidad de alumnos: '));
let e=0;
let w=0;
for (i=1; i<=n; i++){
 let m= Number(p.question('Ingresa la calificación del alumno: ')); 
 if(m>5){
   w=w+1;
 }
 else{
   e=e+1;
 }
}
console.log("Los alumonos aprobados son: "+w);
console.log("Los alumonos reprobados son: "+e);
