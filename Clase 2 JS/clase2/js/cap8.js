var esNumero = prompt("Ingrese un numero. (De lo contrario se generara una alerta!)");
esNumero = parseFloat(esNumero);
console.log(esNumero);

if(isNaN(esNumero)){
    alert("Ingresaste algo que no es un numero!!!");
}else{
    console.log("El numero ingresado es: " + esNumero);
}