function contar_palabras(){
	//Obtenemos el texto del campo
	var texto = document.getElementById("comment").value;

	//Reemplazamos los saltos de linea por espacios
	texto = texto.replace (/\r?\n/g," ");

	//Reemplazamos los espacios seguidos por uno solo
	texto = texto.replace (/[ ]+/g," ");

	//Quitarmos los espacios del principio y del final
	texto = texto.replace (/^ /,"");
	texto = texto.replace (/ $/,"");

	//Troceamos el texto por los espacios
	var textoTroceado = texto.split (" ");

	//Contamos todos los trozos de cadenas que existen
	var numeroPalabras = textoTroceado.length;
	
	//Mostramos el número de palabras
	alert(numeroPalabras);
}

// //Llamamos a la función para que cuente las palabras
// contar_palabras();