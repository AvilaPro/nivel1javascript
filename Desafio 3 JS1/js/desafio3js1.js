var a=0;
var b=0;
var aa=0;
var ab=0;
var ba=0;
var bb=0;
var bc=0;
var bd=0;
var be=0;
var c=0;
var ca=0;
var cb=0;
var da=0;
var db=0;
var dc=0;
var de=0;
var df=0;
var dg=0;
var cont1=0;
var cont2=0;
var cont3=0;
var cont4=0;

function desafio1_1(){
	n=Math.ceil(Math.random()*3);
	console.log("n: " +n);
	cont1=cont1+1;
	console.log("cont desafio1:" +cont1);
	if (cont1>1){
		if(confirm("Ya se ejecuto esta funcion. Desea volver a hacerlo?")){
			console.log("contador va en: " +cont1);
		}
		else{
			alert("HASTA LUEGO");
			console.log(cosssto);
		}
	}
	for(i=1;i<=n;i++){
		console.log("i: ",i);
		funa: do{
			a=0;
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
					if(!isNaN(nombre)){
						alert("Debe escribir un nombre real, no numeros\n Usted escribio: "+nombre);
						continue funa;
					}
					else
						if(isNaN(nombre)){
							a=a+1;
						}
		}while(a<1)
		funaa: do{
			aa=0;
			var num=parseInt(prompt("Ingrese el numero de ventas que hizo " +nombre+ " :"));
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
		var subtotal=num*200000;
		funab: do{
			ab=0;
			var valor_total=parseFloat(prompt("Ingrese el valor total de ventas que hizo " +nombre+ " :"));
			if(valor_total==null){
				if(confirm("Esta seguro que desea salir?")){
				alert("HASTA PRONTO");
				console.log(cossto); //uso esta instruccion para que se cierre la compilacion.
				}
				else
					continue funab;
			}
			else
				if(valor_total==""){
					alert("No debes dejar la casilla vacia");
					continue funab;
				}
				else
					if(isNaN(valor_total)){
						alert("Debe escribir un nombre real, no letras\n Usted escribio: "+valor_total);
						continue funab;
					}
						else
							if(!isNaN(valor_total)){
								ab=ab+1;
							}
		}while(ab<1)	
		comision=valor_total*0.1
		total=500000+subtotal+comision;
		console.log("nombre: " +nombre);
		console.log("numero de autos vendidos: " +num);
		console.log("Comision por autos vendidos: " +subtotal);
		console.log("Valor total de sus ventas: " +valor_total);
		console.log("Comision por el total de sus ventas: " +comision);
		console.log("total :" +total)
		alert("el salario neto de " +nombre+" es "+total+ " BsS");
	}
}


function desafio1_2(){
	funb: do{
		cont2=cont2+1;
		console.log("cont desafio2:" +cont2);
		if (cont2>1){
			if(confirm("Ya se ejecuto esta funcion. Desea volver a hacerlo?")){
				console.log("contador va en: " +cont2);
			}
			else{
				alert("HASTA LUEGO");
				console.log(cosssto);
			}
		}
		n=parseInt(prompt("Ingrese el numero de estudiantes a los que se le evaluara el promedio:"));
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
				if(isNaN(n)){
					alert("Debes introducir un Numero");
					continue funb;
				}
					else
						if(!isNaN(n))
						b=b+1;
	}while(b<1)
	for(i=1;i<=n;i++){
		funba: do{
			nota1=parseFloat(prompt("Ingrese la nota del segundo examen parcial (x/27):"));
			console.log("nota 1 : "+nota1);
			if(nota1<0 || nota1>27){
				alert("Debes intriducir una nota entre 0 y 27");
				continue funba;
			}
			else
				if(nota1==null){
					if(confirm("Esta seguro que desea salir?")){
						alert("HASTA PRONTO");
						console.log(cosssto);//Instruccion para generar error y hacer el break.
					}
					else
						continue funba;
				}
				else
					if(nota1==""){
						alert("No debes dejar la casilla vacia");
						continue funba;
					}
					else
						if(isNaN(nota1)){
							alert("Debes introducir un Numero");
							continue funba;
						}
						else
							if(!isNaN(nota1))
							ba=ba+1;
		}while(ba<1)
		fb: do{
			nota2=parseFloat(prompt("Ingrese la nota del segundo examen parcial (x/27):"));
			console.log("nota 2 : "+nota2);
			if(nota2<0 || nota2>27){
							alert("Debes intriducir una nota entre 0 y 27");
							continue fb;
			}
			else
				if(nota2==null){
					if(confirm("Esta seguro que desea salir?")){
						alert("HASTA PRONTO");
						console.log(cosssto);//Instruccion para generar error y hacer el break.
					}
					else
						continue fb;
				}
				else
					if(nota2==""){
						alert("No debes dejar la casilla vacia");
						continue fb;
					}
					else
						if(isNaN(nota2)){
							alert("Debes introducir un Numero");
							continue fb;
						}
						else
							if(!isNaN(nota2))
							bb=bb+1;		
		}while(bb<1)
		funbc: do{
			nota3=parseFloat(prompt("Ingrese la nota del segundo examen parcial (x/27):"));
			console.log("nota 3 : "+nota3);
			if(nota3<0 || nota3>27){
				alert("Debes intriducir una nota entre 0 y 27");
				continue funbc;
			}
				else
					if(nota3==null){
						if(confirm("Esta seguro que desea salir?")){
							alert("HASTA PRONTO");
							console.log(cosssto);//Instruccion para generar error y hacer el break.
						}
						else
							continue funbc;
					}
					else
						if(nota3==""){
							alert("No debes dejar la casilla vacia");
							continue funbc;
						}
						else
							if(isNaN(nota3)){
								alert("Debes introducir un Numero");
								continue funbc;
							}
								else
									if(!isNaN(nota3))
									bc=bc+1;
		}while(bc<1)
		funbd: do{
			evalcont=parseFloat(prompt("Ingrese la nota del segundo examen parcial (x/9):"));
			console.log("evaluacion continua : "+evalcont);
			if(evalcont<0 || evalcont>9){
				alert("Debes intriducir una nota entre 0 y 9");
				continue funbd;
			}
				else
					if(evalcont==null){
						if(confirm("Esta seguro que desea salir?")){
							alert("HASTA PRONTO");
							console.log(cosssto);//Instruccion para generar error y hacer el break.
						}
						else
							continue funbd;
					}
					else
						if(evalcont==""){
							alert("No debes dejar la casilla vacia");
							continue funbd;
						}
						else
							if(isNaN(evalcont)){
								alert("Debes introducir un Numero");
								continue funbd;
							}
								else
									if(!isNaN(evalcont))
									bd=bd+1;
		}while(bd<1)
		funbe: do{
			trabpract=parseFloat(prompt("Ingrese la nota del segundo examen parcial (x/10):"));
			console.log("trabajo practico : "+trabpract);
			if(trabpract<0 || trabpract>10){
				alert("Debes introducir una nota entre 0 y 10");
				continue funbe;
			}
				else
					if(trabpract==null){
						if(confirm("Esta seguro que desea salir?")){
							alert("HASTA PRONTO");
							console.log(cosssto);//Instruccion para generar error y hacer el break.
						}
						else
							continue funbe;
					}
					else
						if(trabpract==""){
							alert("No debes dejar la casilla vacia");
							continue funbe;
						}
						else
							if(isNaN(trabpract)){
								alert("Debes introducir un Numero");
								continue funbe;
							}
								else
									if(!isNaN(trabpract))
									be=be+1;
		}while(be<1)
		notafinal=nota1+nota2+nota3+evalcont+trabpract;
		base20=(notafinal*20)/100;
		base4=(notafinal*4)/100;
		console.log(nota1)
		console.log(nota2)
		console.log(nota3)
		console.log(evalcont)
		console.log(trabpract)
		console.log("nota final base 100: " +notafinal)
		console.log("nota final base 20: " +base20)
		console.log("nota final base 4: " +base4)
		alert("la nota final del estudiante en escala de 100pts es " +notafinal+ " la nota en escala de 20pts es "+base20+ " y la nota en base 4 es " +base4);
	}	
}

function desafio1_3(){
	func: do{
		cont3=cont3+1;
		console.log("cont desafio3:" +cont3);
		if (cont3>1){
			if(confirm("Ya se ejecuto esta funcion. Desea volver a hacerlo?")){
				console.log("contador va en: " +cont3);
			}
			else{
				alert("HASTA LUEGO");
				console.log(cosssto);
			}
		}
		n=parseInt(prompt("Ingrese el numero de clientes a los que se les hara sus calculos:"));
		console.log("numero de estudiantes: "+n);
		if(n==null){
			if(confirm("Esta seguro que desea salir?")){
				alert("HASTA PRONTO");
				console.log(cosssto);//Instruccion para generar error y hacer el break.
			}
			else
				continue func;
		}
		else
			if(n==""){
				alert("No debes dejar la casilla vacia");
				continue func;
			}
			else
				if(isNaN(n)){
					alert("Debes introducir un Numero");
					continue func;
				}
					else
						if(!isNaN(n))
						c=c+1;
	}while(c<1)
	for(i=1;i<=n;i++){
		funca: do{
			var cliente=prompt("Nombre del cliente " +n+ " :");
			if(cliente==null){
					if(confirm("Esta seguro que desea salir?")){
						alert("HASTA PRONTO");
						console.log(costo); //uso esta instruccion para que se cierre la compilacion.
					}
					else
						continue funca;
			}
			else
				if(cliente==""){
					alert("No debes dejar la casilla vacia");
					continue funca;
				}
				else
					if(!isNaN(cliente)){
						alert("Debe escribir un nombre real, no numeros\n Usted escribio: "+cliente);
						continue funca;
					}
						else
							if(isNaN(cliente))
							ca=ca+1;
		}while(ca<1)
		funcb: do{
			costo=parseFloat(prompt("Ingrese el precio total del vehiculo:"));
			console.log("cosot : " +costo);
			if(costo==null){
				if(confirm("Esta seguro que desea salir?")){
					alert("HASTA PRONTO");
					console.log(cosssto);//Instruccion para generar error y hacer el break.
				}
				else
					continue funcb;
			}
			else
				if(costo==""){
					alert("No debes dejar la casilla vacia");
					continue funcb;
				}
				else
					if(isNaN(costo)){
						alert("Debes introducir un Numero");
						continue funcb;
					}
						else
							if(!isNaN(costo))
							cb=cb+1;
		}while(cb<1)
		inicial=costo*0.3;
		resto=(costo-inicial)/24;
		console.log("cliente: " +cliente)
		console.log("costo: " +costo)
		console.log("inicial: " +inicial)
		console.log("resto a pagar: " +resto)
		alert("El cliente: "+cliente+" tendra una cuota inicial del vehiculo igual de: "+inicial+" y cuotas mensuales por 2 anos de: "+resto);
	}
}

function desafio1_4(){
	n=Math.ceil(Math.random()*3);
	console.log("n: " +n);
	cont4=cont4+1;
		console.log("cont desafio4:" +cont4);
		if (cont4>1){
			if(confirm("Ya se ejecuto esta funcion. Desea volver a hacerlo?")){
				console.log("contador va en: " +cont4);
			}
			else{
				alert("HASTA LUEGO");
				console.log(cosssto);
			}
		}
	for(i=1;i<=n;i++){
		funda: do{
			da=0;
			des=parseFloat(prompt("Ingrese el costo del desayuno:"));
			console.log("costo del desayuno : " +des);
			if(des==null){
				if(confirm("Esta seguro que desea salir?")){
					alert("HASTA PRONTO");
					console.log(cosssto);//Instruccion para generar error y hacer el break.
				}
				else
					continue funda;
			}
			else
				if(des==""){
					alert("No debes dejar la casilla vacia");
					continue funda;
				}
				else
					if(isNaN(des)){
						alert("Debes introducir un Numero");
						continue funda;
					}
						else
							if(!isNaN(des))
							da=da+1;
		}while(da<1)
		fundb: do{
			db=0;
			numd=parseFloat(prompt("Ingrese el numero de desayunos vendidos:"));
			console.log("num desay vendidos : " +numd);
			if(numd==null){
				if(confirm("Esta seguro que desea salir?")){
					alert("HASTA PRONTO");
					console.log(cosssto);//Instruccion para generar error y hacer el break.
				}
				else
					continue fundb;
			}
			else
				if(numd==""){
					alert("No debes dejar la casilla vacia");
					continue fundb;
				}
				else
					if(isNaN(numd)){
						alert("Debes introducir un Numero");
						continue fundb;
					}
						else
							if(!isNaN(numd))
							db=db+1;
		}while(db<1)
		fundc: do{
			dc=0;
			alm=parseFloat(prompt("Ingrese el costo del almuerzo:"));
			console.log("costo almuerzo : " +alm);
			if(alm==null){
				if(confirm("Esta seguro que desea salir?")){
					alert("HASTA PRONTO");
					console.log(cosssto);//Instruccion para generar error y hacer el break.
				}
				else
					continue fundc;
			}
			else
				if(alm==""){
					alert("No debes dejar la casilla vacia");
					continue fundc;
				}
				else
					if(isNaN(alm)){
						alert("Debes introducir un Numero");
						continue fundc;
					}
						else
							if(!isNaN(alm))
							dc=dc+1;
		}while(dc<1)
		funde: do{
			de=0;
			numa=parseFloat(prompt("Ingrese el numero de almuerzos vendidos:"));
			console.log("num almuerz vendidos : " +numa);
			if(numa==null){
				if(confirm("Esta seguro que desea salir?")){
					alert("HASTA PRONTO");
					console.log(cosssto);//Instruccion para generar error y hacer el break.
				}
				else
					continue funde;
			}
			else
				if(numa==""){
					alert("No debes dejar la casilla vacia");
					continue funde;
				}
				else
					if(isNaN(numa)){
						alert("Debes introducir un Numero");
						continue funde;
					}
					else
						if(!isNaN(numa))
						de=de+1;
		}while(de<1)
		fundf: do{
			df=0;
			cen=parseFloat(prompt("Ingrese el costo de la cena:"));
			console.log("cosoto cena : " +cen);
			if(cen==null){
				if(confirm("Esta seguro que desea salir?")){
					alert("HASTA PRONTO");
					console.log(cosssto);//Instruccion para generar error y hacer el break.
				}
				else
					continue fundf;
			}
			else
				if(cen==""){
					alert("No debes dejar la casilla vacia");
					continue fundf;
				}
				else
					if(isNaN(cen)){
						alert("Debes introducir un Numero");
						continue fundf;
					}
					else
						if(!isNaN(cen))
						df=df+1;
		}while(df<1)
		fundg: do{
			dg=0;
			numc=parseFloat(prompt("Ingrese el numero de cenas vendidos:"));
			console.log("num cenas vendidos : " +numc);
			if(numc==null){
				if(confirm("Esta seguro que desea salir?")){
					alert("HASTA PRONTO");
					console.log(cosssto);//Instruccion para generar error y hacer el break.
				}
				else
					continue fundg;
			}
			else
				if(numc==""){
					alert("No debes dejar la casilla vacia");
					continue fundg;
				}
				else
					if(isNaN(numc)){
						alert("Debes introducir un Numero");
						continue fundg;
					}
						else
							if(!isNaN(numc))
							dg=dg+1;
		}while(dg<1)
		ingd=des*numd;
		inga=alm*numa;
		ingc=cen*numc;
		total=ingd+inga+ingc;
		prom=(des+alm+cen)/3;
		console.log(des);
		console.log(numd);
		console.log(alm);
		console.log(numa);
		console.log(cen);
		console.log(numc);
		console.log("ingreso desayuno: " +ingd);
		console.log("ingreso almuerzo: " +inga);
		console.log("ingreso cena: " +ingc);
		console.log("total: " +total);
		console.log("promedio: " +prom);
		alert("El ingreso por desayunos es: "+ingd+" BsS");
		alert("El ingreso por almuerzos es: "+inga+" BsS");
		alert("El ingreso por cenas es: "+ingc+" BsS");
		alert("El total de ingreso del dia es de: "+total+" BsS");
		alert("El promedio de los precios de las comidas es de: "+prom);
	}
}