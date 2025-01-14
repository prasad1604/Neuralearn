const dictionaryHints = {
  "apple": "A sweet, round fruit that's red or green! 🍏",
  "ballo": "A fun dance or party! 🎉",
  "catty": "A way to say someone is being a little mean. 😼",
  "doggy": "A small dog, often a cute nickname! 🐶",
  "fishy": "Something that seems a bit strange. 🐟",
  "hatty": "Anything to do with hats! 🎩",
  "jumpy": "Easily scared or surprised! 🦘",
  "kites": "Toys that fly in the wind! 🪁",
  "leafy": "Full of leaves; green and nice! 🍃",
  "moony": "Dreamy, like being in a story! 🌙",
  "nasty": "Something really not nice! 🤢",
  "ocean": "A huge place with lots of water and waves! 🌊",
  "piano": "An instrument you play with keys! 🎹",
  "queen": "A lady who is a ruler, like in a fairytale! 👑",
  "salty": "Tastes like salt; can also mean feeling mad. 🧂",
  "tiger": "A big, striped wild cat! 🐅",
  "upset": "To make someone feel sad or worried. 😟",
  "vowel": "A special letter we use in words! 🔤",
  "witty": "Funny in a clever way! 😂",
  "zesty": "Tasty and a little bit exciting! 🍋"
};

const WORD_LENGTH = 5;
const FLIP_ANIMATION_DURATION = 500;
const DANCE_ANIMATION_DURATION = 500;

const keyboard = document.querySelector("[data-keyboard]");
const alertContainer = document.querySelector("[data-alert-container]");
const guessGrid = document.querySelector("[data-guess-grid]");

// Select a single random target word and hint at the start of the game
const targetWords = Object.keys(dictionaryHints);
const randomIndex = Math.floor(Math.random() * targetWords.length);
const targetWord = targetWords[randomIndex];
const currentHint = dictionaryHints[targetWord];

// Show the hint for the chosen target word
function showHint() {
  alertContainer.textContent = currentHint;
}

startInteraction();
showHint(); // Display initial hint for the chosen target word

function startInteraction() {
  document.addEventListener("click", handleMouseClick);
  document.addEventListener("keydown", handleKeyPress);
}

function stopInteraction() {
  document.removeEventListener("click", handleMouseClick);
  document.removeEventListener("keydown", handleKeyPress);
}

function handleMouseClick(e) {
  if (e.target.matches("[data-key]")) {
    pressKey(e.target.dataset.key);
  } else if (e.target.matches("[data-enter]")) {
    submitGuess();
  } else if (e.target.matches("[data-delete]")) {
    deleteKey();
  }
}

function handleKeyPress(e) {
  if (e.key === "Enter") {
    submitGuess();
  } else if (e.key === "Backspace" || e.key === "Delete") {
    deleteKey();
  } else if (e.key.match(/^[a-z]$/i)) {
    pressKey(e.key);
  }
}

function pressKey(key) {
  const activeTiles = getActiveTiles();
  if (activeTiles.length >= WORD_LENGTH) return;
  const nextTile = guessGrid.querySelector(":not([data-letter])");
  if (nextTile) {
    nextTile.dataset.letter = key.toLowerCase();
    nextTile.textContent = key;
    nextTile.dataset.state = "active";
  }
}

function deleteKey() {
  const activeTiles = getActiveTiles();
  const lastTile = activeTiles[activeTiles.length - 1];
  if (lastTile) {
    lastTile.textContent = "";
    delete lastTile.dataset.state;
    delete lastTile.dataset.letter;
  }
}

// Submit a guess
function submitGuess() {
  const activeTiles = [...getActiveTiles()];
  if (activeTiles.length !== WORD_LENGTH) {
    showAlert("Not enough letters");
    shakeTiles(activeTiles);
    return;
  }

  const guess = activeTiles.reduce((word, tile) => word + tile.dataset.letter, "");

  stopInteraction();
  activeTiles.forEach((...params) => flipTile(...params, guess));
}

// Flip each tile to reveal feedback
function flipTile(tile, index, array, guess) {
  const letter = tile.dataset.letter;
  const key = keyboard.querySelector(`[data-key="${letter.toUpperCase()}"]`);
  setTimeout(() => {
    tile.classList.add("flip");
  }, (index * FLIP_ANIMATION_DURATION) / 2);

  tile.addEventListener(
    "transitionend",
    () => {
      tile.classList.remove("flip");
      if (targetWord[index] === letter) {
        tile.dataset.state = "correct";
        key.classList.add("correct");
      } else if (targetWord.includes(letter)) {
        tile.dataset.state = "wrong-location";
        key.classList.add("wrong-location");
      } else {
        tile.dataset.state = "wrong";
        key.classList.add("wrong");
      }

      if (index === array.length - 1) {
        tile.addEventListener(
          "transitionend",
          () => {
            startInteraction();
            checkWinLose(guess, array);
          },
          { once: true }
        );
      }
    },
    { once: true }
  );
}

function getActiveTiles() {
  return guessGrid.querySelectorAll('[data-state="active"]');
}

function showAlert(message, duration = 2000) {
  const alert = document.createElement("div");
  alert.textContent = message;
  alert.classList.add("alert");
  alertContainer.prepend(alert);
  if (duration == null) return;

  setTimeout(() => {
    alert.classList.add("hide");
    alert.addEventListener("transitionend", () => alert.remove());
  }, duration);
}

function shakeTiles(tiles) {
  tiles.forEach(tile => {
    tile.classList.add("shake");
    tile.addEventListener("animationend", () => tile.classList.remove("shake"), { once: true });
  });
}

function checkWinLose(guess, tiles) {
  if (guess === targetWord) {
    showAlert("🎉 You did it! 🎉 That's amazing! 🥳", 5000); // Playful celebratory message
    alertContainer.textContent = ""; // Clear the hint
    danceTiles(tiles);
    stopInteraction();
  } else if ([...guessGrid.querySelectorAll(":not([data-letter])")].length === 0) {
    showAlert(`The word was: ${targetWord.toUpperCase()}`, null);
    stopInteraction();
  }
}

function danceTiles(tiles) {
  tiles.forEach((tile, index) => {
    setTimeout(() => {
      tile.classList.add("dance");
      tile.addEventListener("animationend", () => tile.classList.remove("dance"), { once: true });
    }, (index * DANCE_ANIMATION_DURATION) / 5);
  });
}
