




let botonIniciar= document.getElementById("iniciar");
botonIniciar.addEventListener("click", mostrarPantallaCodificar);
let botonCodificar= document.getElementById("codificar");
botonCodificar.addEventListener("click",mostrarTextoCodificado);
let botonDecodificar= document.getElementById("decodificar"); 
botonDecodificar.addEventListener("click", mostrarTextoDecodificado);
let botonApantallaCodificar=document.getElementById("aPantallaCodificar");
 botonApantallaCodificar.addEventListener("click", regresarPantallaCodificar);
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
    pantallaDecodificar.style.display="none";
    //
    //
//document.write


 }
 function regresarPantallaDecodificar(){
    let pantallaCodificar= document.getElementById("pantallaCodificar");
    pantallaCodificar.style.display="none";
    let pantallaDecodificar= document.getElementById("pantallaDecodificar");
    pantallaDecodificar.style.display="block";
 }
 
   function mostrarTextoCodificado(){
      let string= document.getElementById("textoCodificar").value;
      let offsetCodificar= document.getElementById("offsetCodificar").value;
      let offNum = parseInt(offsetCodificar);
      let resultado = cipher.encode(offNum, string);
      let sustituir= document.getElementById("textoCodificado");
      sustituir.innerHTML = "Tu codigo ID es: "+ "<br>" +resultado;
   }

   function mostrarTextoDecodificado(){
      let stringD= document.getElementById("textoDecodificar").value;
      let offsetDecodificar= document.getElementById("offsetDecodificar").value;
      let offNumD = parseInt(offsetDecodificar);
      let resultadoD = cipher.decode(offNumD, stringD);
      let sustituir= document.getElementById("textoDecodificado");
      sustituir.innerHTML = "Tu ID decodificado es: "+ "<br>" +resultadoD;
   }
    
   