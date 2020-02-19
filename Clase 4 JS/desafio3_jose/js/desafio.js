function valReq(val) {
	return (val);
}

function valString(val) {
	return (isNaN(val));
}

function valNum(val) {
	return (!isNaN(val));
}

function valLen(val, len) {
	val = val+'';
	return (parseInt(val.length)==parseInt(len));
}

function Nombre(){
    valid=false;
    while(!valid) {
       var nombre = prompt("Ingrese nombre del cliente" , "");
        valid = (valReq(nombre) && valString(nombre));
    }
    return nombre;
}
function Cedula(){
    valid=false;
    while(!valid) {
      var cedula = prompt("Ingrese cedula de 8 digitos" , "");
        valid = (valReq(cedula) && valNum(cedula) && valLen(cedula, 8));
    }
    return cedula;
}
function Pais(){
    var pais;
    loop:
    while(true){
    pais = prompt("¿Cual es su destino? (Aruba, Mexico, Miami, Londres, Suiza)").toLowerCase(); 
    switch (pais) {
        case "aruba": 
            return pais;
        case "mexico": 
            return pais;
        case "miami":
            return pais;
        case "londres":
            return pais;
        case "suiza":
            return pais;
        default: alert("Ingrese un destino valido");
        }
    }
}

function Genero(){
    var genero;
    loop:
    while(true){
        genero = prompt("¿Cual es su sexo?(Femenino(F) o Masculino(M)").toLowerCase(); 
        switch (genero){
            case "f": 
                return genero;
            case "m": 
                return genero;
            default: alert("Ingrese un genero valido");
        }
    }
}
            
            
        

var i =0;
var total=0;

function Registrar(){
    i++;
    nombre=(Nombre());
    cedula=(Cedula());
    pais=(Pais());
    genero=(Genero());
    precio=Precio();
    descuento=Descuento();
    impuesto=Impuesto();
    total=total+Total();
    console.log("NOMBRE USUARIO: " + nombre)
    console.log("DESTINO: " + pais)
    alert("NOMBRE USUARIO: " + nombre);
    alert("DESTINO: " + pais);
    
}
    
function Precio(){
    if(pais=='aruba'){
        precio=25000;
        
    }else if(pais=='mexico'){
        precio=45700;
        
        }else if(pais=='miami'){
            precio=50000;
            }else if(pais=='londres'){
            precio=140000;
            }else {
                precio=220000;
            }
        return precio;
}

function Descuento(){
    if(genero=="f"){
        descuento=precio*0.15;
    }else{
        descuento=precio*0.05;
    }
    return descuento;
}

function Impuesto(){
    if(pais=='londres'|| pais=='suiza'){
        impuesto=(precio*0.05)+10000;
        
    }else {
        impuesto=0;
    }
    return impuesto
}

function Total(){
if(cedula%2==0){
        total=precio-descuento+impuesto-1500;
        return total;
    }else{
        total=precio-descuento+impuesto+3000;
        return total;
    }
}

function Mostrar(){
      
    alert("TOTAL PASAJEROS REGISTRADOS: " + i);
    alert("TOTAL INGRESOS: " + total);
    alert("PROMEDIO INGRESOS: " + total/i);
}

