var imgs = document.querySelector('.slide');
var slide = imgs.getBoundingClientRect();
var tm = 0;

setInterval(() => {
    tm = tm - 100;
    imgs.style.marginLeft = `${tm}%`
    
 if(tm == -300){
     tm = 0;
     imgs.style.marginLeft = '0';
    }
},10000)