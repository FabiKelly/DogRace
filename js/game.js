const dog = document.getElementById('dog');
const obstacle = document.getElementById('obstacle');
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
    }, 20);
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

    setTimeout(() => {
        document.getElementById('gameOver').style.display = 'none';
        if (score > highscore) {
            highscore = score;
            localStorage.setItem('highscore', highscore);
        }
        score = 0;
        document.getElementById('score').textContent = score;
        obstaclePosition = 510;
    }, 5000);
}

let obstaclePosition = 510;

function moveObstacle() {
    obstaclePosition -= 10;
    obstacle.style.left = obstaclePosition + "px";

    if (obstaclePosition < 0) {
        obstaclePosition = 510;
        updateScore();
    }

    if (obstaclePosition > 50 && obstaclePosition < 100 && !jumping) {
        resetGame();
    } else {
        setTimeout(moveObstacle, 50);
    }
}

moveObstacle();
