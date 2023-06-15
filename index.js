const btnLeft = document.getElementById('btnLeft');
const btnRight = document.getElementById('btnRight');

const slide = document.getElementById('slide');

// const image1 = document.getElementById('img1');
// const image2 = document.getElementById('img2');
// const image3 = document.getElementById('img3');
// const image = document.getElementsByClassName('img');

const images = ['./imgs/img1.jpg','./imgs/img2.jpg','./imgs/img3.jpg'];

let active = 0;


btnLeft.onclick = function(){
    slide.src = images[0];
}

btnRight.onclick = function(){
    slide.src = images[1];
}
