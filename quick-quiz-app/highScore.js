const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
const highScoresList = document.getElementById("highScoresList");
const list = document.createElement("li");

highScoresList.innerHTML = highScores.map((score) => {
  return `<li class="high-score">${score.name} - ${score.score}</li>`;
}).join("");
