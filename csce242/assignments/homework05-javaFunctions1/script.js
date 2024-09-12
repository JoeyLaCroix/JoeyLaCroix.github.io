const rndmimg = document.getElementById("rndm-img");
const number = document.getElementById("number");
let number1 = 0;
const box = document.getElementById("box");
const slider = document.getElementById("slider");

rndmimg.onclick = () =>{
    location.reload();
 };

 number.onclick = () =>{
    number1++;
    document.getElementById("number").innerHTML = number1;
 };

 slider.oninput = function() {
   const sliderValue = slider.value;
   box.style.left = 'calc(50% + ${offset}px)';
};
 
 
