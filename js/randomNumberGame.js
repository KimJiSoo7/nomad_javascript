const scopeNumber = document.body.querySelector(".guess #randomScope");
const yourNumber = document.body.querySelector(".guess #inputNumber");
const btnPlay = document.body.querySelector(".guess #btn")
const divResult = document.body.querySelector(".result");
const summary = document.body.querySelector(".result #summary");
const yourResult = document.body.querySelector(".result #yourResult");

function playGame(){
    if(divResult.style.display === "none"){
        divResult.style.display = "block";
    }

    const yourInput = parseInt(yourNumber.value);
    const randomNuber = Math.floor(Math.random() * (parseInt(scopeNumber.value)+ 1));
    summary.textContent =`You chose: ${yourNumber.value}, the machine chose:${randomNuber}`;
    if(yourInput === randomNuber){
        yourResult.textContent = "You won!"
    }else{
        yourResult.textContent = "You lost!"
    }

    console.log(summary.textContent);
    console.log(yourResult.textContent);
}

btnPlay.addEventListener("click", playGame)