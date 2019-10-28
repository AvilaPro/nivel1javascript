/*
Crear un archivo nuevo JS para resolver el siguiente 
problema: Una compañía dedicada a la venta de vehículos 
ofrece a sus clientes el siguiente sistema de pago: 
Una cuota inicial del 30% del costo del vehículo y 
la diferencia debe ser cancelada en cuotas mensuales 
iguales y consecutivas durante 2 años. Cuando un 
cliente compra un vehículo la compañía requiere un 
informe que contenga: 
a.- Nombre del cliente. 
b.- Cuota inicial. c.- Monto de las cuotas mensuales. 
Como dato de entrada se tiene nombre del cliente y 
precio del vehículo.
*/

var cliente=prompt("Nombre del cliente:");
var costo=prompt("Ingrese el precio total del vehiculo:");
inicial=costo*0.3;
resto=(costo-inicial)/24;
console.log(cliente)
console.log(costo)
console.log(inicial)
console.log(resto)
alert("El cliente: "+cliente+" tendra una cuota inicial del vehiculo igual a: "+inicial+" y cuotas mensuales por 2 anos de: "+resto);
