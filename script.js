let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newBtn = document.querySelector("#new-btn");
let megContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;
let count = 0;

let winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];

const resetGame = () => {
  turnO = true;
  count = 0;
  enabledBoxed();
  megContainer.classList.add("hide");
};

boxes.forEach((box) => {
  box.addEventListener("click", () => {
    if (turnO) {
      box.innerText = "O";
      turnO = false;
    } else {
      box.innerText = "X";
      turnO = true;
    }
    box.disabled = true;

    count++;
    checkWinner();
  });
});

const disabledBoxed = () => {
  for (let box of boxes) {
    box.disabled = true;
  }
};

const enabledBoxed = () => {
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
};

const showWinner = (winner) => {
  msg.innerText = `congratulations, winner is ${winner}`;
  megContainer.classList.remove("hide");
  disabledBoxed();
};

const showDraw = () => {
  msg.innerHTML = `It's a Draw! No winner this time.`;
  megContainer.classList.remove("hide");
};

const checkWinner = () => {
  for (let patterns of winPatterns) {
    let posVal1 = boxes[patterns[0]].innerText;
    let posVal2 = boxes[patterns[1]].innerText;
    let posVal3 = boxes[patterns[2]].innerText;

    if (posVal1 != "" && posVal2 != "" && posVal3 != "") {
      if (posVal1 === posVal2 && posVal2 === posVal3) {
        showWinner(posVal1);
      }
    }
  }
  if (count === 9) {
    showDraw();
  }
};

const isDraw = newBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
