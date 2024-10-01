//every one second go through and move the class of highlighted through the gallery

/*
setInterval(()=>{
    let currentSection = document.querySelector(".items section.highlighted");

    if(currentSection == null) {
        document.querySelector(".items section").classList.add("highlighted");
        return;
    }

    let nextSection = currentSection.nextElementSibling;

    if(nextSection == null){
        nextSection = document.querySelector(".items section");
    }

    currentSection.classList.remove("highlighted");
    nextSection.classList.add("highlighted");


},500);
*/

let count = 1;

setInterval(()=>{
    document.querySelectorAll(".items section").forEach((section)=>{
        section.classList.remove("highlighted");
    });

    document.querySelector(`.items section:nth-child(${count})`).classList.add("highlighted");

    count++;

    if(count > document.querySelectorAll(".items section").length){
        count = 1;
    }

},500);

