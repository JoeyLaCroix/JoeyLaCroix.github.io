const getFlavors = async() => {
    const url = "https://portiaportia.github.io/json/ice-creams.json";

    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showFlavors = async() => {
    const flavors = await getFlavors();
    flavors.forEach((flavor)=>{
        document.getElementById("icecream-menu").append(getFlavorSection(flavor));
    });
}

const getFlavorSection = (flavor) => {
    const section = document.createElement("section");
    section.classList.add("flavors");
    const h3 = document.createElement("h3");
    h3.innerHTML = flavor.name;
    let backgroundimg = document.createElement("img");
    backgroundimg = `https://portiaportia.github.io/json/images/ice-creams/${flavor.image}`;
    backgroundimg.alt = flavor.name;
    section.style.backgroundImage = `url('${backgroundimg}')`;
    
    section.append(h3);
    document.getElementById("icecream-menu").append(section);

    return section;
}

showFlavors();