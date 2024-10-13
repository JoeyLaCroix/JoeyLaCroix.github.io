//VODKA
const getVodka = async() => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=vodka";

    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showVodka = async() => {
    const vodkas = await getVodka();
    vodka.forEach((vodka)=>{
        document.getElementById("cocktails").append(getVodkaSection(vodka));
    });
};
//TEQUILA
const getTequila = async() => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=tequila";

    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showTequila = async() => {
    const tequilas = await getVodka();
    tequilas.forEach((tequila)=>{
        document.getElementById("cocktails").append(getTequilaSection(tequila));
    });
};
//RUM
const getRum = async() => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=rum";

    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showRum = async() => {
    const rums = await getVodka();
    rums.forEach((rum)=>{
        document.getElementById("cocktails").append(getRumSection(rum));
    });
};
//GIN
const getGin = async() => {
    const url = "https://www.thecocktaildb.com/api/json/v1/1/search.php?s=gin";

    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showGin = async() => {
    const gins = await getVodka();
    gins.forEach((gin)=>{
        document.getElementById("cocktails").append(getGinSection(gin));
    });
};

const getVodkaSection = (vodka) => {
    const section = document.createElement("section");
    section.classList.add("columns");
    const h3 = document.createElement("h3");
    h3.innerHTML = vodka.strDrink;
    const p = document.createElement("p");
    p.innerHTML = vodka.strInstructions;
    const backgroundimg = document.createElement("img");
    backgroundimg.src = vodka.strDrinkThumb;
    section.style.backgroundImage = `url(${vodka.strDrinkThumb})`;

    section.append(h3);
    section.append(p);
    document.getElementById("cocktails").append(section);
}
showVodka();