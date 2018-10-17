// Use this to search class values for each symbol.
/* const cards = document.querySelectorAll('.card');
  console.log(cards);
*/

/*
 * Create a list that holds all of your cards
 */

// list to hold all cards.
const deck = document.querySelector('.deck');

// Other Global Scope Items
let toggledCards = []; // List of Cards. Creates the list of clicked and flipped card(s).
let moves = 0;
let clockOff = true;
let time = 0;
let clockId;

/*
* Modal Tests
*/
time = 121;
displayTime(); //2:01
moves = 16;
checkScore(); // 2 stars

writeModalStats(); // write stats to the modal
toggleModal(); // opens modal

/*
 * Display the cards on the page
 *   - shuffle the list of cards using the provided "shuffle" method below
 *   - loop through each card and create its HTML
 *   - add each card's HTML to the page
 */

// Shuffle function from http://stackoverflow.com/a/2450976
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

// shuffle nodes, turn into array, add to HTML.
function shuffleDeck() {
  const cardsToShuffle = Array.from(document.querySelectorAll('.deck li'));
  // console.log("Cards to Shuffle", cardsToShuffle); // original grouping.
  const shuffledCards = shuffle(cardsToShuffle);
  // console.log("Shuffled Cards", shuffledCards); // shuffled grouping.
  for (card of shuffledCards) {
    deck.appendChild(card);
  }
}
shuffleDeck();

/*
 * set up the event listener for a card. If a card is clicked:
 *  - display the card's symbol (put this functionality in another function that you call from this one)
 *  - add the card to a *list* of "open" cards (put this functionality in another function that you call from this one)
 *  - if the list already has another card, check to see if the two cards match
 *    + if the cards do match, lock the cards in the open position (put this functionality in another function that you call from this one)
 *    + if the cards do not match, remove the cards from the list and hide the card's symbol (put this functionality in another function that you call from this one)
 *    + increment the move counter and display it on the page (put this functionality in another function that you call from this one)
 *    + if all cards have matched, display a message with the final score (put this functionality in another function that you call from this one)
 */

// TODO: display card's symbol using `.addeventListener` function. Try using 'click' as the listener and 'toggle' as the action.
//Do I have to use `open` AND `show` classes here? Try just `open` first.  `open` changes background color but not the symbol. toggling *both* `open` and `show` makes entire card visible.
//Hmm. Having troubles with event listener. Ahha! I forgot to remove 'All' from querySelector.


// Event listener function. Upon click, IF a card class AND less than 2 have been clicked, then execute 'Flip Card function'. Once reaches 2 total flips, compare class name for 'match'.

deck.addEventListener('click', event => {
  const clickTarget = event.target;
  if (isClickValid(clickTarget)) {
    if (clockOff) {
      startClock();
      clockOff = false;
    }
  toggleCard(clickTarget);
  addToggleCard(clickTarget)
}
  if (toggledCards.length === 2) {
    checkForMatch(clickTarget);
    addMove();
    checkScore();
  }
});

function isClickValid(clickTarget) {
  return (
    clickTarget.classList.contains('card') && !clickTarget.classList.contains('match') &&
    toggledCards.length < 2 &&
    !toggledCards.includes(clickTarget)
  );
}

// flip card function. Actual card flip.
function toggleCard(clickTarget) {
clickTarget.classList.toggle('open');
clickTarget.classList.toggle('show');
}

// add flipped card function. Sends the clicked cards into the below `flippedCards` array (list).
function addToggleCard(clickTarget) {
  toggledCards.push(clickTarget);
  console.log(toggledCards);
}

// verify match function. compares one set of class values from each card; if equal (same) then declare 'match'! Reminder: Cannot manipulate 'node' data, so must find other property to reference.
function checkForMatch() {
  if (toggledCards[0].firstElementChild.className === toggledCards[1].firstElementChild.className) {
    toggledCards[0].classList.toggle('match');
    toggledCards[1].classList.toggle('match');
    toggledCards = [];
  }
    else {
    setTimeout(() => {
      console.log("No Match.");
      toggleCard(toggledCards[0]);
      toggleCard(toggledCards[1]);
      toggledCards = [];
    }, 1000); // 1000 = 1000 miliseconds = 1 second.
  }
}

function addMove() {
  moves++;
  const movesText = document.querySelector('.moves');
  movesText.innerHTML = moves;
}

function checkScore() {
  if (moves === 16 || moves === 24) {
    hideStar();
  }
}

function hideStar() {
  const starList = document.querySelectorAll('.stars li');
  for (star of starList) {
    if (star.style.display !== 'none') {
      star.style.display = 'none';
      break;
    }
  }
}
hideStar();
hideStar();

function startClock() {
  clockId = setInterval(() => {
    time++;
    displayTime();
    console.log(time);
  }, 1000); // 1000 = 1000 miliseconds = 1 second.
}

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

function stopClock() {
  clearInterval(clockId);
}

function toggleModal() {
  const modal = document.querySelector('.modal_background');
  modal.classList.toggle('hide');
}
toggleModal(); //opens modal
toggleModal(); //closes modal. remove if want to open again.

function writeModalStats() {
  const timeStat = document.querySelector('.modal_time');
  const clockTime = document.querySelector('.clock').innerHTML;

  timeStat.innerHTML = `Time = ${clockTime}`;
}
