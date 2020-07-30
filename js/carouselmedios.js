var artIndex = 0;
var circulo = document.getElementsByClassName("boton");
var circuloActivo = document.getElementsByClassName("btn_carousel_activo");

carouselmedios();

function carouselmedios(){
    var art = document.getElementsByClassName("cont_art");
    for(var i=0; i < art.length;i++){
        art[i].style.display="none";
    }
    if(artIndex > art.length-1){
        artIndex = 0
    };
    if(artIndex < 0){
        artIndex = x.length-1
    };
    var menos = artIndex-1;
    var mas = artIndex+1;
    if(menos < 0){
        menos = art.length-1
    };
    if(mas > art.length-1){
        mas = 0
    };
   
    art[artIndex].style.left="0%";
    art[artIndex].style.display="block";
    art[artIndex].style.opacity="100%";
    art[mas].style.left="100%";
    art[mas].style.display="block";
    art[menos].style.left="-100%";
    art[mas].style.opacity="0%";
    art[menos].style.opacity="0%";
    art[menos].style.display="block";

    circuloActivo[0].classList.remove("btn_carousel_activo");
    circulo[artIndex].classList.add("btn_carousel_activo");

   

};

var int = setInterval(siguiente,9000);

function siguiente(){
    artIndex = artIndex+1;
    carouselmedios();
};

//reset timer

function resetTimer(){
    clearInterval(int);
    int = setInterval(siguiente,9000);

}

//funciones botones//

circulo[0].addEventListener("click", pt1);

function pt1(){
    artIndex = 0;
    carouselmedios();
    resetTimer();
}

circulo[1].addEventListener("click", pt2);

function pt2(){
    artIndex = 1;
    carouselmedios();
    resetTimer();
}

circulo[2].addEventListener("click", pt3);

function pt3(){
    artIndex = 2;
    carouselmedios();
    resetTimer();
}

circulo[3].addEventListener("click", pt4);

function pt4(){
    artIndex = 3;
    carouselmedios();
    resetTimer();
}

circulo[4].addEventListener("click", pt5);

function pt5(){
    artIndex = 4;
    carouselmedios();
    resetTimer();
}