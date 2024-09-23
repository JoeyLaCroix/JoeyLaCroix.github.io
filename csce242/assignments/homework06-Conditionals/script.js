
const btnsmall = document.getElementById("btn-small");
const btnmedium = document.getElementById("btn-medium");
const btnlarge = document.getElementById("btn-large");
const slider = document.getElementById("slider");
const text = document.getElementById("text");

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
  document.getElementById("img-small").style.display = "block";
}
btnmedium.onclick = () => {
  document.getElementById("img-large").style.display = "none";
  document.getElementById("img-medium").style.display = "block";
  document.getElementById("img-small").style.display = "none";
}
btnlarge.onclick = () => {
  document.getElementById("img-large").style.display = "block";
  document.getElementById("img-medium").style.display = "none";
  document.getElementById("img-small").style.display = "none";
}



slider.addEventListener('input', function() {
    const redValue = slider.value;
    document.body.style.backgroundColor = `rgb(${redValue}, 0, 0)`;
  
    if (redValue < 85) {
        text.innerHTML = "Your not warm yet!";
    } else if (redValue < 170) {
        message.innerHTML = "its heating up!";
    } else {
        message.innerHTML = "Your burning up!";
    }
});





