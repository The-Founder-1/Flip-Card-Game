const p = document.querySelectorAll("p");
const redScorce = document.querySelector(".red");
const blueScore = document.querySelector(".blue");
const h3 = document.querySelector("h3");
const button = document.querySelector("button");
const btn = document.querySelector(".reload");
const body = document.body;
const resetBtn = document.querySelector(".reset-btn");
let red, blue;

function soundForCardPlay() {
  let play = new Audio("mixkit-arrow-whoosh-1491.wav");
  play.volume = 10000;
  play.play();
}
function soundForCardPause() {
  let play = new Audio("mixkit-arrow-whoosh-1491.wav");
  play.pause();
}
function soundForReset() {
  let reset = new Audio("mixkit-retro-game-notification-212.wav");
  reset.volume = 10;
  reset.play();
}

p.forEach((item) => {
  let i = Math.floor(Math.random() * p.length);
  red = 0;
  blue = 0;

  if (item) {
    item.innerText = i;

    if (i % 2 == 0) {
      item.addEventListener("click", () => {
        item.style.transform = "rotateY(360deg)";
        item.style.color = "white";
        item.style.backgroundColor = "blue";
        blue++;
        blueScore.innerText = blue;
        soundForCardPlay();
      });
    }
    if (i % 2 != 0) {
      item.addEventListener("click", () => {
        item.style.transform = "rotateY(360deg)";
        item.style.color = "white";
        item.style.backgroundColor = "red";
        red++;
        redScorce.innerText = red;
        soundForCardPlay();
      });
    }
    button.addEventListener("click", () => {
      soundForReset();
      if (red > blue) {
        setTimeout(() => {
          h3.innerText = "Your guess is bad";
        }, 5000);
      }
      if (red < blue) {
        setTimeout(() => {
          h3.innerText = "Your guess is good";
        }, 5000);
      }
      if (red == 0 && blue == 0) {
        setTimeout(() => {
          h3.innerText = "please attempt the game.";
        }, 5000);
      }
      if (red && blue > p.length) {
        setTimeout(() => {
          h3.innerText = "Your result is not accurate";
        }, 5000);
      }
      if (red == blue) {
        h3.innerText = "Try Again";
      }
    });
  }

  resetBtn.addEventListener("click", () => {
    let i = Math.floor(Math.random() * p.length);
    red = 0;
    blue = 0;
    item.style.backgroundColor = "green";
    item.style.transform = "rotateY(0deg)";
    item.style.color = "transparent";
    blueScore.innerText = 0;
    redScorce.innerText = 0;

    if (item) {
      item.innerText = i;

      if (i % 2 == 0) {
        item.addEventListener("click", () => {
          item.style.transform = "rotateY(360deg)";
          item.style.color = "white";
          blue++;
          item.style.backgroundColor = "blue";
          blueScore.innerText = blue;

          soundForCardPlay();
        });
      }

      if (i % 2 != 0) {
        item.addEventListener("click", () => {
          item.style.transform = "rotateY(360deg)";
          item.style.color = "white";
          item.style.backgroundColor = "red";
          red++;
          redScorce.innerText = red;

          soundForCardPlay();
        });
      }
    }
  });
});
