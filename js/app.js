/* SPECIAL THANKS
__________________________________________ */
/* Special Thanks to Matthew Cranford. Your walkthrough really helped when I got stuck on the nodes vs array issues!!
*/


/* GLOBAL SCOPE
__________________________________________ */

/*
 * Const Declarations
 */
const deck = document.querySelector('.deck'); // builds list to hold all cards.
const TOTAL_PAIRS = 8; // or half the number of total cards in deck // TODO: Change back to '8' before submit!
//const modal_close = document.querySelector('#modal_close'); // May use in future to refactor code.
//const modal_reset = document.querySelector('#modal_reset'); // May use in future to refactor code.
//const restart = document.querySelector('.restart'); // May use in future to refactor code.
// TODO: The declartions commented out above need more work before they actually work. It will take more time than I have though - 'done is better than perfect'.

/*
 * Let Declarations
 */
let flippedCards = []; // List of Cards. Creates the list of clicked and flipped card(s).
let moves = 0; // Starts the move counter function at zero.
let clockOff = true; // Ensures the clock timer function doesn't start *until* the click event.
let time = 0; // Starts the clock timer function at zero.
let clockId; // Declares the variable for use in the startClock and stopClock functions.
let matched = 0; // Starts the matched pairs at zero.

/* Node Info Tool */ // TESTING. Use to search class values for each symbol.
/*
const cards = document.querySelectorAll('.card');
  console.log(cards);
*/

/* Modal Test */ // TESTING. gives function stats to write to the modal and opens modal.
/*
time = 185;
displayTime(); // should be 3:05
moves = 16;
checkScore(); // should be 2 stars

writeModalStats(); // write stats to the modal
toggleModal(); // opens modal
*/


/* FUNCTIONS (in order of execution)
__________________________________________ */

/*
 * Start Game Functions
 */

/* Nodes to Array Function.*/
// shuffle nodes, turn into array, add to HTML.
function shuffleDeck() {
  const cardsToShuffle = Array.from(document.querySelectorAll('.deck li'));
  // console.log("Cards to Shuffle", cardsToShuffle); // TESTING. shows original grouping.
  const shuffledCards = shuffle(cardsToShuffle);
  // console.log("Shuffled Cards", shuffledCards); // TESTING. shows shuffled grouping.
  for (card of shuffledCards) {
    deck.appendChild(card);
  }
}
shuffleDeck();

/* Shuffle Function */
// from http://stackoverflow.com/a/2450976
function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

/*
 * Start Play Functions
 */

/* Event Listener Function */
// Upon click, determine if click is valid (including if clicked is greater than 2). If so, start clock and execute 'Flip Card function' and 'Add Flipped Card Function'. Once the number of clicks reaches 2 total flips, compare class name for 'match'. Will also execute 'Add Move' and 'Check Score'Functions.
deck.addEventListener('click', event => {
  const clickTarget = event.target;
  if (flippedCards.length !== 2) { // prevents a card from being clicked if the flipped card array does not equal 2.
    if (isClickValid(clickTarget)) {
      if (clockOff) {
        startClock();
        clockOff = false;
      }
      flipCards(clickTarget);
      addflipCards(clickTarget)
    }
    if (flippedCards.length === 2) {
      verifyMatch(clickTarget);
      addMove();
      checkScore();
    }
  }
});
// NOTE: Hmm. Having troubles with event listener. Ahha! I forgot to remove 'All' from querySelector up in the 'All Cards List'. I still get that child/parent thing mixed up...

/* Is Click Valid Function */
// Click is Valid only If the clicked item is a `card` AND is NOT already matched (`match`) AND not more than 2 cards are flipped over (and not matched).
function isClickValid(clickTarget) {
  return (
    clickTarget.classList.contains('card') &&
    !clickTarget.classList.contains('match') &&
    flippedCards.length < 2 &&
    !flippedCards.includes(clickTarget)
  );
}

/* Flip Card Function */
// Actually flips the cards over.
function flipCards(clickTarget) {
  clickTarget.classList.toggle('open');
//clickTarget.classList.toggle('show'); // Chose to merge these classes as they are *always* used together.
}
// NOTE: Do I have to use `open` AND `show` classes here? Try just `open` first. `open` changes background color but not the symbol. toggling *both* `open` and `show` makes entire card visible. IS THERE ANY REASON THEY CAN'T BE MERGED INTO ONE CLASS????

/* Add the Toggled Card to Array Function */
// Sends the clicked cards into the below `flippedCards` array (list).
function addflipCards(clickTarget) {
  flippedCards.push(clickTarget);
  console.log(flippedCards);
}

/* Verify Match Function */
// compares one set of class values from each card; if equal (same) then declare 'match'! Reminder: Cannot manipulate 'node' data, so must find other property to reference (as in an HTML property).
function verifyMatch() {
  if (flippedCards[0].firstElementChild.className === flippedCards[1].firstElementChild.className) {
    flippedCards[0].classList.toggle('match');
    flippedCards[1].classList.toggle('match');
    flippedCards = [];
    matched++;
    if (matched === TOTAL_PAIRS) { // This is the part that tells if you've won the game or not. If 'true', then executes `winGame` function.
      winGame();
    }
  }
    else {
    setTimeout(() => {
      // console.log("No Match."); // TESTING. Should show 'No Match' in dev console.
      flipCards(flippedCards[0]);
      flipCards(flippedCards[1]);
      flippedCards = [];
    }, 1000); // 1000 = 1000 miliseconds = 1 second.
  }
}

/*
 * Keeping Score Functions
 */

/* Move Counter Function */
function addMove() {
  moves++;
  const movesText = document.querySelector('.moves');
  movesText.innerHTML = moves;
}

/* Check Score Function */
function checkScore() {
  if (moves === 16 || moves === 24) {
    hideStar();
  }
}

/* Hide the Star Function */
// (dependent on Check Score)
function hideStar() {
  const starList = document.querySelectorAll('.stars li');
  for (star of starList) {
    if (star.style.display !== 'none') {
      star.style.display = 'none';
      break;
    }
  }
}

/* Star Count Function */
// Counts Stars upon 'win game'
function getStars() {
  stars = document.querySelectorAll('.stars li');
  starCount = 0;
  for (star of stars) {
    if (star.style.display !== 'none') {
      starCount++;
    }
  }
  // console.log(starCount); // TESTING. Should show 2.
  return starCount;
}

/* Start Clock Function */
function startClock() {
  clockId = setInterval(() => {
    time++;
    displayTime();
  }, 1000); // REMINDER. 1000 = 1000 miliseconds = 1 second.
}

/* Display Time Function */
function displayTime() {
  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const clock = document.querySelector('.clock');
  clock.innerHTML = time;
  if (seconds < 10) {
    clock.innerHTML = `${minutes}:0${seconds}`;
  } else {
    clock.innerHTML = `${minutes}:${seconds}`;
  }
}

/* Stop Clock Function */
// Stops the clock upon win.
function stopClock() {
  clearInterval(clockId);
}

/*
 * Reset Functions
 */

/* Reset The Game Function */
function resetGame() {
  resetClockAndTime();
  resetMoves();
  resetStars();
  shuffleDeck();
  resetCards();
}

/* Reset the Clock and Time Function */
// Sets the clock and displayed timer to starting position of 0.
function resetClockAndTime() {
  stopClock();
  clockOff = true;
  time = 0;
  displayTime();
}

/* Reset Move Counter Function */
// Sets the move counter to starting position of 0.
function resetMoves() {
  moves = 0;
  document.querySelector('.moves').innerHTML = moves;
}

/* Reset Star Counter Function */
// Sets the Star Counter to strating position of 3.
function resetStars() {
  stars = 0;
  const starList = document.querySelectorAll('.stars li');
  for (star of starList) {
      star.style.display = 'inline';
  }
}

/* Reset the Cards Function */
// Flips the cards back to their starting position.
function resetCards() {
  const cards = document.querySelectorAll('.deck li');
  for (let card of cards) {
    card.className = 'card';
  }
}

/*
 * Modal Functions
 */

/* Toggle Modal Function */
// Upon matching all the pairs, toggles the `game_won_modal`.
function toggleModal() {
  const modal = document.querySelector('.game_won_modal');
  modal.classList.toggle('hide');
}

/* Display Stats Function */
// Add stats to the Modal upon 'win game'
function writeModalStats() { // REMINDER: rubric only calls for time, star rating, and if wants to play again. RUBRIC DOES NOT CALL FOR MOVES.
  const timeStat = document.querySelector('.modal_time');
  const clockTime = document.querySelector('.clock').innerHTML;
  const starsStat = document.querySelector('.modal_stars');
  const stars = getStars();
  // const movesStat = document.querySelector('.modal_moves'); // Not required by Rubric. For future use.

  timeStat.innerHTML = `Time = ${clockTime}`;
  starsStat.innerHTML = `Stars = ${stars}`;
  // movesStat.innerHTML = `Moves = ${(moves)}`; // Not required by Rubric. For future use.
}

/* Win Game Function */
function winGame() {
  stopClock();
  writeModalStats();
  toggleModal();
}

/*
 * Close and/or Reset Modal Functions
 */

/* Close Modal Function */
// Does NOT reset game.
document.querySelector('#modal_close').addEventListener('click', event => {
  toggleModal();
});

/* Close Modal AND Reset Game Function */
document.querySelector('#modal_reset').addEventListener('click', event => {
  toggleModal();
  resetGame();
  console.log('replay');
});

/* Reset Game Function */
// For JUST the reset button.
document.querySelector('.restart').addEventListener('click', event => {
  resetGame();
});
