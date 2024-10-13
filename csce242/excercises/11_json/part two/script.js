const getBreweries = async () => {
    const url = "https://api.openbrewerydb.org/breweries";
    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};
const showBreweries = async () => {
    const breweries = await getBreweries();
    breweries.forEach((brewery)=>{
        document.getElementById("breweries-section").append(getBrewerySection(brewery));
    });
};
const getBrewerySection = (brewery) => {
    const section = document.createElement("section");
    section.classList.add("brewery");
    const h3 = document.createElement("h3");
    h3.innerHTML = brewery.name;
    //create an anchor tag for the h3 that links to the breweries website
    const a = document.createElement("a");
    a.href = brewery.website_url;
    a.innerHTML = h3.innerHTML;
    h3.innerHTML = "";
    h3.appendChild(a);

    const p = document.createElement("p");
    p.innerHTML = brewery.city;
    const ul = document.createElement("ul");
    const li = document.createElement("li");
    li.innerHTML = "Type:" + brewery.brewery_type;
    ul.append(li);

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.google.com/maps/embed/v1/place?q=${brewery.latitude},${brewery.longitude}&key=YOUR_API_KEY`;

    section.append(h3);
    section.append(p);
    section.append(ul);
    section.append(iframe);
    return section;
};

//show all of the breweries when the page loads
showBreweries();