let firstPlayerName = "";
let secondPlayerName = "";
let firstPlayerScore = 0;
let secondPlayerScore = 0;
let totalScore = 0;

window.onload = function(){
  document.getElementById("reset").style.display = "none";
}
function onSubmit(event) {
    
   event.preventDefault();
  const formData = document.getElementsByTagName("input");
  
  firstPlayerName = formData[2].value;
  secondPlayerName = formData[3].value;
  totalScore = formData[4].value;
  document.getElementById("reset").style.display = "flex";
  document.getElementById("form-container").style.display = "none";
  document.getElementById("board-container").style.display = "block";
  document
    .getElementById("player1")
    .getElementsByClassName("heading")[0].innerHTML = firstPlayerName;
  document
    .getElementById("player2")
    .getElementsByClassName("heading")[0].innerHTML = secondPlayerName;
}

function rollDice(playerIndex) {
  const randomNumber = getRandom();
  const playerNodes = document.getElementById(`player${playerIndex}`);
  playerNodes
    .querySelector(".dice img")
    .setAttribute("src", `https://raw.githubusercontent.com/geeksterin/AdvancedFrontendOct21/master/DiceGame/images/dice${randomNumber}.png`);
  switch (playerIndex) {
    case 1:
      firstPlayerScore += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        firstPlayerScore;
      playerNodes
        .getElementsByTagName("input")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("player2")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
      break;
    case 2:
      secondPlayerScore += randomNumber;
      playerNodes.getElementsByClassName("score")[0].innerHTML =
        secondPlayerScore;
      playerNodes
        .getElementsByTagName("input")[0]
        .setAttribute("disabled", true);
      document
        .getElementById("player1")
        .getElementsByTagName("input")[0]
        .removeAttribute("disabled");
      break;
    default:
      break;
  }
  checkIfWinnerExists();
}

function getRandom() {
  return Math.floor(Math.random() * 6) + 1;
}

function checkIfWinnerExists() {
  if (firstPlayerScore >= totalScore) {
    document.getElementById(
      "player1"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("player2")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
  }
  if (secondPlayerScore >= totalScore) {
    document.getElementById(
      "player2"
    ).innerHTML += `<div class="winner"></div>`;
    document
      .getElementById("player1")
      .getElementsByTagName("input")[0]
      .setAttribute("disabled", true);
  }
}
function reset(){
  event.preventDefault();
  firstPlayerScore = 0;
  secondPlayerScore = 0;
  document.querySelectorAll(".score")[0].innerHTML = "0";
  document.querySelectorAll(".score")[1].innerHTML = "0";
    document
      .getElementById("player1")
      .getElementsByTagName("input")[0]
      .disabled = false;
      document
      .getElementById("player2")
      .getElementsByTagName("input")[0]
      .disabled = false;
      if (document.querySelector(".winner") != null) {
        document.querySelector(".winner").remove(this);
      } 
}
function restart(){
  window.location.reload();
}