var timer = 6;
var score = 0;
var hitrn = 0;

// Get New Hit
function getNewHit() {
  hitrn = Math.floor(Math.random() * 10);
  document.querySelector("#hitval").textContent = hitrn;
}

// Timer Counter
function timerCounter() {
  var timerid = setInterval(function () {
    if (timer > 0) {
      timer--;
      document.querySelector("#timerval").textContent = timer;
    } else {
      clearInterval(timerid);
      document.querySelector("#pbtm").innerHTML = `<h1>Game Over</h1>`;

    }
  }, 1000);
}

// Increase Score
function increaseScore() {
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

// Random Number Generator
function randomNumberGenerator() {
  var clutter = "";

  for (var i = 1; i <= 114; i++) {
    var rn = Math.floor(Math.random() * 10);
    clutter += `<div class="bubble">${rn}</div>`;
  }

  document.querySelector("#pbtm").innerHTML = clutter;
}

document.querySelector("#pbtm").addEventListener("click", function (dets) {
  var clickedNumber = Number(dets.target.textContent);
  if (clickedNumber === hitrn) {
    increaseScore();
    randomNumberGenerator();
    getNewHit();
  }
});

// Main Function
getNewHit();
timerCounter();
increaseScore();
randomNumberGenerator();
