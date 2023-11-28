const dog = document.getElementById('dog');
const obstacle = document.getElementById('obstaculo');
const restartButton = document.getElementById('restartButton'); // Adicionado o botão de reiniciar

let jumping = false;

document.addEventListener('keydown', (event) => {
    if (event.keyCode === 32 && !jumping) {
        jump();
    }
});

function jump() {
    jumping = true;
    let jumpHeight = 0;
    let jumpCount = 0;

    let jumpInterval = setInterval(() => {
        if (jumpCount < 15) {
            jumpHeight += 5;
            jumpCount++;
        } else if (jumpCount < 30) {
            jumpHeight -= 5;
            jumpCount++;
        } else {
            clearInterval(jumpInterval);
            jumping = false;
        }
        dog.style.bottom = (20 + jumpHeight) + "px";
    }, 30);
}

let score = 0;
let highscore = localStorage.getItem('highscore') || 0;
document.getElementById('highscore').textContent = highscore;

function updateScore() {
    score += 5;
    document.getElementById('score').textContent = score;
    if (score > highscore) {
        highscore = score;
        localStorage.setItem('highscore', highscore);
        document.getElementById('highscore').textContent = highscore;
    }
}

function resetGame() {
    document.getElementById('gameOver').style.display = 'block';

    document.getElementById('gameOver').innerHTML = 'Game Over <br> <button id="restartButton" onclick="restartGame()">Reiniciar</button>';

    document.getElementById('restartButton').style.display = 'block';

    setTimeout(() => {
        document.getElementById('gameOver').style.display = 'none';
        if (score > highscore) {
            highscore = score;
            localStorage.setItem('highscore', highscore);
        }
        score = 0;
        document.getElementById('score').textContent = score;
        
        obstaclePosition = window.innerWidth;
    }, 500000);
}

function restartGame() {

    document.getElementById('gameOver').style.display = 'none';

    score = 0;
    document.getElementById('score').textContent = score;

    obstaclePosition = window.innerWidth;
    obstacle2Position = window.innerWidth;

    moveObstacle2();
    moveObstacle();
}

// obstáculos

let obstaclePosition = window.innerWidth;

function moveObstacle() {
    obstaclePosition -= 11;
    obstacle.style.left = obstaclePosition + "px";

    if (obstaclePosition < 0) {
        obstaclePosition = window.innerWidth;
        updateScore();
    }

    if (obstaclePosition > 50 && obstaclePosition < 100 && !jumping) {
        resetGame();
    } else {
        setTimeout(moveObstacle, 50);
    }
}

moveObstacle();

const obstacle2 = document.getElementById('obstaculo2');

let obstacle2Position = window.innerWidth; // Inicia fora da tela à direita

function moveObstacle2() {
    obstacle2Position -= 8;
    obstacle2.style.left = obstacle2Position + "px";

    if (obstacle2Position < 0) {
        obstacle2Position = window.innerWidth; // Reposiciona o obstáculo à direita
        updateScore();
    }

    if (obstacle2Position > 50 && obstacle2Position < 100 && !jumping || obstaclePosition > 50 && obstaclePosition < 100 && !jumping) {
        resetGame();
    } else {
        setTimeout(moveObstacle2, 50);
    }
}

moveObstacle2();

//nuvens

const cloud = document.getElementById('nuvem');

let cloudPosition = window.innerWidth; // Inicia fora da tela à direita

function moveCloud() {
    cloudPosition -= 7;
    cloud.style.left = cloudPosition + "px";

    if (cloudPosition < -100) {
        cloudPosition = window.innerWidth; // Reposiciona a nuvem à direita
    }

    setTimeout(moveCloud, 50);
}

moveCloud();

const cloud2 = document.getElementById('nuvem2');

let cloud2Position = window.innerWidth; // Inicia fora da tela à direita

function moveCloud2() {
    cloud2Position -= 10;
    cloud2.style.left = cloud2Position + "px";

    if (cloud2Position < -100) { // Ajuste conforme necessário para o tamanho da nuvem
        cloud2Position = window.innerWidth; // Reposiciona a nuvem à direita
    }

    setTimeout(moveCloud2, 50);
}

moveCloud2();

const cloud3 = document.getElementById('nuvem3');

let cloud3Position = window.innerWidth; // Inicia fora da tela à direita

function moveCloud3() {
    cloud3Position -= 9;
    cloud3.style.left = cloud3Position + "px";

    if (cloud3Position < -100) { // Ajuste conforme necessário para o tamanho da nuvem
        cloud3Position = window.innerWidth; // Reposiciona a nuvem à direita
    }

    setTimeout(moveCloud3, 50);
}

moveCloud3();

const cloud4 = document.getElementById('nuvem4');

let cloud4Position = window.innerWidth; // Inicia fora da tela à direita

function moveCloud4() {
    cloud4Position -= 13;
    cloud4.style.left = cloud4Position + "px";

    if (cloud4Position < -100) { // Ajuste conforme necessário para o tamanho da nuvem
        cloud4Position = window.innerWidth; // Reposiciona a nuvem à direita
    }

    setTimeout(moveCloud4, 50);
}

moveCloud4();
