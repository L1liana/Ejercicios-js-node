///Nombre: Liliana Rocio López Jiménez
/// Grado y grupo: 4°E
///Decisiones
///Ejercicio 2.5
let p = require('readline-sync');
let h= Number(p.question('Ingresa la calificación del 1 al 10: '));
if(h==10){
console.log("La calificación en letra es: A ")
}
else if(h==9){
console.log("La calificación en letra es: B")
}
else if(h==8){
console.log("La calificación en letra es: C")
}
else if(h==7){
console.log("La calificación en letra es: D")
}
else if(h==6){
console.log("La calificación en letra es: E")
}
else if(h=5 && h>=1){
console.log("La calificación en letra es: F")
}
else{
  console.log("Un numero del 1 al 10")
}
