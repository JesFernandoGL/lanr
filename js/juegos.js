
var cajaInfo = document.getElementsByClassName("caja_info");
var imgGaleria = document.getElementsByClassName("img_galeria");
var imgPrincipal = document.getElementsByClassName("img_principal_galeria");
var juego = document.getElementsByClassName("juego");
var contJuegos = document.querySelector('.cont_juegos_pagina');

//--------------Galeria juego Charlie--------//
function verImagen1(){
    imgPrincipal[0].src = this.src;
};

for(var i = 0; i < 5; i++){
    imgGaleria[i].addEventListener("click", verImagen1);
}
//--------------Galeria juego Penal--------//
function verImagen2(){
    imgPrincipal[1].src = this.src;
};

for(var i = 5; i < 10; i++){
    imgGaleria[i].addEventListener("click", verImagen2);
}
//--------------Galeria juego Topocrisis--------//
function verImagen3(){
    imgPrincipal[2].src = this.src;
};

for(var i = 10; i < 15; i++){
    imgGaleria[i].addEventListener("click", verImagen3);
}
//--------------Galeria juego Sandwichmania--------//
function verImagen4(){
    imgPrincipal[3].src = this.src;
};

for(var i = 15; i < 20; i++){
    imgGaleria[i].addEventListener("click", verImagen4);
}
//--------------Terappia VR--------//
function verImagen5(){
    imgPrincipal[4].src = this.src;
};

for(var i = 20; i < 25; i++){
    imgGaleria[i].addEventListener("click", verImagen5);
}

//--------------abrir información------------------//


/*caja1*/
function abrir1(){
    for(var i=0;i < cajaInfo.length;i++){
        cajaInfo[i].classList.remove("mostrar");
    }
    imgPrincipal[0].src="img/charlie/1.png";
    cajaInfo[0].classList.add("mostrar");
    galeria();

}
juego[0].onclick=function(){abrir1()};

function cerrar1(){
cajaInfo[0].classList.remove("mostrar");
galeria();
}
document.getElementsByClassName("btn_cerrar")[0].onclick=function(){cerrar1()};

/*caja2*/ 
function abrir2(){
    for(var i=0;i < cajaInfo.length;i++){
        cajaInfo[i].classList.remove("mostrar");
    }
    imgPrincipal[1].src="img/penal/1.png";
    cajaInfo[1].classList.add("mostrar");
    galeria();
}
juego[1].onclick=function(){abrir2()};

function cerrar2(){
cajaInfo[1].classList.remove("mostrar");
galeria();
}
document.getElementsByClassName("btn_cerrar")[1].onclick=function(){cerrar2()};

/*caja3*/ 
function abrir3(){
    for(var i=0;i < cajaInfo.length;i++){
        cajaInfo[i].classList.remove("mostrar");
    }
    imgPrincipal[2].src="img/topo/1.png";
    cajaInfo[2].classList.add("mostrar");
    galeria();
}
juego[2].onclick=function(){abrir3()};

function cerrar3(){
cajaInfo[2].classList.remove("mostrar");
galeria();
}
document.getElementsByClassName("btn_cerrar")[2].onclick=function(){cerrar3()};
/*caja4*/ 
function abrir4(){
    for(var i=0;i < cajaInfo.length;i++){
        cajaInfo[i].classList.remove("mostrar");
    }
    imgPrincipal[3].src="img/sandwich/1.png";
    cajaInfo[3].classList.add("mostrar");
    galeria();
}
juego[3].onclick=function(){abrir4()};

function cerrar4(){
cajaInfo[3].classList.remove("mostrar");
galeria();
}
document.getElementsByClassName("btn_cerrar")[3].onclick=function(){cerrar4()};
/*caja5*/ 
function abrir5(){
    for(var i=0;i < cajaInfo.length;i++){
        cajaInfo[i].classList.remove("mostrar");
    }
    imgPrincipal[4].src="img/vr/1.png";
    cajaInfo[4].classList.add("mostrar");
    galeria();
}
juego[4].onclick=function(){abrir5()};

function cerrar5(){
cajaInfo[4].classList.remove("mostrar");
galeria();
}
document.getElementsByClassName("btn_cerrar")[4].onclick=function(){cerrar5()};






//------------Reacomodo de juegos --------------//

function galeria(){
    for(var i = 0; i < cajaInfo.length;i++)    
    if(cajaInfo[i].classList.contains("mostrar")){
        for(var i=0;i < juego.length; i++){
            juego[i].classList.add("reduccion_juegos");
            contJuegos.classList.add("reduccion_contenedor");
        }}else{
            juego[i].classList.remove("reduccion_juegos");
            contJuegos.classList.remove("reduccion_contenedor");
        }
};

