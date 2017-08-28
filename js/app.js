/*
 * Archivo principal de funcionalidad de JS
 */

// Traemos el seccion
var imgCatalogo = document.getElementsByClassName("imgCatalogo");
var section = document.getElementById("catalogo")

for (var i = 0; i < imgCatalogo.length; i++) {
    imgCatalogo[i].onclick = function () {
        showImg(this);
    }
}

var imgActual;

function showImg(e) {
    //El Id, nos sirve para conocer la ruta del mimso 
    var ruta = e.id;
    imgActual = ruta.toString().substr(-1);
    //Creamos un div para la imagen y el botón la Imagen
    var divImg = document.createElement("div");
    divImg.classList.add("divImgAbs");
    divImg.setAttribute("id", "divImg");
    //Creamos un div que va a contener la imagen
    var divImgIn = document.createElement("div");
    divImgIn.classList.add("bgImg");
    
    //Creamos la imagen
    var showImagen = document.createElement("img");
    showImagen.src = "assets/images/" + ruta + ".jpg"
    showImagen.classList.add("showImagen");
    //Creamos el boton para salir
    var close = document.createElement("span");
    var closeTxt = document.createTextNode('\u02DF');
    close.appendChild(closeTxt);
    close.classList.add("btn");
    close.classList.add("btnClose");
    close.onclick = function () {
        quit(this);
    }
    //Creamos un botón siguiente
    var siguiente = document.createElement("span");
    var siguienteTxt = document.createTextNode(">");
    siguiente.appendChild(siguienteTxt);
    siguiente.classList.add("btn");
    siguiente.classList.add("btnSiguiente");
    siguiente.onclick = function() {
        next(this);
    }
    // Creamos un botón para la imagen anterior
    var anterior = document.createElement("span");
    var anteriorTxt = document.createTextNode("<");
        anterior.appendChild(anteriorTxt);
        anterior.classList.add("btn");
        anterior.classList.add("btnAnterior");
        anterior.onclick = function(){
            back(this);
        }
    //Anidamos
    
    divImgIn.appendChild(anterior);
    divImgIn.appendChild(siguiente);
    divImgIn.appendChild(close);
    divImgIn.appendChild(showImagen);
    divImg.appendChild(divImgIn);
    section.appendChild(divImg);
}

function quit(e) {
    var divEliminar = e.parentNode.parentNode.parentNode;
    divEliminar.removeChild(e.parentNode.parentNode);
}
function next(e){
    quit(e);
    imgActual++;
    if(imgActual > imgCatalogo.length){
        imgActual = 1;
    }
    //Creamos un div para la imagen y el botón la Imagen
    var divImg = document.createElement("div");
    divImg.classList.add("divImgAbs");
    divImg.setAttribute("id", "divImg");
    //Creamos un div que va a contener la imagen
    var divImgIn = document.createElement("div");
    divImgIn.classList.add("bgImg");
    //Creamos la imagen
    var showImagen = document.createElement("img");
    showImagen.src = "assets/images/img-" + imgActual + ".jpg"
    showImagen.classList.add("showImagen");
    //Creamos el boton para salir
    var close = document.createElement("span");
    var closeTxt = document.createTextNode('\u02DF');
    close.appendChild(closeTxt);
    close.classList.add("btn");
    close.classList.add("btnClose");
    close.onclick = function () {
        quit(this);
    }
    //Creamos un botón siguiente
    var siguiente = document.createElement("span");
    var siguienteTxt = document.createTextNode(">");
    siguiente.appendChild(siguienteTxt);
    siguiente.classList.add("btn");
    siguiente.classList.add("btnSiguiente");
    siguiente.onclick = function() {
        next(this);
    }
     // Creamos un botón para la imagen anterior
     var anterior = document.createElement("span");
     var anteriorTxt = document.createTextNode("<");
         anterior.appendChild(anteriorTxt);
         anterior.classList.add("btn");
         anterior.classList.add("btnAnterior");
         anterior.onclick = function(){
             back(this);
         }
    //Anidamos
    divImgIn.appendChild(showImagen)
    divImgIn.appendChild(close);
    divImgIn.appendChild(siguiente);
    divImgIn.appendChild(anterior);
    divImg.appendChild(divImgIn);
    section.appendChild(divImg);

}

function back(e){
    quit(e);
    imgActual--;
    if(imgActual < 1 ){
        imgActual = imgCatalogo.length;
    }
    //Creamos un div para la imagen y el botón la Imagen
    var divImg = document.createElement("div");
    divImg.classList.add("divImgAbs");
    divImg.setAttribute("id", "divImg");
    //Creamos un div que va a contener la imagen
    var divImgIn = document.createElement("div");
    divImgIn.classList.add("bgImg");
    //Creamos la imagen
    var showImagen = document.createElement("img");
    showImagen.src = "assets/images/img-" + imgActual + ".jpg"
    showImagen.classList.add("showImagen");
    //Creamos el boton para salir
    var close = document.createElement("span");
    var closeTxt = document.createTextNode('\u02DF');
    close.appendChild(closeTxt);
    close.classList.add("btn");
    close.classList.add("btnClose");
    close.onclick = function () {
        quit(this);
    }
    //Creamos un botón siguiente
    var siguiente = document.createElement("span");
    var siguienteTxt = document.createTextNode(">");
    siguiente.appendChild(siguienteTxt);
    siguiente.classList.add("btn");
    siguiente.classList.add("btnSiguiente");
    siguiente.onclick = function() {
        next(this);
    }
     // Creamos un botón para la imagen anterior
     var anterior = document.createElement("span");
     var anteriorTxt = document.createTextNode("<");
         anterior.appendChild(anteriorTxt);
         anterior.classList.add("btn");
         anterior.classList.add("btnAnterior");
         anterior.onclick = function(){
             back(this);
         }
    //Anidamos
    divImgIn.appendChild(showImagen)
    divImgIn.appendChild(close);
    divImgIn.appendChild(siguiente);
    divImgIn.appendChild(anterior);
    divImg.appendChild(divImgIn);
    section.appendChild(divImg);
}