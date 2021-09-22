const body = document.querySelector("body");
const toggle = document.querySelector(".toggle");
const input = document.querySelector(".input");
const h1 = document.querySelector(".title");
const btn = document.querySelector(".use-speech");

const recognition = new window.webkitSpeechRecognition();

input.checked = false;

function indicateMode(message){
    const utterance = new SpeechSynthesisUtterance();
    console.log(utterance);
    utterance.volume = 1;
    utterance.rate = 1;
    utterance.text = message;
    speechSynthesis.speak(utterance);
}

function setDarkMode(){
    body.style.backgroundColor = "var(--bg-dark)";
    body.style.backgroundImage = "var(--fg-dark)";
    body.style.color = "var(--clr-primary-dark)";
    btn.style.setProperty("--bg","var(--clr-primary-dark)");
    btn.style.setProperty("--fg","var(--bg-light");
    toggle.style.backgroundColor = "#7e45fa";
    h1.innerHTML = "Dark Mode";
}

function setLightMode(){
    body.style.backgroundColor = "var(--bg-light)";
    body.style.backgroundImage = "var(--fg-light)";
    body.style.color = "var(--clr-primary-light)";
    btn.style.setProperty("--bg","var(--clr-primary-light)");
    btn.style.setProperty("--fg","var(--bg-light");
    toggle.style.backgroundColor = "#dedede";
    h1.innerHTML = "Light Mode";
}

recognition.onresult = (event)=>{
    const getModeText = event.results[0][0].transcript;
    if(getModeText.includes("dark mode")){
        setDarkMode();
        input.checked = true;
        indicateMode("Dark Mode enabled");
    }
    else{
        setLightMode();
        input.checked = false;
        indicateMode("Light Mode enabled");
    }
    // console.log(event);
}

input.addEventListener("change",()=>{
    if(input.checked === true){
        setDarkMode();
    }
    else{
        setLightMode();
    }
});

btn.addEventListener("click",()=>{
    console.log("inside btn func");
    recognition.start();
})