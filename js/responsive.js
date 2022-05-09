// obtenemos el panel
var panel = document.querySelector(".rectangle-panel");

// validaremos que sea responsive para la tablet
if ((window.matchMedia("(min-width: 768px)").matches) && (window.matchMedia("(max-width: 1024px)").matches)){
    panel.style.height = "343px";
}

if(window.matchMedia("(max-width: 1024px)").matches){
    panel.style.height = "595px";
}



// validaremos que sea responsive para un telefono
if((window.matchMedia("(min-width: 360px)").matches) && (window.matchMedia("(max-width: 767px)").matches)){
    panel.style.height = "133px";
}

if(window.matchMedia("(max-width: 767px)").matches){
    panel.style.height = "186px";
}