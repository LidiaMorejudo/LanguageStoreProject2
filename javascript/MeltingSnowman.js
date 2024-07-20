// Dictionary containing words and their definitions
const wordsWithDefinitions = {
  'PATATA': 'A starchy plant tuber which is one of the most important food crops, cooked and eaten as a vegetable.',
  'MANGO': 'A fleshy yellowish-red tropical fruit that is eaten ripe or used green for pickles or chutneys.',
  'MANZANA': 'A sweet fruit produced by an apple tree (Malus domestica).',
  'MELOCOTON': 'A peach, a round stone fruit with juicy yellow flesh and downy pinkish-yellow skin.',
  'ARANDANO': 'A small, round fruit of a shrub that has a blue or black color and is often eaten as a berry.',
  'FRESA': 'A sweet soft red fruit with a seed-studded surface.',
  'MELON': 'A large round fruit with sweet pulpy flesh and many seeds.',
  'PLATANO': 'A tropical fruit which is usually longer than a banana and is often cooked before being eaten.'
};

// Define the maximum number of incorrect guesses allowed
const maxWrongGuesses = 6;

let wordToGuess = '';
let guessedLetters = [];
let wrongGuesses = 0;
let wordDefinition = '';

// Select random word and its definition from the dictionary
function selectRandomWord() {
  const keys = Object.keys(wordsWithDefinitions);
  const randomKey = keys[Math.floor(Math.random() * keys.length)];
  return { word: randomKey, definition: wordsWithDefinitions[randomKey] };
}

// Initialize the game
function initializeGame() {
  const selected = selectRandomWord();
  wordToGuess = selected.word;
  wordDefinition = selected.definition;
  guessedLetters = Array(wordToGuess.length).fill('_');
  wrongGuesses = 0;

  // Update the word and definition display
  updateWordDisplay();
  updateDefinitionDisplay(); // Ensure this function is called here

  updateMeltingSnowmanGraphic();

  // Remove any previously generated buttons
  const lettersContainer = document.querySelector('.letters');
  while (lettersContainer.firstChild) {
    lettersContainer.removeChild(lettersContainer.firstChild);
  }

  // Generate the letter buttons
  for (let i = 0; i < 26; i++) {
    const letter = String.fromCharCode(65 + i);
    const button = document.createElement('button');
    button.innerText = letter;
    button.addEventListener('click', function () {
      handleGuess(letter);
    });
    lettersContainer.appendChild(button);
  }

  // Clear any previous win/lose message
  const messageContainer = document.querySelector('.message');
  messageContainer.innerText = '';
}

// Update the word display
function updateWordDisplay() {
  const wordContainer = document.querySelector('.word');
  wordContainer.innerText = guessedLetters.join(' ');
}

// Update the definition display
function updateDefinitionDisplay() {
  const definitionContainer = document.querySelector('.definition');
  definitionContainer.innerText = wordDefinition;
}

// Handle a letter guess
function handleGuess(letter) {
  // If the letter has already been guessed, do nothing
  if (guessedLetters.includes(letter)) {
    return;
  }

  // Add the letter to the list of guessed letters
  guessedLetters.forEach((guessedLetter, index) => {
    if (wordToGuess[index] === letter) {
      guessedLetters[index] = letter;
    }
  });

  // If the letter is not in the hidden word, increment the wrong guesses count and update the Melting Snowman graphic
  if (!wordToGuess.includes(letter)) {
    wrongGuesses++;
    updateMeltingSnowmanGraphic();
  }

  // Update the word display
  updateWordDisplay();

  // Check if the game has been won or lost
  checkWinOrLose();
}

// Update the Melting Snowman graphic
function updateMeltingSnowmanGraphic() {
  const meltingSnowmanContainer = document.querySelector('.MeltingSnowman');
  if (wrongGuesses <= maxWrongGuesses) {
    meltingSnowmanContainer.innerHTML = `<img src="images/MeltingSnowman${wrongGuesses}.png" alt="Melting Snowman ${wrongGuesses}">`;
  } else {
    meltingSnowmanContainer.innerHTML = `<img src="images/gameover.png" alt="Game Over">`;
  }
}

// Check if the game has been won or lost
function checkWinOrLose() {
  if (guessedLetters.join('') === wordToGuess) {
    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = 'You win!';
    const letterButtons = document.querySelectorAll('.letters button');
    letterButtons.forEach(button => {
      button.disabled = true;
      button.removeEventListener('click', handleGuess);
    });
  } else if (wrongGuesses >= maxWrongGuesses) {
    const messageContainer = document.querySelector('.message');
    messageContainer.innerText = `You lose! The word was "${wordToGuess}".`;
    const meltingSnowmanContainer = document.querySelector('.MeltingSnowman');
    meltingSnowmanContainer.innerHTML = `<img src="images/gameover.png" alt="gameover">`;
    const letterButtons = document.querySelectorAll('.letters button');
    letterButtons.forEach(button => {
      button.disabled = true;
      button.removeEventListener('click', handleGuess);
    });
  }
}

// Initialize the game when the page loads
window.addEventListener('load', initializeGame);
