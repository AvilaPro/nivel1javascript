/*
Crear un archivo nuevo JS para resolver el siguiente problema: 
La asignatura Introducción a la Computación tiene las siguientes
 evaluaciones por cada semestre: a.- Tres exámenes parciales 
 de 27 puntos cada uno. b.- Evaluación continua de 9 puntos. 
 c.- Un trabajo práctico de 10 puntos. Se tiene como entrada: 
 Las calificaciones obtenidas por un estudiante, se pide calcular 
 e imprimir. Nota final del estudiante en las escalas de 100 puntos, 
 20 puntos y 4 puntos respectivamente.
*/


var nota1=Math.ceil(Math.random()*27);
var nota2=Math.ceil(Math.random()*27);
var nota3=Math.ceil(Math.random()*27);
var evalcont=Math.ceil(Math.random()*9);
var trabpract=Math.ceil(Math.random()*10);
notafinal=nota1+nota2+nota3+evalcont+trabpract;
base20=(notafinal*20)/100;
base4=(notafinal*4)/100;
console.log(nota1)
console.log(nota2)
console.log(nota3)
console.log(evalcont)
console.log(trabpract)
console.log(notafinal)
console.log(base20)
console.log(base4)
alert("la nota final del estudiante en escala de 100pts es "+notafinal+
"\nla nota en escala de 20pts es"+base20+'\ny la nota en base 4 es'+base4);
