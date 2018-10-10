	var nombre="123;"

	function saludar(){ /*el llamado de la funcion puede hacerse*/
		alert("El nombre es: "+nombre); /*dentro del script en cualquier lugar*/
	} /*si el llamado se hace en otro lado se debe indicar a la funcion antes de su llamado*/

	function leer_datos(){
		var nombre=prompt("nombre:");
		alert(nombre);
	}
