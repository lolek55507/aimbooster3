const ticking = new Audio('ticking.mp3');
const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const orange = document.getElementById('orange');
const startButton = document.getElementById('startButton');
let untillNextCircleTimmer = 5000;
let canvasWidth = 500;
let canvasHeight = 500;
let orangeHeight = canvasWidth * 0.1;
let orangeWidth = canvasHeight * 0.1;
let orangeCoordinatesY = Math.floor(Math.random() * (canvasHeight - orangeHeight));
let orangeCoordinatesX = Math.floor(Math.random() * (canvasWidth - orangeWidth));
const scoreContainer = document.getElementById('Score');
const timeContainer = document.getElementById('Timmer');
const popA = document.getElementById('popA');
const popB = document.getElementById('popB');

let score = 0;
let Timmer = 60;

canvas.width = canvasWidth;
canvas.height = canvasHeight;

canvas.onclick = function(e) {
    let rect = canvas.getBoundingClientRect();
    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
    
    
    if (
        mouseX >= orangeCoordinatesX  &&
        mouseX <= orangeCoordinatesX + orangeWidth &&
        mouseY >= orangeCoordinatesY &&
        mouseY <= orangeCoordinatesY + orangeHeight
    ) {
        orangeCoordinatesY = Math.floor(Math.random() * (canvasHeight - orangeHeight));
        orangeCoordinatesX = Math.floor(Math.random() * (canvasWidth - orangeWidth));
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        score++;
        scoreContainer.innerText = score;
        canvas.width = canvasWidth;
        ctx.fillStyle = 'orange';
        ctx.drawImage(orange, orangeCoordinatesX, orangeCoordinatesY, orangeWidth, orangeHeight);
    }
};

startButton.addEventListener('click', startGame);

function startGame() {
    startButton.removeEventListener('click', startGame);
    canvas.style.opacity = '1';
    scoreContainer.style.opacity = '0';
    startButton.style.opacity = '0';
    popA.style.opacity = '0';
    score = 0;
    let decInterval = setInterval(deacreaseTimmer, 1000);
    drawCircle();
    setTimeout(() => {
        orangeCoordinatesY = Math.floor(Math.random() * (canvasHeight - orangeHeight));
        orangeCoordinatesX = Math.floor(Math.random() * (canvasWidth - orangeWidth));
        Timmer = 60;
        timeContainer.innerText = Timmer + ' sec';
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        clearInterval(decInterval); // Clear the previous interval
        scoreContainer.style.opacity = '1';
    startButton.style.opacity = '1';
    popA.style.opacity = '1';
    canvas.style.opacity = '0';
    startButton.addEventListener('click', startGame);
    }, 60000);
}

function drawCircle() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    canvas.width = canvasWidth;
    ctx.fillStyle = 'orange';
    ctx.drawImage(orange, orangeCoordinatesX, orangeCoordinatesY, orangeWidth, orangeHeight);
}

function deacreaseTimmer() {
    Timmer--;
    timeContainer.innerText = Timmer + ' sec';
    ticking.play();
}

    


 