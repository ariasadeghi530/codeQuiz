let currentQuestionInd = 0

let globalTimer;
let highscore = [];
//let isIncorrect = false;

let timer = questions.length * 10;


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


function endQuiz() {
  document.getElementById('title').textContent = 'All Done!';
  document.getElementById('prompt').textContent = `Your score is ${timer}!`;
  document.getElementById('btn-wrapper').innerHTML = ``;
  document.getElementById('subForm').style.visibility = 'visible';
}


function gameOver() {
  document.getElementById('title').textContent = 'Game Over!';
  document.getElementById('btn-wrapper').innerHTML = `
  <div class="text-center">
   <a class="btn btn-primary btn-sm btn-center" href="./index.html" role="button" id='tryAgain'>Try Again</a>
   </div>`;
}

function loseTime() {
  if  (!(event.target.id === 'submit' || event.target.value === questions[currentQuestionInd].answer)) {
    timer -= 10;
    
    //MAKE CHANGES HERE
    
    // let incorrect = document.createElement('p');
    // incorrect.innerHTML = `
    //   <hr>
    //   Incorrect!`;
    // document.getElementById('btn-wrapper').append(incorrect);
    
  }
}


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
    if ((currentQuestionInd === questions.length - 1)) {
      clearInterval(globalTimer);
      endQuiz();

    }
    else if (event.target.value === questions[currentQuestionInd].answer) {
      currentQuestionInd++;
      startQuiz();
    }

  })


}

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

for (var i = 0, len = localStorage.length; i < len; ++i) {
  let userInit = localStorage.key(i);
  let userScore = localStorage.getItem(localStorage.key(i));
  let scoreListItem = document.createElement('li');
  scoreListItem.textContent = `${userInit} ${userScore}`;
  document.getElementById('leaderBoard').appendChild(scoreListItem);

}
function removeElems(){
  for (let i = 0, len = localStorage.length; i < len; ++i){
    localStorage.removeItem(localStorage.key(i));
  }

  for (let i = 0, len = localStorage.length; i < len; ++i) {
    let userInit = localStorage.key(i);
    let userScore = localStorage.getItem(localStorage.key(i));
    let scoreListItem = document.createElement('li');
    scoreListItem.textContent = `${userInit} ${userScore}`;
    document.getElementById('leaderBoard').appendChild(scoreListItem);

  }
}

document.getElementById('submit').addEventListener('click', startQuiz);
document.getElementById('submit').addEventListener('click', startTimer);
document.getElementById('btn-wrapper').addEventListener('click', loseTime);
document.getElementById('addName').addEventListener('click', addName);
document.getElementById('clear').addEventListener('click', removeElems);