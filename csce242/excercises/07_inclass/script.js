const btn = document.getElementById("go");
const start = parseInt(document.getElementById("start").value);
const end = parseInt(document.getElementById("end").value);
const ul = document.getElementById("list");

//Print out the numbers starting at the start value and ending at the end value.

btn.onclick = () => {
  
    for (let i = start; i <= end; i++) {
        const li = document.createElement('li');
        li.innerHTML = i+1;
        ul.append(li);  
        li.setAttribute("id", "li" +1);
        
    }
};


