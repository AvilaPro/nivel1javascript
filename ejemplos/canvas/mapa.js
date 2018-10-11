function roundedRect(ctx,x,y,width,height,radius){
  ctx.beginPath();
  ctx.moveTo(x,y+radius);
  ctx.lineTo(x,y+height-radius);
  ctx.arcTo(x,y+height,x+radius,y+height,radius);
  ctx.lineTo(x+width-radius,y+height);
  ctx.arcTo(x+width,y+height,x+width,y+height-radius,radius);
  ctx.lineTo(x+width,y+radius);
  ctx.arcTo(x+width,y,x+width-radius,y,radius);
  ctx.lineTo(x+radius,y);
  ctx.arcTo(x,y,x,y+radius,radius);
  ctx.stroke();
}

function dibujarFlecha(lienzo,x1,y1,x2,y2)
{
		lienzo.beginPath();
		lienzo.moveTo(x1,y1);
		lienzo.lineTo(x2-20,y2);
		lienzo.moveTo(x2-20,y2);
		lienzo.lineTo(x2,y2);
		lienzo.moveTo(x2,y2);
		lienzo.lineTo(x2-8,y2-8);
		lienzo.lineTo(x2-8,y2+8);
		lienzo.moveTo(x2-8,y2+8);
		lienzo.lineTo(x2-8,y2-8);
		lienzo.fill();
		lienzo.stroke();
}

function Curso(nombre,codigo) {
	this.codigo=codigo;
	this.nombre=nombre;
	this.ancho=100;
	this.alto=40;
	this.siguientes=[];
}

Curso.prototype.agregarSiguiente = function(nombre,codigo) {
	this.siguientes.push(new Curso(nombre,codigo));;
};

Curso.prototype.pintar = function(lienzo,x,y) {
	lienzo.font = "20px Times New Roman";
	lienzo.fillStyle = "Black";
	lienzo.fillText(this.nombre, x+12, y+this.alto/2+5);
	roundedRect(lienzo,x,y,this.ancho,this.alto,15);
};

var Mapa={
	"nombre"	: "",
	"inicio"	: new Curso("CPA-N1","127"),
	"lienzo"	: "",
	"canvas"	: "",
	"init" 		: function (idcanvas,nombreMapa){
					this.nombre = nombreMapa;
					this.canvas = document.getElementById(idcanvas);
					if (this.canvas.getContext){
						this.lienzo = this.canvas.getContext('2d');
						this.pintarTitulo();
						this.inicio.agregarSiguiente("HTM-N1","253");
						this.inicio.agregarSiguiente("PHO-N1","251");
						this.inicio.agregarSiguiente("LDP-N1","253");
						
						this.inicio.siguientes[2].agregarSiguiente("LDP-N2","253");
						this.inicio.siguientes[0].agregarSiguiente("HTM-N2","253");
						
						this.inicio.siguientes[2].siguientes[0].agregarSiguiente("JAS-N1","253");
						this.inicio.siguientes[2].siguientes[0].agregarSiguiente("PHP-N1","253");
						
						this.inicio.siguientes[0].siguientes[0].agregarSiguiente("HTM-N3","253");
						this.pintar(this.inicio,25,this.canvas.height/2-25);
					}
				},
	"pintar"	: function (item,x,y){
					item.pintar(this.lienzo,x,y);
					var y_inicial=y-item.alto*(item.siguientes.length-1);
					for (var i=0;i<item.siguientes.length;i++)
					{
						x2=x+item.ancho*2;
						y2=y_inicial;
						dibujarFlecha(this.lienzo,x+item.ancho,y+item.alto/2,x2,y2+item.alto/2);
						this.pintar(item.siguientes[i],x2,y2);
						y_inicial+=item.ancho;
					}
				},
	"pintarTitulo" : function()	{
						this.lienzo.font = "50px Times New Roman";
						this.lienzo.fillStyle = "Black";
						x=this.canvas.width/2-this.nombre.length*12;
						y=50;
						this.lienzo.fillText(this.nombre,x,y);						
				}
}

