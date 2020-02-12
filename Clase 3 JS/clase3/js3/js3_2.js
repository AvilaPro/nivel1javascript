var nota;
var numero;
var acum_nota=0;
var cant_notas=0;
var monto;
var acum_monto=0;   

function leerEntero(){
    nota = parseFloat(prompt("Ingrese la nota" + cant_notas));
    if(isNaN(nota)){
        alert("En las notas deben ser solo numeros!!!");
    }
    else{
        let bien="bien";
        acum_nota = acum_nota + nota;
        console.log(bien);
    }
}

while(confirm("Desea ingresar una nota?")){
    cant_notas++;
    leerEntero();
    //console.log(bien);
}

function otroNumero(){
    numero = prompt("Ingresa el valor: ", "100");
    if(numero == null){
        numero=50;
    }else{
        numero = parseFloat(numero);
        if(isNaN(numero)){
            alert("Debes escribir solo numeros!!!");
            otroNumero();
        }
    }
}
otroNumero();
console.log(numero);
//calculos

console.log("La suma de las notas es: " + acum_nota);
var promedio = acum_nota / cant_notas;
console.log("El promedio de las notas es: " + promedio);

function solicitarMonto(){
    monto = parseFloat(prompt("Ingresa el monto solicitado: "));
    acum_monto = acum_monto + monto;
}

function acumuladoMonto(){
    alert("El monto acumulado es: " + acum_monto);
    console.log("El monto acumulado es: " + acum_monto);
}