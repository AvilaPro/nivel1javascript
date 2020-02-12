var sueldos = prompt("Ingrese el sueldo: ");
var descuent = (confirm("Se le aplica descuento?")) ? descuent=sueldos*0.1 : descuent=0;
console.log("el sueldo ingresado es: " + sueldos);
console.log("el descuento al sueldo es: " + descuent);
var sueldoTotal = sueldos - descuent;
console.log("el sueldo total es: " + sueldoTotal);
alert("el sueldo es: " + sueldoTotal);

