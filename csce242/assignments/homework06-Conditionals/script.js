
const btnsmall = document.getElementById("btn-small");
const btnmedium = document.getElementById("btn-medium");
const btnlarge = document.getElementById("btn-large");
const slider = document.getElementById("slider1");
const text = document.getElementById("text");
const sliderbox = document.getElementById("slider");


const toggleNav = () => {
  document.getElementById("main-items").classList.toggle("hidden");
}

window.onload = () => {
  document.getElementById("nav-toggle").onclick = toggleNav;
}


document.getElementById("ass-1").addEventListener("click", function(){
  document.getElementById("slider").style.display = "block";
  document.getElementById("images").style.display = "none";
});
document.getElementById("ass-2").addEventListener("click", function(){
  document.getElementById("slider").style.display = "none";
  document.getElementById("images").style.display = "block";
});


btnsmall.onclick = () => {
  document.getElementById("img-large").style.display = "none";
  document.getElementById("img-medium").style.display = "none";
  document.getElementById("img-small").style.display = "inline";
}
btnmedium.onclick = () => {
  document.getElementById("img-large").style.display = "none";
  document.getElementById("img-medium").style.display = "inline";
  document.getElementById("img-small").style.display = "none";
}
btnlarge.onclick = () => {
  document.getElementById("img-large").style.display = "inline";
  document.getElementById("img-medium").style.display = "none";
  document.getElementById("img-small").style.display = "none";
}



slider.addEventListener('input', function() {
    const redValue = slider.value;
    sliderbox.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
  
    if (redValue < 85) {
        text.innerHTML = "Your not warm yet!";
    } else if (redValue < 170) {
        text.innerHTML = "its heating up!";
    } else {
        text.innerHTML = "Your burning up!";
    }
});





