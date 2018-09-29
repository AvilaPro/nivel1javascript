var nombre=prompt('Nombre del vendedor:')
var num=Math.random()*20;
var subtotal=Math.random()*500000;
total=subtotal*num;
console.log(nombre)
console.log(num)
console.log(subtotal)
console.log(total)
alert("el salario neto de " +nombre+" es "+total);