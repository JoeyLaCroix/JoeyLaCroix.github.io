let number = document.getElementById("input").value;
const btn = document.getElementById("draw");
const p = document.getElementById("error");
const screen = document.getElementById("screen");

function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');
    star.style.width = '20px'; 
    star.style.height = '20px';
    star.style.backgroundColor = 'yellow';
    star.style.clipPath = 'polygon(50% 0%, 61% 35%, 98% 35%, 68% 57%, 79% 91%, 50% 70%, 21% 91%, 32% 57%, 2% 35%, 39% 35%)';
    star.style.position = 'absolute';
    const x = Math.random() * (screen.clientWidth - 20);
    const y = Math.random() * (screen.clientHeight - 20); 
    star.style.left = `${x}px`;
    star.style.top = `${y}px`;
    return star;
}

btn.onclick = () =>{
    number = document.getElementById("input").value;
    if(number<0){
        p.innerHTML = "Please enter a positive number";
    }
    else if(number>0)
    {
        p.innerHTML = "";
        for (let i = 0; i < number; i++) {
            const star = createStar();
            screen.appendChild(star);
        }
    }
    else{
        p.innerHTML = "Please enter a number";
    }
};

