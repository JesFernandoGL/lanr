var myIndex = 0;
var x = document.getElementsByClassName("mySlides");
var textoCarousel = document.getElementsByClassName("cont_desc_img_carousel");
var imgCarr = document.getElementsByClassName("img_carrousel");
var btnCarr = document.getElementsByClassName("btn_carousel");
var btnCarrAct = document.getElementsByClassName("btn_carousel_activo_Prin");

for (var i = 0; i < x.length; i++) {
  x[i].style.display = "none";
};


carousel();

function carousel() {
  var i;  
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";  
  btnCarrAct[0].classList.remove("btn_carousel_activo_Prin");
  btnCarr[myIndex-1].classList.add("btn_carousel_activo_Prin");
  //setTimeout(carousel, 5000);
}

var intCarrP = setInterval(carousel,5000);

   
  for (var i = 0; i < x.length; i++) {
    x[i].addEventListener("mouseover", entrada);
    x[i].addEventListener("mouseout", salida)}

    for (var i = 0; i < textoCarousel.length; i++) {
      textoCarousel[i].style.opacity="0%";
    }

    function entrada(){
      for (var i = 0; i < textoCarousel.length; i++) {
        textoCarousel[i].style.opacity="100%";
        
      }for(var i = 0;i < imgCarr.length; i++){
        imgCarr[i].style.opacity="80%";
      }
      clearInterval(intCarrP);
    }

    function salida(){
      for (var i = 0; i < textoCarousel.length; i++) {
        textoCarousel[i].style.opacity="0%";
        x[i].style.opacity="100%"
      }for(var i = 0;i < imgCarr.length; i++){
        imgCarr[i].style.opacity="100%";
      }
      intCarrP = setInterval(carousel,5000);

    }


btnCarr[0].addEventListener("click", Ind1)

function Ind1(){
  myIndex = 0;
  carousel();
  resetInterval();
  
};

btnCarr[1].addEventListener("click", Ind2)

function Ind2(){
  myIndex = 1;
  carousel();
  resetInterval();
};

btnCarr[2].addEventListener("click", Ind3)

function Ind3(){
  myIndex = 2;
  carousel();
  resetInterval();
};

btnCarr[3].addEventListener("click", Ind4)

function Ind4(){
  myIndex = 3;
  carousel();
  resetInterval();
};



function resetInterval(){
  clearInterval(intCarrP);
  intCarrP = setInterval(carousel,5000);  
}