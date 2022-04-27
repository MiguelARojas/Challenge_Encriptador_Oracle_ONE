// extraemos lo del boton
var btnEncriptar = document.querySelector(".btn-encriptar");
var btnCopy = document.querySelector(".btn-copy");

// traemos los paneles
var panelOutput = document.querySelector("#panelOutputText");
var panelEnterput = document.querySelector("#panelEnterText");

// traemos los mensajes
var anyMessage = document.querySelector(".message-fail")
var enterText = document.querySelector(".message-enterText")

// traemos la imagen
var image = document.querySelector(".muñeco");

btnEncriptar.addEventListener("click", function(){
    // event.preventDefault(); // evitamos que la pagina se refresque
    var text = document.querySelector("#input-texto").value;
    if (text.length > 0){
        // en caso que encuentre texto el input ocultamos nuestros mensajes
        panelOutput.classList.remove("invisible");
        panelEnterput.classList.add("invisible");
    }
    
});

