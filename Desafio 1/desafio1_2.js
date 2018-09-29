var nota1=Math.random()*27;
var nota2=Math.random()*27;
var nota3=Math.random()*27;
var evalcont=Math.random()*9;
var trabpract=Math.random()*10;
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
alert("la nota final del estudiante en escala de 100pts es "+notafinal+"la nota en escala de 20pts es"+base20+'y la nota en base 4 es'+base4);
