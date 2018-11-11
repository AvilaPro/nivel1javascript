var x
var y
var w
var h
var num
var posx
var posy
var ancho
var alto

function abrirVentana(x,y,w,h){
	
	window.resizeTo(w,h);
	window.moveTo(x,y);
}

function derecha(){
	posx=(screen.availWidth)/2;
	posy=0;
	ancho=((screen.width)/2);
	alto=((screen.availHeight)/2);
	abrirVentana(posx,posy,ancho,alto);
}
function cerrar(){
	x=0;
	y=0;
	w=screen.width;
	h=screen.availHeight;
	abrirVentana(x,y,w,h);
	window.resizeTo(screen.width,screen.availHeight);
	window.alert("Finalizado");
	window.close();
}
function info(){
	funaa: do{
			aa=0;
			var num=parseInt(prompt("Ingrese un numero:"));
			if(num==null){
				if(confirm("Esta seguro que desea salir?")){
				alert("HASTA PRONTO");
				console.log(cossto); //uso esta instruccion para que se cierre la compilacion.
				}
				else
					continue funaa;
			}
			else
				if(num==""){
					alert("No debes dejar la casilla vacia");
					continue funaa;
				}
				else
					if(isNaN(num)){
						alert("Debe escribir un nombre real, no letras\n Usted escribio: "+num);
						continue funaa;
					}
					else
						if(!isNaN(num)){
							aa=aa+1;
						}
		}while(aa<1)
	for(i=1; i<=num; i++){	
		derecha();
		console.log("posx: "+posx);
		console.log("posy: "+posy);
		console.log("ancho:"+ancho);
		console.log("alto: "+alto);
		window.open("info.html","",ancho,alto);
	}
	

}