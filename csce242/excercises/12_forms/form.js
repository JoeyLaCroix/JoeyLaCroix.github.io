document.getElementById("form-raccoon").onsubmit = (e) => {
    e.preventDefault();//dont refresh page

    const form = e.target;

    const raccoonName = form.elements["raccoon-name"].value;
    const demeanor = form.elements["demeanor"].value;
    const termChecked = form.elements["terms"].checked;
    const size = getRadioValue("size");

    console.log(`${raccoonName} is a ${size} racoon with a ${demeanor} demeanor`)
};

const getRadioValue = (radioName) => {
    const radios = document.getElementsByName(radioName);
    for(let i in radios){
        if(radios[i].checked){
            return radios[i].value;
        }
    }

    return "";
};