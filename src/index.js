let botonIniciar= document.getElementById("iniciar");
botonIniciar.addEventListener("click", mostrarPantallaCodificar);

//let botonCodificar= document.getElementById("codificar");
//botonCodificar.addEventListener("click",mostrarTextoCodificado);
//let botonDecodificar= document.getElementById("decodificar"); 
//botonDecodificar.addEventListener("click", mostrarTextoDecodificado);
let botonApantallaCodificar=document.getElementById("aPantallaCodificar");
 botonApantallaCodificar.addEventListener("click", regresarPantallaCodificar)
let botonApantallaDecodificar= document.getElementById("aPantallaDecodificar"); 
botonApantallaDecodificar.addEventListener("click", regresarPantallaDecodificar);
//let botonAyuda= document.getElementById("ayuda"); 
//botonAyuda.addEventListener("click",mostrarPopAyuda);
function mostrarPantallaCodificar(){
    let pantallaInicio= document.getElementById("bienvenida"); 
    pantallaInicio.style.display="none";
    let pantallaCodificar= document.getElementById("pantallaCodificar");
    pantallaCodificar.style.display="block";
    let margen= document.getElementById("margen");
    margen.style.display="block";
    let menubotones= document.getElementById("menu");
    menubotones.style.display="block";
  }
function regresarPantallaCodificar(){
    let pantallaCodificar= document.getElementById("pantallaCodificar");
    pantallaCodificar.style.display="block";
    let pantallaDecodificar= document.getElementById("pantallaDecodificar");
    pantallaDecodificar.style.display="none"
 }
 function regresarPantallaDecodificar(){
    let pantallaCodificar= document.getElementById("pantallaCodificar");
    pantallaCodificar.style.display="none";
    let pantallaDecodificar= document.getElementById("pantallaDecodificar");
    pantallaDecodificar.style.display="block"
 }

  