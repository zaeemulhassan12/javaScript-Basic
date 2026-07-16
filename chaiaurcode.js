// const clock = document.getElementById('clock');

// setInterval(function () {
//   let date = new Date();

//   clock.innerHTML = date.toLocaleTimeString();
//   clock.style.backgroundColor = 'red';
//   clock.style.color = 'YELLOW';
// }, 1000);


//project number two 
// const form = document.querySelector('form');
//no// this usecase will give you empty
//no// const height = parseInt(document.querySelector('#height').value)

// form.addEventListener('submit', function (e) {
//   e.preventDefault();

//   const height = parseInt(document.querySelector('#height').value);
//   const weight = parseInt(document.querySelector('#weight').value);
//   const results = document.querySelector('#results');

//   if (height === '' || height < 0 || isNaN(height)) {
//     results.innerHTML = `Please give a valid height ${height}`;
//   } else if (weight === '' || weight < 0 || isNaN(weight)) {
//     results.innerHTML = `Please give a valid weight ${weight}`;
//   } else {
//     const bmi = (weight / ((height * height) / 10000)).toFixed(2);

//     if (bmi < 18.6) {
//       results.innerHTML = `
//         <h2>Your BMI: ${bmi}</h2>
//         <p>Under Weight</p>
//       `;
//     } else if (bmi >= 18.6 && bmi <= 24.9) {
//       results.innerHTML = `
//         <h2>Your BMI: ${bmi}</h2>
//         <p>Normal Range</p>
//       `;
//     } else {
//       results.innerHTML = `
//         <h2>Your BMI: ${bmi}</h2>
//         <p>Over Weight</p>
//       `;
//     }
    
//       }

// });

//PROJECT NUMBER THREE
let randomNumber = parseInt(Math.random() * 100 + 1);
const submit = document.querySelector('#subt');

const userinput = document.querySelector('#guessField');
const guessSlot = document.querySelector('.guesses');
const remaining = document.querySelector('.lastResult');
const loOrHi = document.querySelector('.lowOrHi');
const StartOver = document.querySelector('.resultParas');

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playgame = true;

//logical part
if (playgame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault();
    const guess = parseInt(userinput.value);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    alert(`please enter a vaild number `);
  } else if (guess < 1) {
    alert(`please enter a vaild number less than 1 `);
  } else {
    prevGuess.push(guess);
    if (numGuess > 11) {
      displayGuess(guess);
      displayMessage(`GameOver:Random number was ${randomNumber}`);
      endgame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess == randomNumber) {
    displayMessage(`Number is right`);
    endgame();
  } else if (guess < randomNumber) {
    displayMessage(`Number is too low`);
  } else if (guess > randomNumber) {
    displayMessage(`Number is too Hight`);
  }
}

function displayGuess(guess) {
  userinput.value = '';
  guessSlot.innerHTML += `${guess}  `;
  numGuess++;
  remaining.innerHTML = `${11 - numGuess}`;
}

function displayMessage(message) {
  loOrHi.innerHTML = `<h2>${message}</h2>`;
}

function endgame() {
  userinput.value = '';
  userinput.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id ="newGame">"Start new Game"</h2>`;
  StartOver.appendChild(p);
  playgame = false;
  newgame();
}

function newgame() {
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click', function (e) {
    randomNumber = parseInt(Math.random() * 100 + 1);
    prevGuess = [];
    newGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11 - numGuess}`;
    userinput.removeAttribute('disabled', '');
    StartOver.removeChild(p);
    playgame = true;
  });
}
