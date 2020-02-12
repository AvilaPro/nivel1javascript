const sueldo=100000;
console.log("sueldo: "+ sueldo);
var year=Math.random()*10;
year=year.toFixed(0);
console.log("años de servicio: "+ year);
var cursos=Math.random()*10;
cursos=cursos.toFixed(0);
console.log("cursos realizados: "+ cursos);

if(year > 5){
    aumentoYear=sueldo*0.1;
}else aumentoYear=0;

if(cursos > 3){
    aumentoCurso=25000;
}else aumentoCurso=0;

var sueldoTotal=sueldo+aumentoYear+aumentoCurso;
console.log("sueldo final del empleado: "+sueldoTotal);