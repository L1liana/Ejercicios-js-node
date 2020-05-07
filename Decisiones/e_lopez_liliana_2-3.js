let p = require('readline-sync');
let dinero= Number(p.question('Ingrese la cantidad dispuesta a gastar: '));
if(dinero<=10){
  console.log('Su presupuesto da para una Tarjeta');
}
else if(dinero<=100){
 console.log('Su presupuesto da para unos Chocolates');
}
else if(dinero<=250){
 console.log('Su presupuesto da para unas Flores');
}
else{
  console.log('Su presupuesto da para unas Joyas');
}
