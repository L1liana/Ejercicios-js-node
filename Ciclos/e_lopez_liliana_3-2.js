let p = require('readline-sync');
let n = Number(p.question('Ingresa la cantidad de numeros: '));
let q=0;
let w=0;
let e=0;
for (i=1; i<=n; i++){
 let m= Number(p.question('Ingresa el numero: ')); 
 if(m==0){
   w=w+1;
 }
 else if(m>0){
   q=q+1;
 }
 else{
   e=e+1;
 }
}
console.log("Los números iguales a 0 son: "+w);
console.log("Los números mayores a 0 son: "+q);
console.log("Los números menores a 0 son: "+e);


