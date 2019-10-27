/*
Crear un archivo nuevo JS para resolver el siguiente problema: 
Una agencia de carros paga a su personal de ventas un salario 
base de 500.000 Bs. más una comisión de 200.000 Bs. por cada 
automóvil vendido, más el 10% del valor total de las ventas.
Si se tiene como entrada el nombre del vendedor, el número 
de autos vendidos y el valor total de sus ventas. Se pide
calcular e imprimir el salario neto del vendedor.
*/



/*Agregado luego desde el archivo clase2_2.html*/
var i=0;
fun: do{
    var nombre=prompt("Indique el nombre del vendedor: ");
    console.log(nombre)
    /*si el usuariohae click en el boton
    cancelar, prompt retorna null
    si el usuario hace click en el boton
    aceptar sin escribir nada, prompt retorna
    una cadena vacia*/
    if(nombre==null || nombre==""){
        alert("Debe escribir un nombre (no numeros), no dejar vacio \n y luego dar click en aceptar");
    }
    else
        if(isNaN(nombre)){
            alert("El nombre es: "+nombre);
            i++;
        }	
        else{
            alert("Es un numero, recuerda no escribir numeros \n\n Reintentalo");
        }
    continue fun;			
}while(i<1)
/*Fin del agregado */
var num=(Math.random()*20).toFixed(0); //num: valor aleatorio de numero de autos vendidos
var comision1=num*200000;
var total_ventas=num*5000000; //valor totla de las ventas
var comision2=total_ventas.toFixed(2)*0.1;
total= (500000+comision1+comision2);
console.log("Nombre del vendedor: "+nombre);
console.log("Numero de autos vendidos: "+num);
console.log("Comision por venta de autos: "+comision1.toFixed(2));
console.log("Comision por valor total de sus ventas: "+comision2.toFixed(2));
console.log("Salario neto= "+total.toFixed(2));
alert("el salario neto de " +nombre+" es "+total);