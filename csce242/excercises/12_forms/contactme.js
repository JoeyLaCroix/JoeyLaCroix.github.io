
    const sendEmail = async (json) => {
    
        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                headers:{
                    "Content-Type":"application/json",
                    Accept:"application/json"
                },
                body:json
            });
    
            return response;
        } catch(error){
            console.log(error);
            result.innerHTML = "Sorry, your email couldn't be sent";
        }
            
    };

    documentgetElementById("contact-form").onsubmit = (e) => {
        e.preventDefault();//dont refresh page
        const form = e.target;
        const formData = new FormData(form);
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
        const result = document.getElementById("result");
        result.innerHTML = "Sending...";
        
        const 
     
    }