const shocksdesc = [];
const shocks = [];

const getShocks = async() => {
    const url = "https://JoeyLaCroix.github.io/economicsGame/part1/shocks.json";

    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const showShocks = async() => {
    const shocks = await getShocks();
    shocks.forEach((shock)=>{
        document.getElementById("information").append(getShocksSection(shock));
    });
};

const getShocksSection = (shock) => {
   const h3 = document.createElement("h3");
   const p = document.createElement("p");
   for(let i=0;i<shocks.length;i++)
   {
       shocks.push(shock[i].title);
   }
   for(let i=0;i<shocks.length;i++)
   {
       shocksdesc.push(shock[i].description);
   }
    
   h3.innerHtml = shock.title;
   p.innerHtml = shock.description;


 return section;
};

startButton.onclick = () => {
start.classList.toggle("hidden");
game.classList.toggle("hidden");
}

let period=document.getElementById('period');
let temp = 0;
const shock = document.getElementById('information');
let RGDP = document.getElementById('RGDP');
let RGDPValue = parseFloat(RGDP.textContent);
let Inflation = document.getElementById('Inflation');
let InflationValue = parseFloat(Inflation.textContent);
let Unemployment = document.getElementById('Unemployment');
let UnemploymentValue = parseFloat(Unemployment.textContent);
let allInflation = [];

const periodChange = () => {
        temp++
       period.innerHTML = temp;
       if(temp>=2&&temp<=3)
       {
        shock.classList.toggle("hidden");
        let randomNumber = Math.random();
        let max = 2.5;
        let randomInteger = Math.floor(Math.random() * max);
        const shockbio = document.getElementById('shockbio');
        shockbio.innerHTML = randomInteger+randomNumber;

       }

       if(temp>20)
       {
        temp=0;
        period.innerHTML = temp;
        start.classList.toggle("hidden");
        game.classList.toggle("hidden");
       }
}

const RGDPChange = () => {
    
}

const InflationChange = () => {
    allInflation.push(InflationValue);
    for(let i=0;i<allInflation.length;i++)
    {
    }

    if(RGDPValue>7)
    {
        InflationValue = InflationValue +0.3;
        InflationValue = InflationValue - 0.1;
    }
    else if(RGDPValue>=4&&RGDPValue<=7)
    {
        InflationValue = InflationValue +0.2;
        InflationValue = InflationValue - 0.1;
    }
    else if(RGDPValue>=0&&RGDPValue<=1.9)
    {
        InflationValue = InflationValue - 0.1;
        InflationValue = InflationValue - 0.1;
    }
    else if(RGDPValue>=-2&&RGDPValue<=0)
    {
        InflationValue = InflationValue - 0.2;
        InflationValue = InflationValue - 0.1;
    }
    else if(RGDPValue<-2){
        InflationValue = InflationValue - 0.3;
        InflationValue = InflationValue - 0.1;
    }
    else{
        InflationValue = InflationValue - 0.1;
    }
   
    let RoundedNumber = Math.round(InflationValue * 10) / 10;
    Inflation.innerHTML = RoundedNumber+"%";
}

const UnemploymentChange = () => {
    let oldRGDP = RGDPValue;
    if(RGDPValue > oldRGDP)
    {
        UnemploymentValue = UnemploymentValue - (((RGDPValue-oldRGDP)/2));
    }
    else if(RGDPValue < oldRGDP)
    {
        UnemploymentValue = UnemploymentValue + (((oldRGDP-RGDPValue)/2));
    }
    else{
        UnemploymentValue = UnemploymentValue;
    }
    let RoundedNumber = Math.round(UnemploymentValue * 10) / 10;
    Unemployment.innerHTML = RoundedNumber+"%";
}

const button1 = document.getElementById('button1');
button1.onclick = () => {
    periodChange();
    InflationChange();
    UnemploymentChange();
}
const button2 = document.getElementById('button2');
button2.onclick = () => {
    periodChange();
    InflationChange();
}
const button3 = document.getElementById('button3');
button3.onclick = () => {
    periodChange();
    UnemploymentChange();
}
const button4 = document.getElementById('button4');
button4.onclick = () => {
    periodChange();
}



