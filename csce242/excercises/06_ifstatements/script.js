/* When the hamburger is clicked, toggle between showing
and hiding the nav items */
//document.getElementById("toggle-nav")
document.querySelector("#toggle-nav").onclick = () => {
    document.getElementById("nav-items").classList.toggle("hidden-small");
};

/* Don't go to links desitination when clicked */
document.getElementById("click-link").onclick = (event) => {
    event.preventDefault(); //don't go to the links destination
    console.log("you clicked a link");
};

/* Change the ball color */
document.getElementById("txt-color").onchange = (e) => {
    //document.getElementById("ball").style.setProperty("background-color", e.target.value);
    document.querySelector(":root").style.setProperty("--ball-color", e.target.value);
};

/* Move the ball down when the button is clicked */
let pos = 0;
document.getElementById("move-down").onclick = () => {
    pos++;
    document.getElementById("ball").style.setProperty("top", pos + "px");
};

/*Show Color message*/
document.getElementById("btn-show-color").onclick = () => {
    const color = document.getElementById("txt-enter-color").value.toLowerCase().trim();
    const messageP = document.getElementById("color-message");
    let mood = "";

    if(color == "red"){
        mood = "angry";
    }
    else if(color == "blue"){
        mood = "moody";
    }
    else{
        mood = "undefined";
    }

    messageP.inerHTML = `You chose ${color} so you are ${mood}`;
}

/*Donations*/
/*Get the number
if it is not a number or it is negative show an error in the eror
Otherwise First show the percent our of 10000
Next show a visual representation with a box and a gradient*/
document.getElementById("btn-donate").onclick = () => {
    const donation = document.getElementById("txt-donations").value;
    const errorP = document.getElementById("error-donation");
    const percentP = document.getElementById("donation-percent");
    const box = document.getElementById("donation-percent");

    if(isNaN(donation) || donation < 0){
        errorP.innerHTML = "Please enter a positive number";
    }
    else{
        errorP.innerHTML = "";
        const percent = donation / 10000 * 100;
        percentP.innerHTML = `You have donated ${percent}% of our goal`;
        box.style.setProperty("background", `linear-gradient(to right, #00ff00 ${percent}%, #ffffff ${percent}%)`);
    }

};
