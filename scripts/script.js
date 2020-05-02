function CrearDiccionario() {
	return {
		'a': 0, 'b': 0, 'c': 0, 'd': 0, 'e': 0, 'f': 0, 'g': 0, 'h': 0, 'i': 0, 'j': 0,
		'k': 0, 'l': 0, 'm': 0, 'n': 0, 'o': 0, 'p': 0, 'q': 0, 'r': 0, 's': 0, 't': 0,
		'u': 0, 'v': 0, 'w': 0, 'x': 0, 'y': 0, 'z': 0
	}
}

function procesarTodo() {
	// Creo el diccionario
	let diccionario = CrearDiccionario()

	// Definimos si es o no ingles
	const esIngles = document.getElementById('idioma-check').checked
	if (esIngles)
		document.getElementById(`ocurrencia-ñ`).textContent = "-"
	else
		diccionario["ñ"] = 0

	//Quito el texto del campo
	let texto = document.getElementById("comment").value

	//Quito los saltos de linea por espacios
	texto = texto.replace(/\r?\n/g, " ")

	//Quito los espacios seguidos por uno solo
	texto = texto.replace(/[ ]+/g, " ")

	// Quito los espacios del principio y del final
	texto = texto.trim()

	// Valido el largo del texto
	if (texto.length === 0) {
		alert("Ingrese texto para calcular")
		return
	}

	// Pongo todo en minuscula 
	texto = texto.toLowerCase()

	// Solo contabilizo le la a - z . y quito al texto las palabras que no me importan
	let textoSoloCaracteresValidos = ""
	for (let c of texto) {
		switch (c) {
			case ' ': {
				break
			}
			case 'á':
			case 'a': {
				diccionario['a']++
				break
			}
			case 'b': {
				diccionario[c]++
				break
			}
			case 'c': {
				diccionario[c]++
				break
			}
			case 'd': {
				diccionario[c]++
				break
			}
			case 'é':
			case 'e': {
				diccionario['e']++
				break
			}
			case 'f': {
				diccionario[c]++
				break
			}
			case 'g': {
				diccionario[c]++
				break
			}
			case 'h': {
				diccionario[c]++
				break
			}
			case 'í':
			case 'i': {
				diccionario['i']++
				break
			}
			case 'j': {
				diccionario[c]++
				break
			}
			case 'k': {
				diccionario[c]++
				break
			}
			case 'l': {
				diccionario[c]++
				break
			}
			case 'm': {
				diccionario[c]++
				break
			}
			case 'n': {
				diccionario[c]++
				break
			}
			case 'ó':
			case 'o': {
				diccionario['o']++
				break
			}
			case 'p': {
				diccionario[c]++
				break
			}
			case 'q': {
				diccionario[c]++
				break
			}
			case 'r': {
				diccionario[c]++
				break
			}
			case 's': {
				diccionario[c]++
				break
			}
			case 't': {
				diccionario[c]++
				break
			}
			case 'ü':
			case 'ú':
			case 'u': {
				diccionario['u']++
				break
			}
			case 'v': {
				diccionario[c]++
				break
			}
			case 'w': {
				diccionario[c]++
				break
			}
			case 'x': {
				diccionario[c]++
				break
			}
			case 'y': {
				diccionario[c]++
				break
			}
			case 'z': {
				diccionario[c]++
				break
			}
			case 'ñ': {
				if (esIngles)
					continue

				diccionario[c]++
				break
			}
			default: {
				continue
			}
		}
		textoSoloCaracteresValidos = textoSoloCaracteresValidos + c
	}

	// Vuelvo a quitar espacios dobles
	textoSoloCaracteresValidos = textoSoloCaracteresValidos.replace(/[ ]+/g, " ")

	//Troceamos el texto por los espacios 
	const textoTroceado = textoSoloCaracteresValidos.split(" ");

	// Aca tenemos la cantidad de palabras
	const numeroPalabras = textoTroceado.length;
	document.getElementById(`cantidad-palabras`).textContent = numeroPalabras

	const cantidadLetras = textoSoloCaracteresValidos.replace(/[ ]+/g, "").length
	for (const letra in diccionario) {
		const prob = (diccionario[letra] * 100 / cantidadLetras).toFixed(4)
		document.getElementById(`ocurrencia-${letra}`).textContent = prob + "%"
	}
}