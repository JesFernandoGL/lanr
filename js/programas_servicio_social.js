var btnServicio = document.getElementsByClassName("btn_colab");
var progServicio = document.getElementsByClassName("programas");
const linkIng = document.getElementById("linkIngenierias");
const linkInd = document.getElementById("linkIndustrial");
const linkGra = document.getElementById("linkGrafico");
const linkPsi = document.getElementById("linkPsicologia");

linkIng.addEventListener("click", function(){
    progServicio[0].classList.add("desplegar");
    progServicio[1].classList.add("desplegar");
    progServicio[2].classList.add("desplegar");
});

linkInd.addEventListener("click", function(){
    progServicio[3].classList.add("desplegar");
});

linkGra.addEventListener("click", function(){
    progServicio[4].classList.add("desplegar");

});

linkPsi.addEventListener("click", function(){
    progServicio[5].classList.add("desplegar");
    progServicio[6].classList.add("desplegar");
    progServicio[7].classList.add("desplegar");

});

//-----------------------------------------

function mostrar(){
    progServicio[0].classList.toggle("desplegar");
    progServicio[1].classList.toggle("desplegar");
    progServicio[2].classList.toggle("desplegar");
}

btnServicio[0].onclick=function(){mostrar()};

function mostrar1(){
    progServicio[3].classList.toggle("desplegar");
}

btnServicio[1].onclick=function(){mostrar1()};

function mostrar2(){
    progServicio[4].classList.toggle("desplegar");
}

btnServicio[2].onclick=function(){mostrar2()};

function mostrar3(){
    progServicio[5].classList.toggle("desplegar");
    progServicio[6].classList.toggle("desplegar");
    progServicio[7].classList.toggle("desplegar");
}

btnServicio[3].onclick=function(){mostrar3()};