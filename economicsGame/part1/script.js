const game = document.getElementById('game');
const start = document.getElementById('start');
const facts = document.getElementById('facts');

const getShocks = async() => {
    const url = "shocks.json";
    try{
        const response = await fetch(url);
        return response.json();
    } catch(error){
        console.log(error);
    }
};

const factors = [
    {
        title: 'RGDP',
    },
    {
        title: 'Inflation',
    },
    {
        title: 'Unemployment',
    }
];

startButton.onclick = () => {
start.classList.toggle("hidden");
game.classList.toggle("hidden");
}


factors.forEach(async (factor, index) => {
const section = document.createElement('section');
section.classList.add('factor');
section.id = "factor";
const h1 = document.createElement('h1');

let value = document.createElement('p');
const shocks = await getShocks();
const Ieffect = shocks.Ieffect ? getRandomValue(shocks.Ieffect) : 0;
const Reffect = shocks.Reffect ? getRandomValue(shocks.Reffect) : 0;
const Ueffect = shocks.Ueffect ? getRandomValue(shocks.Ueffect) : 0;
value.innerHTML = `RGDP: ${Ieffect} Inflation: ${Reffect} Unemployment: ${Ueffect}`;
alert(value);

section.append(h1);
section.append(value);
facts.append(section);

h1.innerHTML = factor.title;
});

