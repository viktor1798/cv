let i=1, count=3;

function imgSlide(){
    if(i > count){
        i =1
    }
    slider.src =`images/autor${i++}.png`
    setTimeout(imgSlide,3000);
}
