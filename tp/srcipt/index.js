let Over = document.querySelector('#overGame');
let scoreText = document.querySelector('#scoreText')
let again = document.querySelector('#again')
const select = document.querySelector("#select")
let randomTxt;
let time = 10;
let gameOver = false;
let score = 0
let level = "Easy"

const words = [
  "abreact",
  "abreacted",
  "abreacting",
  "abreaction",
  "abreactions",
  "paltrier",
  "paltriest",
  "paltrily",
  "paltriness",
  "paltrinesses",
  "paltry",
  "paludal",
  "paludism",
  "shiv",
  "shiva",
  "shivah",
  "shivahs",
  "shivaree",
  "shivareed",
  "shivareeing",
  "mellifluous",
  "plethora",
  "propinquity",
  "quintessential",
  "rejoinder",
  "resplendent",
  "sanguine",
  "serendipity",
  "supercilious",
  "ubiquitous",
  "abstemious",
  "adumbrate",
  "anfractuous",
  "antediluvian",
  "apothegm",
  "aspersion",
  "contumacious",
  "crepuscular",
  "defalcate",
  "defenestration",
];

const randomText = () => {
  const random = Math.floor(Math.random() * words.length);
  randomTxt = words[random];

  text.textContent = randomTxt;
};

const startGame = () => {
  time = 10;
  randomText();
};

startGame();

input.addEventListener("input", () => {
  const inputText = input.value.trim(); // Remove whitespace from beginning and end

  if (inputText === randomTxt) { // Check if input matches random text exactly
    randomText();
    input.value = "";
    score++;
    scoreText.textContent = score;
    if (level === "Easy") {
      time += 5;
      timeText.textContent += "+5";
    } else if (level === "Medium") {
      time += 3;
      timeText.textContent += "+3";
    } else if (level === "Hard") {
      time += 2;
      timeText.textContent += "+2";
    }
  }
});

// input.addEventListener("input", () => {
//   const inputText = input.value;

//   if (inputText == randomTxt) {
//     randomText();
//     input.value = ""
//     score++
//     scoreText.textContent = score
//   };
  
//   if (level === 'Easy') {
//     time += 5
//     timeText.textContent += "+5"
//   } else if (level === "Medium") {
//     time += 3
//     timeText.textContent += "+3"
//   } else if (level === "Hard") {
//     time += 2
//     timeText.textContent += "+2"
//   };
// });

setInterval(() => {
  if (time > 0) {
    time -= 1;

    timeText.textContent = time;
  } else if (time == 0 && !gameOver) {
    gameOver = true;
    Over.style.display = "";
  } else if (time==0) {
    resultGame.textContent= `${score}` 
  }
}, 1000);

Over.addEventListener("click", () => {
  gameOver = false;
  Over.style.display = "none";
  startGame();
});

again.addEventListener("click", () => {
  score = 0;
  scoreText.textContent = score;
});

select.addEventListener('change', ()=>{
    level = select.value
})
