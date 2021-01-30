const boxes = document.querySelectorAll(".box");
const s = document.querySelector(".rgbspan");
const colors = generateRandomColor(6);
const pickedColor = colors[Math.floor(Math.random() * 6)];
s.textContent = pickedColor;
const playbtn = document.querySelector("#playAgain");
const easyBtn = document.querySelector("#easyBtn");
const hardBtn = document.querySelector("#hardBtn");
const boxCount = 6;
const statusText = document.querySelector(".status");
statusText.textContent = "Let's Play!!";

easyBtn.addEventListener("click", function () {
  document.querySelector("h1").style.background = "rgb(233, 119, 119)";

  statusText.textContent = "Let's Play!!";

  boxCount = 3;
  this.style.background = "rgb(233, 119, 119)";
  this.style.color = "white";
  hardBtn.style.background = "white";
  hardBtn.style.color = "rgb(233, 119, 119)";

  colors = generateRandomColor(boxCount);
  pickedColor = colors[Math.floor(Math.random() * 3)];
  s.textContent = pickedColor;

  for (let i = 0; i < boxes.length; i++) {
    if (colors[i]) {
      boxes[i].style.background = colors[i];
    } else {
      boxes[i].style.display = "none";
    }
  }
});

hardBtn.addEventListener("click", function () {
  document.querySelector("h1").style.background = "rgb(233, 119, 119)";

  statusText.textContent = "Let's Play!!";

  this.style.background = "rgb(233, 119, 119)";
  this.style.color = "white";
  easyBtn.style.background = "white";
  easyBtn.style.color = "rgb(233, 119, 119)";

  boxCount = 6;
  colors = generateRandomColor(boxCount);
  pickedColor = colors[Math.floor(Math.random() * 6)];
  console.log(boxes.length);
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.background = colors[i];
    boxes[i].style.display = "block";
  }
});

playbtn.addEventListener("click", function () {
  document.querySelector("h1").style.background = "rgb(233, 119, 119)";

  statusText.textContent = "Let's Play!!";

  colors = generateRandomColor(boxCount);
  pickedColor = colors[Math.floor(Math.random() * boxCount)];
  s.textContent = pickedColor;
  for (let i = 0; i < boxes.length; i++) {
    boxes[i].style.background = colors[i];
  }
});

for (let i = 0; i < colors.length; i++) {
  boxes[i].style.background = colors[i];
  boxes[i].addEventListener("click", function () {
    let selectedColor = this.style.background;
    console.log(selectedColor);
    console.log(pickedColor);
    if (selectedColor === pickedColor) {
      win();
    } else {
      loose(this);
    }
  });
}

function win() {
  for (let i = 0; i < colors.length; i++) {
    boxes[i].style.background = pickedColor;
  }
  document.querySelector("h1").style.background = pickedColor;

  statusText.textContent = "Correct!!";
}

function loose(a) {
  console.log(a);
  a.style.background = "#2f2f2f";
  statusText.textContent = "Try Again!";
}

function generateRandomColor(num) {
  const arr = [];
  for (let i = 0; i < num; i++) {
    arr.push(randomColor());
  }
  return arr;
}

function randomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
