
// start index for questions array;
let currentQuestionInd = 0

// variable decclartion
let globalTimer;
let highscore = [];

// ten seconds per question
let timer = questions.length * 10;

// manages timer throughout quiz
function startTimer() {
  globalTimer = setInterval(() => {
    timer--;
    document.getElementById('timer').textContent = timer;
    if (timer <= 0) {
      clearInterval(globalTimer);
      timer = 0;
      document.getElementById('timer').textContent = timer;
      gameOver();
    }

  }, 1000);
}

// change page elements when completing quiz
function endQuiz() {
  document.getElementById('title').textContent = 'All Done!';
  document.getElementById('prompt').textContent = `Your score is ${timer}!`;
  document.getElementById('btn-wrapper').innerHTML = ``;
  document.getElementById('subForm').style.visibility = 'visible';
}

// change page elements when time runs out
function gameOver() {
  document.getElementById('title').textContent = 'Game Over!';
  document.getElementById('btn-wrapper').innerHTML = `
  <div class="text-center">
   <a class="btn btn-primary btn-sm btn-center" href="./index.html" role="button" id='tryAgain'>Try Again</a>
   </div>`;
}

// add incorrect statement
function incStatement() {

  let incorrect = document.createElement('p');
  incorrect.innerHTML = `
      <hr>
      Incorrect!`;
  document.getElementById('btn-wrapper').append(incorrect);
  setTimeout(() => {
    incorrect.innerHTML = ``;
    document.getElementById('btn-wrapper').append(incorrect);
  }, 500);


}

// decrement timer
function loseTime() {
  if (!(event.target.id === 'submit' || event.target.id === 'clear' || event.target.id === 'addName' || event.target.id === 'goBack' || event.target.id === 'tryAgain' || event.target.value === questions[currentQuestionInd].answer)) {
    timer -= 10;

    incStatement();

  }
}


// recursively change questions 
function startQuiz() {

  document.getElementById('timer').textContent = timer;

  document.getElementById('title').textContent = questions[currentQuestionInd].prompt;
  document.getElementById('prompt').textContent = '';
  document.getElementById('btn-wrapper').innerHTML = ``;

  for (let i = 0; i < questions[currentQuestionInd].choices.length; i++) {

    let div = document.createElement('div');
    let button = document.createElement('button');
    button.classList = 'btn btn-outline-primary btn-sm btn-center mb-1';
    button.type = 'submit';
    button.value = `${questions[currentQuestionInd].choices[i]}`;
    button.textContent = `${questions[currentQuestionInd].choices[i]}`;

    document.getElementById('btn-wrapper').append(div);
    document.getElementById('btn-wrapper').append(button);

  }


  document.addEventListener('click', event => {
    if ((currentQuestionInd === questions.length)) {
      clearInterval(globalTimer);
      endQuiz();

    }
    else if (event.target.value === questions[currentQuestionInd].answer) {
      currentQuestionInd++;
      startQuiz();
    }

  })


}

// add name to scoreboard and update localStorage
function addName() {

  highscore.push({
    name: document.getElementById('highscoreLeaderBoard').value,
    score: `${timer}`
  });


  let newScore = document.createElement('li');
  newScore.textContent = `${highscore[highscore.length - 1].name}  ${highscore[highscore.length - 1].score}`;
  document.getElementById('leaderBoard').appendChild(newScore);
  localStorage.setItem(`${highscore[highscore.length - 1].name}`, `${highscore[highscore.length - 1].score}`);


}

// render local storage elements on page load
for (var i = 0, len = localStorage.length; i < len; ++i) {
  let userInit = localStorage.key(i);
  let userScore = localStorage.getItem(localStorage.key(i));
  let scoreListItem = document.createElement('li');
  scoreListItem.textContent = `${userInit} ${userScore}`;
  document.getElementById('leaderBoard').appendChild(scoreListItem);

}

// delete elements from local storage and render
function removeElems() {
  for (let i = 0, len = localStorage.length; i < len; ++i) {
    localStorage.removeItem(localStorage.key(i));
  }

  for (let i = 0, len = localStorage.length; i < len; ++i) {
    let userInit = localStorage.key(i);
    let userScore = localStorage.getItem(localStorage.key(i));
    let scoreListItem = document.createElement('li');
    scoreListItem.textContent = `${userInit} ${userScore}`;
    document.getElementById('leaderBoard').appendChild(scoreListItem);

  }
  if (localStorage.length === 0) {
    document.getElementById('leaderBoard').innerHTML = ``;
  }
}

// event listeners for specific buttons 
document.getElementById('submit').addEventListener('click', startQuiz);
document.getElementById('submit').addEventListener('click', startTimer);
document.getElementById('btn-wrapper').addEventListener('click', loseTime);
document.getElementById('addName').addEventListener('click', addName);
document.getElementById('clear').addEventListener('click', removeElems);