
let cajaEncriptar = document.getElementById("ingreso");
let botonEncriptar = document.getElementById("btn-encriptar");
let botonDesencriptar = document.getElementById("btn-desencriptar");
let botonCopiar = document.getElementById("btn-copiar");
let tituloDinamico = document.getElementById("titulo");
let instructivo = document.getElementById("parrafo");


/* generacion de titulo dinamico*/

function titulo() {
    tituloDinamico.innerHTML = "Desafio Encriptador ";
    
}

titulo()


/* funciones para botones de encriptar y desencriptar y copiar*/

/* funcion para encriptar */
function encriptado() {
    if (cajaEncriptar.value == "") {
        alert("Ingrese una palabra o frase");
        return;
    }
    let encriptado = encriptacion();
    document.getElementById("ingreso").value = encriptado;
}


/* funcion para desencriptar */
function desencriptado() {
    if (cajaEncriptar.value == "") {
        alert("Ingrese una palabra o frase encriptada");
        return;
    }
    let desencriptado = desencriptar();
    document.getElementById("ingreso").value = desencriptado;
}


/* funcion para copiar el texto de la caja */
function copiadoDeTexto(){

        let textoCopiado = document.getElementById("ingreso").value;
        
        /* Crear un elemento input temporal */
        let inputTemp = document.createElement("input");
        inputTemp.setAttribute("value", textoCopiado);
        document.body.appendChild(inputTemp);
        
        // Seleccionar el texto en el input temporal
        inputTemp.select();
        inputTemp.setSelectionRange(0, 99999); // Para dispositivos móviles
        
        // Ejecutar el comando de copiado
        document.execCommand("copy");
        
        // Eliminar el input temporal
        document.body.removeChild(inputTemp);
        
        // Mostrar mensaje de éxito
        alert("Texto copiado");
    }



/* funcion con la logica de encriptar */
function encriptacion() {
    /* en la funcion encriptacion utilizo el metodo de string replace para remplazar 
    la vocal y con switch le doy las condiciones*/
    let palabraAEncriptar = cajaEncriptar.value;

    let palabraEncriptada = palabraAEncriptar.toLowerCase().replace(/[aeiou]/g, function (match) {
        switch (match) {
            case "a":
                return "ai";
                break;
            case "e":
                return "enter";
                break;
            case "i":
                return "imes";
                break;
            case "o":
                return "ober";
                break;
            case "u":
                return "ufat";
                break;
        }
    })
    return palabraEncriptada;
}

encriptacion();


/* funcion con la logica de desencriptar */

function desencriptar() {

    let palabraEncriptada = cajaEncriptar.value;

    let palabraDesencriptada = palabraEncriptada.toLowerCase()
        .replace(/enter/gi, "e")
        .replace(/ober/gi, "o")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ufat/gi, "u");

    return palabraDesencriptada;
}

desencriptar()





