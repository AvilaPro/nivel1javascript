/*
Crear un archivo nuevo JS para resolver el siguiente problema:
Un kiosco de comida rápida desea procesar las ventas del día.
 Para ello dispone de los siguientes datos: 
 precio del desayuno, almuerzo y cena respectivamente 
 y cantidad de desayunos, almuerzos y cenas vendidos 
 durante el día. Elabore el programa que permita 
 imprimir: ingreso del kiosco por cada tipo de comida 
 (desayuno, almuerzo y cena), Total ingreso del día 
 y promedio de los precios de las comidas.
*/


var des=prompt("Ingrese el costo del desayuno:");
var numd=prompt("Ingrese el numero de desayunos vendidos:");
var alm=prompt("Ingrese el costo del almuerzo:");
var numa=prompt("Ingrese el numero de almuerzos vendidos");
var cen=prompt("Ingrese el costo de la cena:");
var numc=prompt("Ingrese el numero de cenas vendidas:");
ingd=des*numd;
inga=alm*numa;
ingc=cen*numc;
total=ingd+inga+ingc;
prom=(des+alm+cen)/3;
console.log(des)
console.log(numd)
console.log(alm)
console.log(numa)
console.log(cen)
console.log(numc)
console.log(ingd)
console.log(inga)
console.log(ingc)
console.log(total)
console.log(prom)
alert("El ingreso por desayunos es: "+ingd+" BsS");
alert("El ingreso por almuerzos es: "+inga+" BsS");
alert("El ingreso por cenas es: "+ingc+" BsS");
alert("El total de ingreso del dia es de: "+total+" BsS");
alert("El promedio de los precios de las comidas es de: "+prom);