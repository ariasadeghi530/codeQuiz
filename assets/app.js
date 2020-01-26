let wrongStatement = document.createElement('p');
wrongStatement.className = "text-secondary";
wrongStatement.textContent = ` Incorrect!`;
let questionOneCond = true;
let questionTwoCond = false;
let questionThreeCond = false;


document.addEventListener('click', function (event) {

  //start quiz
  if (event.target.id === 'submit') {
    document.getElementById('title').textContent = 'Question 1';
    document.getElementById('prompt').textContent = 'What is a javascript?';
    document.getElementById('btn-wrapper').innerHTML = ` 
    <div>
        <button class="btn btn-outline-primary btn-sm btn-center mb-1" type="submit" value="1">1: Beep boop</button>
        </div>
    <div>
        <button class="btn btn-outline-primary btn-sm btn-center mb-1" type="submit" value="2">2: Meep moop</button>
        </div>
    <div>
        <button class="btn btn-outline-primary btn-sm btn-center mb-1" type="submit" value="3">3. dee doo</button>
        </div>
    <div id="bottom">
        <button class="btn btn-outline-primary btn-sm btn-center mb-1" type="submit" value="4">4. Pee poo</button>
        </div>
      
    `
  }

    

    if ((event.target.value === '1' || event.target.value === '2' || event.target.value === '3') && questionOneCond)  {
      console.log(event.target.value);
      document.getElementById('bottom').appendChild(wrongStatement);

    }


    if ((event.target.value === '4') && questionOneCond) {
      questionOneCond = false;
      questionTwoCond = true;
      document.getElementById('title').textContent = 'Question 2';
      document.getElementById('prompt').textContent = 'What is not javascript?';
      document.getElementById('btn-wrapper').innerHTML = ` 
    <div>
        <button class="btn btn-outline-primary btn-sm btn-center mb-1" type="submit" value="1">1: meep boop</button>
        </div>
    <div>
        <button class="btn btn-outline-primary btn-sm btn-center mb-1" type="submit" value="2">2: beep moop</button>
        </div>
    <div>
        <button class="btn btn-outline-primary btn-sm btn-center mb-1" type="submit" value="3">3. deet doot</button>
        </div>
    <div id="bottom">
        <button class="btn btn-outline-primary btn-sm btn-center mb-1" type="submit" value="4">4. Peep poo</button>
        </div>
      
    `

    }
  
  
  if ((event.target.value === '1' || event.target.value === '3' || event.target.value === '4') && questionTwoCond) {
     document.getElementById('bottom').appendChild(wrongStatement);

  }
  if ((event.target.value === '2') && questionTwoCond) {
    questionTwoCond = false;
    questionThreeCond = true;
    document.getElementById('title').textContent = 'Question 3';
    document.getElementById('prompt').textContent = 'What is not not javascript?';
    document.getElementById('btn-wrapper').innerHTML = ` 
    <div>
        <button class="btn btn-outline-primary btn-sm btn-center mb-1" type="submit" value="1">1: meep boop</button>
        </div>
    <div>
        <button class="btn btn-outline-primary btn-sm btn-center mb-1" type="submit" value="2">2: beep moop</button>
        </div>
    <div>
        <button class="btn btn-outline-primary btn-sm btn-center mb-1" type="submit" value="3">3. deet doot</button>
        </div>
    <div id="bottom">
        <button class="btn btn-outline-primary btn-sm btn-center mb-1" type="submit" value="4">4. Peep poo</button>
        </div>
      
    `
  }
  
})

