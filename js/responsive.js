// obtenemos el panel
var panel = document.querySelector(".rectangle-panel");

// obtenemos los botones
var btnEncriptar = document.querySelector(".btn-encriptar");
var btnDesencriptar = document.querySelector("btn-desencriptar");

// validaremos que sea responsive para la tablet
if ((window.matchMedia("(min-width: 768px)").matches) && (window.matchMedia("(max-width: 1024px)").matches)){
    panel.style.height = "343px";
}
if(window.matchMedia("(max-width: 1024px)").matches){
    panel.style.height = "595px";
}