var a=0;
var b=0;

function desafio1_1(){
	n=Math.ceil(Math.random()*5);
	for(i=1;i<=n;i++){
		console.log("i: ",i);
		funa: do{
			var nombre=prompt("Ingrese el nombre del vendedor " +i+ " :");
			if(nombre==null){
				if(confirm("Esta seguro que desea salir?")){
					alert("HASTA PRONTO");
					console.log(costo); //uso esta instruccion para que se cierre la compilacion.
				}
				else
					continue funa;
			}
			else
				if(nombre==""){
					alert("No debes dejar la casilla vacia");
					continue funa;
				}
				else
					if(!isNaN(nombre))
						alert("Debe escribir un nombre real, no numeros\n Usted escribio: "+nombre);
						else
							a=a+1;
		}while(a<1)
		var num=Math.random()*20;
		var subtotal=Math.random()*200000;
		var valor_total_ven=Math.random()*1000000;
		comision=valor_total_ven*0.1
		total=500000+subtotal+comision;
		console.log("nombre: " +nombre);
		console.log("numero de autos vendidos: " +num);
		console.log("Comision por autos vendidos: " +subtotal);
		console.log("Valor total de sus ventas: " +valor_total_ven);
		console.log("Comision por el total de sus ventas: " +comision);
		console.log("total :" +total)
		alert("el salario neto de " +nombre+" es "+total);
	}
}

function desafio1_2(){
	funb: do{
		n=prompt("Ingrese el numero de estudiantes a los que se le evaluara el promedio:");
		console.log("numero de estudiantes: "+n);
		if(n==null){
			if(confirm("Esta seguro que desea salir?")){
				alert("HASTA PRONTO");
				console.log(cosssto);//Instruccion para generar error y hacer el break.
			}
			else
				continue funb;
		}
		else
			if(n==""){
				alert("No debes dejar la casilla vacia");
				continue funb;
			}
			else
				if(isNaN(n))
					alert("Debes introducir un Numero");
					else
						b=b+1;
	}while(b<1)
	for(i=1;i<=n;i++){
		var nota1=Math.random()*27;
		var nota2=Math.random()*27;
		var nota3=Math.random()*27;
		var evalcont=Math.random()*9;
		var trabpract=Math.random()*10;
		notafinal=nota1+nota2+nota3+evalcont+trabpract;
		base20=(notafinal*20)/100;
		base4=(notafinal*4)/100;
		console.log(nota1)
		console.log(nota2)
		console.log(nota3)
		console.log(evalcont)
		console.log(trabpract)
		console.log(notafinal)
		console.log(base20)
		console.log(base4)
		alert("la nota final del estudiante en escala de 100pts es "+notafinal+"la nota en escala de 20pts es"+base20+'y la nota en base 4 es'+base4);
	}	
}