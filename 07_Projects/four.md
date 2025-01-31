## fourth project
```Javascript
let randomNum = parseInt(Math.random() * 100 + 1); //generates random that user have to guess

// Getting html elements in JS variable
const submit = document.querySelector('#subt'); //button
const UserInput = document.querySelector('#guessField'); //Users Input field
const guessCount = document.querySelector('.guesses'); //Previous Guesses Display
const remainingGuess = document.querySelector('.lastResult'); // Remaining Attempts
const loworHi = document.querySelector('.lowOrHi'); //Message for high/low feedback
const startOver = document.querySelector('.resultParas'); //Restart button container
const p = document.createElement('p'); //New paragraph for restart button

let prevGuess = []; //Array to store previous guesses
let numGuess = 1;// keep tracks of number of attempts
let playGame = true; //determines if the game is running

//Handling User Input
if (playGame) {
  submit.addEventListener('click', function (e) {
    e.preventDefault(); // Prevent form from refreshing the page
    if (!playGame) return; // Stop input after game ends
    const guess = parseInt(UserInput.value);
    console.log(guess); //Takes the user guess
    validateGuess(guess); //give it for validation
  });
}

//Validating the User's guess
function validateGuess(guess) {
  if (isNaN(guess)) {
    alert("Please enter a valid number");
  } else if (guess < 1) {
    alert("Please enter a number more than 1");
  } else if (guess > 100) {
    alert("Please enter a number less than 100");
  } else {
    prevGuess.push(guess);// Stores the guess in array
    if (numGuess === 10) { // if the user has reached 10 guesses
      CleanUpGuess(guess);
      displayMessage(`Game Over. The correct number was ${randomNum}`);
      endGame();
    } else {
      CleanUpGuess(guess);
      checkGuess(guess); //Check if the guess is correct
    }
  }
}

//Checking if guess is correct 
function checkGuess(guess) {
  if (guess === randomNum) {
    displayMessage(`🎉 Congratulations! You guessed it right!`);
    endGame();
  } else if (guess < randomNum) {
    displayMessage(`📉 Too LOW! Try again.`);
  } else {
    displayMessage(`📈 Too HIGH! Try again.`);
  }
}


function CleanUpGuess(guess) {
  UserInput.value = ''; //Clears input field
  guessCount.innerHTML = prevGuess.join(", "); // shows previous guesses
  numGuess++;
  remainingGuess.innerHTML = `${11 - numGuess}`; // Updates remaining attempts
}

function displayMessage(message) {
  loworHi.innerHTML = `<h2>${message}</h2>`;
}

function endGame(){
	UserInput.disabled = true; //Disbale Input field
	submit.disabled = true; //Disable submit button
	playGame = false;// stope further input

	p.innerHTML = `<button id ="newGame"> Start New Game</button>`;
	startOver.appendChild(p); //Add "NewGame" button to startOver
	document.querySelector('#newGame').addEventListener('click', restartGame); //When user click the newgame button it calls restartgame
}

function restartGame(){
	randomNum = parseInt(Math.random()*100+1); //Generate a new random number
	prevGuess = []; // Reset previous guesses
    numGuess = 1; // Reset attempts
	guessCount.innerHTML = ''; // Clear previous guesses display
	remainingGuess.innerHTML = '10'; // Reset remaining guesses
	loworHi.innerHTML = ''; // Clear message
	UserInput.disabled = false; // Enable input
	submit.disabled = false; // Enable button
	playGame = true; // Allow new game
	startOver.removeChild(p); // Remove "Start New Game" button
  }
```