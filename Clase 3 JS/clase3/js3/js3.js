var nombre;
var cantidad;
var tipo;
var precio;
var monto;

alert("Bienvenido al ejemplo clase 2");

nombre = prompt("Ingresa tu nombre: ");
do{
    cantidad = parseInt(prompt("Ingresa la cantidad de pantalones a comprar: "));
    if(isNaN(cantidad)){
        alert("Debes incluir solo numeros");
    }
    else{

    }
}while(!isNaN(cantidad));

tipo = prompt("Ingresa el tipo de pantalon a comprar: ");
tipo = tipo.toUpperCase();

switch (tipo){
    case "A":
        precio = 141246.25;
    break;
    case "B":
        precio = 96720;
    break;
    case "C":
        precio = 58900;
    break;
    default:
        alert("Debes escoger entre los tipos A, B, C");
    
}

console.log("El tipo de pantalon seleccionado es: "+ tipo);
console.log("El precio de ese tipo de pantalon es: " + precio);


monto = cantidad * precio;
console.log("El monto a pagar es: " + monto);
console.log("Gracias por su compra "+ nombre);