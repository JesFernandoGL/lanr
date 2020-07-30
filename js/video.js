var videos = document.getElementsByClassName("video");

for(var i = 0;i < videos.length; i++){
   videos[i].addEventListener("mouseover",play); 
}
for(var i = 0;i < videos.length; i++){
    videos[i].addEventListener("mouseout",parar);
}



function parar(){
    this.pause();
};

function play(){
    this.play();
};
