const startBtn = document.getElementById("start_game");
const wordLocation = document.getElementById("word");
const resultPara = document.getElementById("result");
const inputedWord = document.querySelector("input");
const submitBtn = document.getElementById("submit");
const score = document.getElementById("score");
const guessedWord = document.getElementById("inputed_word");

var wordRandomlySelected;
let realWord;
let points = 0;
let counter = 0;
let wordList = [
  "javascript",
  "python",
  "express",
  "java",
  "css",
  "good",
  "rust",
  "tree",
  "name",
  "work",
  "animal",
  "cat",
  "tiger",
  "elephant",
  "lion",
  "peacock",
  "dog",
  "deer",
  "laptop",
  "computer",
  "monkey",
  "mobile",
  "marble",
  "monster",
  "miracle",
];

startBtn.addEventListener("click", () => {
  inputWord();
});

submitBtn.addEventListener("click", () => {
  checkWord();
});

inputedWord.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    checkWord();
  }
});

function inputWord() {
  let c = 0;
  let wordListLength = wordList.length;
  resultPara.innerText = ``;
  wordRandomlySelected = wordList[Math.floor(Math.random() * wordListLength)];
  let wordLength = wordRandomlySelected.length;
  realWord = wordRandomlySelected;
  console.log(wordRandomlySelected);
  let jumbeledWord = [];
  c = wordLength;
  for (let i = 0; i < wordLength; i++) {
    let randomNumber = Math.floor(Math.random() * c);
    jumbeledWord.push(wordRandomlySelected[randomNumber]);
    wordRandomlySelected = wordRandomlySelected.replace(
      wordRandomlySelected[randomNumber],
      ""
    );
    c--;
  }
  let jumbeledString = jumbeledWord.join("");
  console.log(jumbeledString.length);
  wordLocation.innerText = jumbeledString;
  startBtn.textContent = "Next Word";
  guessedWord.innerHTML = ``;
}

function checkWord() {
  let userInputedWord = inputedWord.value;

  // if (wordLocation.textContent === userInputedWord) {
  //   resultPara.innerText = `YOU WON`;
  if (realWord === userInputedWord) {
    resultPara.innerText = `YOU WON`;
    points++;
    score.innerText = points;
    inputedWord.value = "";
    guessedWord.innerHTML = ``;
  } else if (userInputedWord === "") {
    guessedWord.innerText = `Enter the word`;
  } else {
    // resultPara.innerText = `Sorry Wrong Word, correct word is "${realWord}"`;
    guessedWord.innerHTML = ``;
    if (counter === 0) {
      for (let m = 0; m < realWord.length; m++) {
        if (realWord[m] === userInputedWord[m]) {
          console.log(`${userInputedWord[m]} word is correct`);
          //guessedWord.style.height = `400px`;
          guessedWord.innerHTML += `<p id="para1">${userInputedWord[m]}
        </p>`;
        } else {
          console.log(`${userInputedWord[m]} word is incorrect`);
          //guessedWord.style.height = `400px`;
          guessedWord.innerHTML += `<p id="para2">${userInputedWord[m]}
        </p>`;
        }
      }
      resultPara.innerText = `Last chance`;
      counter++;
    } else {
      resultPara.innerText = `Sorry Wrong Word, correct word is "${realWord}"`;
      counter = 0;
      inputedWord.value = "";
    }
  }
}
