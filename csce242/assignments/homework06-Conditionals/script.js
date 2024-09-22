
const btn = document.getElementById("btn")

document.getElementById("ass-1").addEventListener("click", function(){
  document.getElementById("slider").style.display = "block";
  document.getElementById("images").style.display = "none";
});
document.getElementById("ass-2").addEventListener("click", function(){
  document.getElementById("slider").style.display = "none";
  document.getElementById("images").style.display = "block";
});

btn.onclick = () =>{
  
  if(btn.innerHTML=="Small"){
  document.getElementById("img-small").style.display = "block";
  document.getElementById("img-medium").style.display = "none";
  document.getElementById("img-large").style.display = "none";
  }
  else if(btn.innerHTML=="Medium"){
    document.getElementById("img-small").style.display = "none";
    document.getElementById("img-medium").style.display = "block";
    document.getElementById("img-large").style.display = "none";
    }
    else if(btn.innerHTML=="Large"){
      document.getElementById("img-small").style.display = "none";
      document.getElementById("img-medium").style.display = "none";
      document.getElementById("img-large").style.display = "block";
      }
}


/*btnlarge.onclick = () =>{
  document.getElementById("img-large").style.display = "block";
  document.getElementById("img-medium").style.display = "none";
  document.getElementById("img-small").style.display = "none";
}
btnmedium.onclick = () =>{
  document.getElementById("img-medium").style.display = "block";
  document.getElementById("img-small").style.display = "none";
  document.getElementById("img-large").style.display = "none";
}
btnsmall.onclick = () =>{
  document.getElementById("img-small").style.display = "block";
  document.getElementById("img-medium").style.display = "none";
  document.getElementById("img-large").style.display = "none";
}*/




