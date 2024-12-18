const toggleNav = () => {
    document.getElementById("main-items").classList.toggle("hidden");
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
}

const getSurfers = async() => {
    const url = "https://joeylacroix.github.io/csce242/projects/part%20four/surfers.json";

    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showShurfers = async() => {
    const surfers = await getSurfers();
    surfers.forEach((surfer)=>{
        document.getElementById("main-surf-list").append(getSurfersSection(surfer));
    });
};

const getSurfersSection = (surfer) => {
    const section = document.createElement("section");
    section.classList.add("surfers");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");
    const h4 = document.createElement("h4");
    const img = document.createElement("img");
    const h4t = document.createElement("h4");

    img.src = "images/"+surfer.img_name;
    h4.innerHTML = surfer.hometown;
    h4t.innerHTML = "Surf Type: "+surfer.surftype;
    h3.innerHTML = surfer.name;
    p.innerHTML = surfer.bio;

    section.append(img);
    section.append(h3);
    section.append(h4);
    section.append(h4t);
    section.append(p);
    
    return section;
};

showShurfers();

document.getElementById("contactUsForm").onsubmit = (e) => {
    e.preventDefault();//dont refresh page

    const form = e.target;

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const surferr = form.elements["surfer?"].value;
    const message = form.elements["message"].value;

    console.log(`${name} is a ${surferr} with a message of ${message} and email is ${email}`);
    const message1 = document.getElementById("contactUsMessage");
    message1.classList.toggle("hidden");

   
};

