// extraemos lo del boton
var btnDesencriptar = document.querySelector(".btn-desencriptar");
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

btnDesencriptar.addEventListener("click", function(){
    var text = document.querySelector("#input-texto").value;

    // creamos una variable para almacenar el texto que se desencriptara
    var textDesencript = text;

    if (text.length > 0){
        // en caso que encuentre texto el input ocultamos nuestros mensajes
        panelOutput.classList.remove("invisible");
        panelEnterput.classList.add("invisible");

        // creamos un array para buscar cada letra
        var buscar = ["ai","enter","imes","ober","ufat"];

        // creamos un for para leer la cadena
        for(var iterador = 0; iterador < textDesencript.length; iterador++){
            // creamos un for anidado para recorrer nuestro array a buscar
            for(var scIterador = 0; scIterador < buscar.length; scIterador++){
                // almacenamos el valor que buscamos
                var aux = text.search(buscar[scIterador]);
                console.log(buscar[scIterador])
                // generamos una validacion para saber si ya llegamos al final de la lista
                if (aux != -1){
                    console.log(buscar[scIterador] )
                    console.log(textDesencript)
                    if(buscar[scIterador] == "ai"){
                        textDesencript = textDesencript.replace(buscar[scIterador], "a"); // cambiamos el ai por a
                    }else if (buscar[scIterador] == "enter"){
                        textDesencript = textDesencript.replace(buscar[scIterador], "e"); // cambiamos el enter por e
                    }else if(buscar[scIterador] == "imes"){
                        textDesencript = textDesencript.replace(buscar[scIterador], "i"); // cambiamos el imes por i
                    }else if(buscar[scIterador] == "ober"){
                        textDesencript = textDesencript.replace(buscar[scIterador], "o"); // cambiamos el ober por o
                    }else if(buscar[scIterador] == "ufat"){
                        textDesencript = textDesencript.replace(buscar[scIterador], "u"); // cambiamos el ufat por U
                    }
                }
            }
        }
        // asignamos donde se muestra el mensaje desencriptado
        finalText.value = textDesencript;
        // dejamos en blanco el texto que mandamos a encriptar
        document.querySelector("#input-texto").value = "";
    }else{
        panelOutput.classList.add("invisible");
        panelEnterput.classList.remove("invisible");
    }
});

