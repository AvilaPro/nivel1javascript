var cliente=prompt("Nombre del cliente:");
var costo=prompt("Ingrese el precio total del vehiculo:");
inicial=costo*0.3;
resto=(costo-inicial)/24;
console.log(cliente)
console.log(costo)
console.log(inicial)
console.log(resto)
alert("El cliente: "+cliente+" tendra una cuota inicial del vehiculo igual a: "+inicial+" y cuotas mensuales por 2 anos de: "+resto);
