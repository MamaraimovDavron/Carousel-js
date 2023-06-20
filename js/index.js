const slide = document.getElementById('slide');
const previousButton = document.getElementsByClassName('carousel-control-prev');
const nextButton = document.getElementsByClassName('carousel-control-next');
// const imgs = ['../imgs/img1.jpg','../imgs/img2.jpg','../imgs/img3.jpg'];
const imgs = ['./imgs/img1.jpg','./imgs/img2.jpg','./imgs/img3.jpg'];
let active = 0;


const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');


function toLeft(){
    active--;
    if(active < 0) active = imgs.length - 1;
    slide.src = imgs[active];
    document.getElementById('number').innerHTML = active + 1;
    console.log('to left');
}

function toRight(){
    active++;
    if(active >= imgs.length) active = 0;
    slide.src = imgs[active];
    document.getElementById('number').innerHTML = active + 1;
    console.log('to right');
}


// const imgs = ['./imgs/img1.jpg','./imgs/img2.jpg','./imgs/img3.jpg'];


function clicked1() {
   document.getElementById('number').innerHTML = 1;
   document.getElementById('slide').src = imgs[0];
}

function clicked2() {
    document.getElementById('number').innerHTML = 2;
    document.getElementById('slide').src = imgs[1];
 }

 function clicked3() {
    document.getElementById('number').innerHTML = 3;
    document.getElementById('slide').src = imgs[2];
 }

 const btnGo = document.getElementById('go');
 const inputNumber = document.getElementById('inputNum');

 function clickInput () {
    if(inputNumber.value == 1){
        document.getElementById('number').innerHTML = 1;
        document.getElementById('slide').src = imgs[0]
    }

    if(inputNumber.value == 2){
        document.getElementById('number').innerHTML = 2;
        document.getElementById('slide').src = imgs[1]
    }

    if(inputNumber.value == 3){
        document.getElementById('number').innerHTML = 3;
        document.getElementById('slide').src = imgs[2]
    }
 }