var condicion = false;
var acumuladorNota=0;

condicion = confirm("Desea ver las notas promedio?");

function cargarDatos(condicion){
    var nombres = ["a", "b", "c", "d", "e"];
    notas = [20, 10, 15, 18, 16];
    for(i=0; i<5; i++){
        console.log("el alumno: "+ nombres[i]+" su nota es: "+notas[i]);
        acumuladorNota=acumuladorNota+notas[i];
    }
    if(condicion){
        notaPromedio = acumuladorNota / 5;
        console.log("la nota promedio es: "+notaPromedio);
    }

}

function mostrarNotasOrdenadas(){
    notas.sort();
    console.log("----------Notas Ordenanas---------");
    for(i=0; i<5; i++){
        console.log("las notas ordenadas son: "+notas[i]);
    }
}

function practica14_1(){
    var nombress = ["Jose", "Maria", "Jesus", "Aura"];
    var nombres1 = ["Eduardo", "Karla"];

    nombress.push("Maria");

    alert("en el arreglo hay "+nombress.length+" elementos");
    alert(nombress.join(";"));

    nombress.sort();
    alert(nombress.join("#"));

    nombress.pop();
    alert(nombress.join("-"));

    var nombres2 = nombress.concat(nombres1);
    alert(nombres2.join(","));

    nombres2.unshift("Mariana", "Jenny");
    alert(nombres2.join(" * "));

    nombres2.shift();
    alert(nombres2.join(" / "));


}