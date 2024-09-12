const doStuff = () =>{
    alert("Hello World");
};

const myButton = document.getElementById("btn-click");
const myButton1 = document.getElementById("btn-click1");
const myButton2 = document.getElementById("btn-click2");

myButton.onclick = () =>{
   document.getElementById("message").innerHTML = "Hello Everyone";
   document.getElementById("stuff").classList.add("special");
};

myButton1.onclick = () =>{
    document.getElementById("message").innerHTML = "Goodbye";
    document.getElementById("stuff").classList.remove("special");
 };

 myButton2.onclick = () =>{
    document.getElementById("one").classList.add('hide');
 };
//Add a second button, called say goodbye
//when clicked change the text to goodbye everyone, and remove the special styles

