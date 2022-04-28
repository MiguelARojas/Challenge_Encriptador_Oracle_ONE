// traemos el boton de copiar
var btnCopy = document.querySelector(".btn-copy");

btnCopy.addEventListener("click", function(){
    // traemos el texto encriptado o desencriptado
    var text =  document.querySelector("#final-text");
    // creamos otro input que nos ayudara a copiar el texto
    var textHide = document.createElement("input");
    // le asignamos los atributos del texto como a la vez de su contenido
    textHide.setAttribute('value', text.textContent);
    // lo añadimos a nuestro body
    document.body.appendChild(textHide);
    // seleccionamos el texto
    textHide.select();
    // copiamos el texto
    document.execCommand('copy');
    // eliminamos el input creado
    document.body.removeChild(textHide);
    // dejamos seleccionado el texto
    document.querySelector("#final-text").select();

});