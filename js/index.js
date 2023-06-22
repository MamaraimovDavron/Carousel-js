const slide = document.getElementById('slide');
const previousButton = document.getElementsByClassName('carousel-control-prev');
const nextButton = document.getElementsByClassName('carousel-control-next');
// const imgs = ['../imgs/img1.jpg','../imgs/img2.jpg','../imgs/img3.jpg'];
const imgs = ['./imgs/img1.jpg','./imgs/img2.jpg','./imgs/img3.jpg','./imgs/img4.jpg','./imgs/img5.jpeg','./imgs/img6.jpg'];
let active = 0;


const btnOne = document.getElementById('btn-one');
const btnTwo = document.getElementById('btn-two');
const btnThree = document.getElementById('btn-three');


const btnGo = document.getElementById('go');
const inputNumber = document.getElementById('inputNum');

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


 function clickInput () {
    for(let i = 1; i <= imgs.length; i++){
        // if(inputNumber.value !== i){
        //     alert('OOps');
        //     break;
        // }
        // else{
        //     document.getElementById('number').innerHTML = i;
        //     document.getElementById('slide').src = imgs[i - 1];
        // }
        // console.log(i);
        // console.log(inputNumber.value);
        // if(inputNumber.value !== i){
        //     // alert("OOps you chose wrong number!");
        //     // break;
        //     console.log(false);
        //     // break;
        // }
        // else{
        //     console.log(true);
        //     break;
        // }
        
        if(inputNumber.value == i){
            document.getElementById('number').innerHTML = i;
            document.getElementById('slide').src = imgs[i - 1];
        }

        // if(inputNumber.value !== i){
        //     alert('oops');
        //     break;
        // }

       
        
        
    }

    // if((inputNumber.value != 3) && (inputNumber.value != 1) && (inputNumber.value != 2)){
    //     alert('Ooops you chose wrong number!');
    // }

    // if(inputNumber.value == 1){
    //     document.getElementById('number').innerHTML = 1;
    //     document.getElementById('slide').src = imgs[0]
    // }

    // if(inputNumber.value == 2){
    //     document.getElementById('number').innerHTML = 2;
    //     document.getElementById('slide').src = imgs[1]
    // }

    // if(inputNumber.value == 3){
    //     document.getElementById('number').innerHTML = 3;
    //     document.getElementById('slide').src = imgs[2]
    // }

    
 }

 const btnLeftTwo = document.getElementById('leftTwo');
 const btnRightTwo = document.getElementById('rightTwo');
 let something = document.getElementById('something');

 function clickTwoTimesLeft() {
    // for(let i = 1; i <= imgs.length; i++){
    //     if((document.getElementById('number').innerHTML = i) && (document.getElementById('slide').src = imgs[i-1])){
    //         document.getElementById('number').innerHTML = Math.abs(i - 2);
    //         document.getElementById('slide').src = Math.abs(imgs[i - 1]);
    //     }
    // }
    // if((document.getElementById('number').innerHTML = 1) && (document.getElementById('slide').src = imgs[0])){
    //     document.getElementById('number').innerHTML = 2;
    //     document.getElementById('slide').src = imgs[1];
    // }

    // else if((document.getElementById('number').innerHTML = 3) && (document.getElementById('slide').src = imgs[2])){
    //     document.getElementById('number').innerHTML = 1;
    //     document.getElementById('slide').src = imgs[0];
    // }

    // else if((document.getElementById('number').innerHTML = 2) && (document.getElementById('slide').src = imgs[1])){
    //     document.getElementById('number').innerHTML = 3;
    //     document.getElementById('slide').src = imgs[2];
    // }

    active -= 2;
    if(active < 0) active = imgs.length - 1;
    slide.src = imgs[active];
    document.getElementById('number').innerHTML = active + 1;
    console.log('to left');
  }

 function clickTwoTimesRight() {
    active += 2;
    if(active >= imgs.length) active = 0;
    slide.src = imgs[active];
    document.getElementById('number').innerHTML = active + 1;
    
}

