const toggleNav = () => {
    document.getElementById("main-items").classList.toggle("hidden");
}

window.onload = () => {
    document.getElementById("nav-toggle").onclick = toggleNav;
}

const getSurfers = async() => {
    const url = "JoeyLaCroix.github.io/csce242/projects/part four/surfers.json";

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
    section.classList.add("surfer");
    const h3 = document.createElement("h3");
    const p = document.createElement("p");

    h3.innerHTML = surfer.name;
    p.innerHTML = surfer.bio;

    section.append(h3);
    section.append(p);
    document.getElementById("main-surf-list").append(section);
};
