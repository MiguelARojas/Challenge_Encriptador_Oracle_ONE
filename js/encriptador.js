// extraemos lo del boton
var btnEncriptar = document.querySelector(".btn-encriptar");
var btnCopy = document.querySelector(".btn-copy");

// traemos los paneles
var panelOutput = document.querySelector("#panelOutputText");
var panelEnterput = document.querySelector("#panelEnterText");

// traemos donde se mostrara el mensaje encriptado
var finalText = document.querySelector("#final-text");

// traemos los mensajes
var anyMessage = document.querySelector(".message-fail")
var enterText = document.querySelector(".message-enterText")

// traemos la imagen
var image = document.querySelector(".muñeco");

btnEncriptar.addEventListener("click", function () {
    // event.preventDefault(); // evitamos que la pagina se refresque
    var text = document.querySelector("#input-texto").value;

    // creamos una variable para almacenar el texto encriptado
    var textEncript = "";


    if (text.length > 0) {
        // en caso que encuentre texto el input ocultamos nuestros mensajes
        panelOutput.classList.remove("invisible");
        panelEnterput.classList.add("invisible");

        // creamos un for para leer la cadena
        for (var iterador = 0; iterador < text.length; iterador++) {
            // almacenamos letra por letra para compararla
            var letter = text.charAt(iterador);

            // hacemos un if else if para comprobar cada letra
            if (letter == 'a') { // comprobamos que la letra sea a
                textEncript += "ai";

            } else if (letter == 'e') { // comprobamos que la letra sea e
                textEncript += "enter";

            } else if (letter == 'i') { // comprobamos que la letra sea i
                textEncript += "imes";

            } else if (letter == 'o') { // comprobamos que la letra sea o 
                textEncript += "ober"

            } else if (letter == 'u') { // comprobamos que la letra sea u
                textEncript += "ufat";

            } else { // como no entro a ningun caso simplemente concatenamos lo demas
                textEncript += letter;
            }
        }

        // dejamos en blanco el texto que mandamos a encriptar
        document.querySelector("#input-texto").value = "";
        // mandamos al textarea el texto encriptado
        finalText.textContent = textEncript;
    } else {
        panelOutput.classList.add("invisible");
        panelEnterput.classList.remove("invisible");
    }
});

