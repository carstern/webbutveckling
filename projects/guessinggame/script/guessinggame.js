//Skapa kopplingar till html

//Knapp för att starta spelet
const startGame = document.getElementById("startGame");
//Fält där gissningen skrivs
let guessInput = document.getElementById("guess");
//Knapp för att submitta gissning
const guessBtn = document.getElementById("guessBtn");
//guess list
const guessList = document.getElementById("guessList");
//Textinfo med antal gissningar kvar
const guessesLeft = document.getElementById("guesses-left");


//lagra siffran
let correctAnswer;
let userGuess;
//Antalet gissningar
let numberOfGuesses;

// Lås inputfältet innan start
guessInput.setAttribute("disabled", true);

//Generera en random siffra mellan 0-100 med math random vid klick på start
startGame.addEventListener("click", function () {
  correctAnswer = Math.floor(Math.random() * 101);
  console.log(correctAnswer); //skriv ut korrekt siffra i loggen
  // Töm listan vid klick på start
  feedback.innerHTML = '';
  numberOfGuesses = 5;
  guessInput.value = '';
  guessBtn.removeAttribute("disabled");
  guessInput.removeAttribute("disabled");
  //Presentera antal gissningar
  guessesLeft.textContent = `You have ${numberOfGuesses} guesses!`;
  });

//Submitta en gissning
guessBtn.addEventListener("click", function () {
  //hämta gissning från inputfältet
  let userGuess = guessInput.value;
  //jämför input med correctAnser från startGame 
  if (userGuess < correctAnswer) {
    console.log("Too low!");
    //minska antalet gissningar kvar
    numberOfGuesses--;
    guessesLeft.textContent = `You have ${numberOfGuesses} guesses left!`;
    //ge feedback i html
    const feedbackElement = document.createElement('li');
    feedbackElement.textContent = `${userGuess} is to low, try again!`;
    feedback.appendChild(feedbackElement);
  } else if (userGuess == correctAnswer){
    console.log("Correct!");
    //minska antalet gissningar kvar
    numberOfGuesses--;
    guessesLeft.textContent = `You have ${numberOfGuesses} guesses left!`;
    //ge feedback i html
    const feedbackElement = document.createElement('li');
    feedbackElement.textContent = `${userGuess} is correct, well done!`;
    feedback.appendChild(feedbackElement);
  } else if (userGuess > correctAnswer) {
    console.log("Too high!");
    //minska antalet gissningar kvar
    numberOfGuesses--;
    guessesLeft.textContent = `You have ${numberOfGuesses} guesses left!`;
    //ge feedback i html
    const feedbackElement = document.createElement('li');
    feedbackElement.textContent = `${userGuess} is too high`;
    feedback.appendChild(feedbackElement);
  } 
  
  if (numberOfGuesses == 0){
        guessesLeft.textContent = `Game Over!`;
        guessBtn.setAttribute("disabled", true);
        //skapa knapp för omstart av spelet
        const feedbackElement = document.createElement('li');
        feedbackElement.textContent = `Game is over, try again!`;
        feedback.appendChild(feedbackElement);
        guessInput.setAttribute("disabled", true);
  }

//Extra - for funzies
//Fusk-knapp som visas när man anger specifik siffra
if(numberOfGuesses == 2){
  const hint = document.createElement('p');
  hint.textContent = "Psst, type 37!";
  feedback.appendChild(hint);
}
  if (userGuess == 37) {
    const tryAgainElement = document.createElement('button');
    tryAgainElement.textContent = `Hellraiser!`;
    feedback.appendChild(tryAgainElement);

    tryAgainElement.addEventListener('click', function(){
        console.log(correctAnswer);
        const cheatElement = document.createElement('li');
        cheatElement.textContent = correctAnswer;
        feedback.appendChild(cheatElement);
    })
    
}

});