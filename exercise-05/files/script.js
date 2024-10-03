let paddle = document.getElementById("paddle");
let ball = document.getElementById("ball");
let scoreDisplay = document.getElementById("score");
let gameContainer = document.getElementById("game-container");
let score = 0;
let ballSpeed = 5;
let paddleSpeed = 20;

document.addEventListener("keydown", movePaddle);

function movePaddle(e) {
  let paddleLeft = paddle.offsetLeft;

  if (e.key === "ArrowLeft" && paddleLeft > 0) {
    paddle.style.left = paddleLeft - paddleSpeed + "px";
  } else if (
    e.key === "ArrowRight" &&
    paddleLeft + paddle.offsetWidth < gameContainer.offsetWidth
  ) {
    paddle.style.left = paddleLeft + paddleSpeed + "px";
  }
}

function dropBall() {
  let ballTop = ball.offsetTop;
  let ballLeft = ball.offsetLeft;
  let paddleLeft = paddle.offsetLeft;
  let paddleTop = paddle.offsetTop;

  if (
    ballTop + ball.offsetHeight >= paddleTop &&
    ballLeft + ball.offsetWidth >= paddleLeft &&
    ballLeft <= paddleLeft + paddle.offsetWidth
  ) {
    ballSpeed += 0.5;
    score += 10;
    scoreDisplay.innerText = "Score: " + score;
    resetBall();
  } else if (ballTop + ball.offsetHeight >= gameContainer.offsetHeight) {
    alert("Game Over! Your Score: " + score);
    score = 0;
    ballSpeed = 5;
    scoreDisplay.innerText = "Score: " + score;
    resetBall();
  } else {
    ball.style.top = ballTop + ballSpeed + "px";
    requestAnimationFrame(dropBall);
  }
}

function resetBall() {
  ball.style.top = "0px";
  ball.style.left =
    Math.random() * (gameContainer.offsetWidth - ball.offsetWidth) + "px";
  requestAnimationFrame(dropBall);
}

resetBall();
