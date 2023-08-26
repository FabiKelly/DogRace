let container = document.querySelector(".container");
let dog = document.querySelector("#dog");
let obstaculo = document.querySelector("#obstaculo");
let score = document.querySelector("#score");
let gameOver = document.querySelector("#gameOver");

let intervalo = null;
let playerScore = 0;

let contagemScore = ()=> {
    playerScore++;
    score.innerHTML = `Score <b>${playerScore}</b>`;
}

//start game
window.addEventListener("keydown" , (start) => {
//    console.log(start);
    if(start.code == "Space") {
        gameOver.style.display = "none";
        obstaculo.classList.add("obstaculoActive");

        let playerScore = 0;
        intervalo = setInterval(contagemScore, 200);
    }
});

//jump
window.addEventListener("keydown" , (e) => {
//    console.log(e);

    if(e.key == "ArrowUp")
        if(dog.classList != "dogActive") {
            dog.classList.add("dogActive");

//            remove class after 0.5 seconds
            setTimeout(() => {
                dog.classList.remove("dogActive");
            },500);
        }
});

//game over
let resultado = setInterval(() => {
    let botaoDog = parseInt(getComputedStyle(dog).getPropertyValue("botao"));
    //    console.log("botaoDog" + "botaoDog");

    let obstEsquerda = parseInt(getComputedStyle(obstaculo).getPropertyValue("esquerda"));
    //    console.log("obstEsquerda" + "obstEsquerda");

    if (botaoDog <= 90 && obstEsquerda >= 20 && obstEsquerda <= 145) {
        //   console.log("Game Over");

        gameOver.style.display = "obstaculo";
        obstaculo.classList.remove("obstaculoActive");
        clearInterval(intervalo);
        playerScore = 0;
    }
}, 10);
