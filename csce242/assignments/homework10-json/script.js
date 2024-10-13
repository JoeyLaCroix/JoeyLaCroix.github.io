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
    const p = document.createElement("p");
    p.innerHTML = flavor.brand;
    const backgroundimg = document.createElement("img");
    backgroundimg.src = 'https://portiaportia.github.io/json/images/ice-creams/'+jpgflavor.image;
    section.append(backgroundimg);
   
    
    section.append(h3);
    section.append(p);
    document.getElementById("icecream-menu").append(section);

    return section;
}

showFlavors();