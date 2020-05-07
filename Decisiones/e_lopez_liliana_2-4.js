let p = require('readline-sync');
let h= Number(p.question('Ingrese las horas en el estacionamiento: '));
if(h<=2){
c= h*5; 
}
else if(h<=5){
c= (h-2)*4+(2*5)
}
else if(h<=10){
  c=(3*4)+(2*5)+(h-5)*3
}
else{
  c=(3*4)+(2*5)+(5*3)+(h-10)*10
}
console.log("El costo del estacionamiento es: "+c);
