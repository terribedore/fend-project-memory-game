A guide to get you started and to make sure you'll pass. Compiled from the 'Instructions.md' and 'Rubric.pdf' docs.
# From Instructions:
This is where to start or if you get stuck. (MY ANSWERS ARE PRECEEDED BY AN 'Inline Quote'.)

1. **Start by building a grid of cards**. After all, the rest of your game's functionality depends on this grid.
  * How many total pairs of cards would you have?

    >Since the starter code gives me 8 icons, and I'd like it to visually be an even-sided square, I'd stick with the 8 pairs with a total of 16 cards, laid out in a 4x4 grid pattern.

  * Which data structure can you use to store card symbols? How would you iterate (i.e., loop) over this data structure?

    >First, a list of common data structure examples: `array`, `linked list`, `record`, `union`, `tagged union`, and `object`. We have only learnt about `arrays` and `objects` so far, so I'm gonna take a shot in the dark and it's one of those.:wink:

    >Next, it looks like the starter HTML code uses a `<li>` (ordered list) class called `card` to store the cards and the card symbols. Those are then placed in an `<ul>` (unordered list) class called `deck`. The actual symbols are pulled from the bootstrapcdn link in the HTML `<head>` section.

    >Finally, I would iterate the symbols using js (as hinted at in the [app.js](/js/app.js) file).

  * Think about how you can create, say, an unordered list in HTML from this structure. Recall some of the tools and methods you've learned:
    * `createElement()`
    * `querySelector()`
    * `getElementbyId()`
    * `appendChild()`
    * `Document`
      > I have no idea how I'll do this yet.

  * Are your cards [randomly placed](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976) onto the grid?

    >The starter code gives me something about 'Shuffle Function'. Not sure if it's complete. **BUT**  I do see that an `array`is called.

    >_Guess I'll be using an `array` as my data structure to store those symbols after all!_ :smile:

  * Figure out the HTML needed to represent a card. Remember, you have to represent two sides of the card, and the symbols are faced down.

    >The starter code gives us that already!
    >- [ ] the face down card class is `<li class="card">`
    >- [ ] the face up card class, _before a MATCH_, is `<li class="card open show">`
    >- [ ] If there is a MATCH, then the face up card class is `<li class="card match">`

  * How can you use CSS properties like `transform` or `opacity` to represent the sides of a card?

    >The css file already uses the `transform` key pairing for the `card.open` object and has it rotate on its Y axis.

    > Further, one can utilize the 'alpha' in `rgba` key for opacity.

2. **Add the functionality to handle clicks**. This should reveal the "hidden" side of each card. Clicking on the first card should turn it over, show the symbol, and remain turned over. Clicking on a different card must also turn it over and show the symbol.

  * Which event(s) are you listening for?
  * How can that event affect CSS?
  * How can you prevent the user from selecting the same card twice?

3. **Work on the matching logic**. How does your game "know" if a player guesses correctly or incorrectly?

  * Think about how you can temporarily store the first opened card somewhere. After all, this card needs to be compared to the next card turned over.
  * If the two cards match, they stay turned over
  * If the two cards do not match, they turn back

4. **Work on the winning condition**. How does your game “know” if a player has won?

  * Your user should see a modal when the game ends

5. **Implement additional functionality**:

 - [ ] Reset button
 - [ ] Star rating
 - [ ] Timer (how does `setTimeout()` come into play here?)
 - [ ] Move counter

6. **We recommend saving most of the styling until the very end**. Allow your game logic and functionality to dictate the styling.

>I'm not concerned with changing the styling. What they gave in the starter code works fine.

# From Rubric

This is the one to check off!
## Game Behavior

#### Memory Game Logic

- [x] The game randomly shuffles the cards.
- [x] A user wins once all cards have successfully been matched.

#### Congratulations Popup

- [x] When a user wins the game, a modal appears to
  - [x] congratulate the player and
  - [x] ask if they want to play again.
- [x] It should also tell the user
  - [x] how much time it took to win the game, and
  - [x] what the star rating was.

#### Restart Button

- [x] A restart button allows the player to
  - [x] reset the game board,
  - [x] the timer, and
  - [x] the star rating.

#### Star Rating

- [x] The game displays a star rating (from 1 to at least 3) that reflects the player's performance.
  - [x] At the beginning of a game, it should display at least 3 stars.
  - [x] After some number of moves, it should change to a lower star rating.
  - [x] After a few more moves, it should change to a even lower star rating (down to 1).
- [x] The number of moves needed to change the rating is up to you, but it should happen at some point.

#### Timer

- [x] When the player starts a game, a displayed timer should also start.
- [x] Once the player wins the game, the timer stops.

#### Move Counter

- [x] Game displays the current number of moves a user has made.

## Interface Design

#### Styling

- [x] Application uses CSS to style components for the game.

#### Usability

- [x] All application components are usable across
  - [x] modern desktop,
  - [x] tablet, and
  - [x] phone browsers.

## Documentation

#### README

- [x] A README file is included detailing
  - [x] the game and
  - [x] all dependencies.

#### Comments
HTML
- [x] Comments are
  - [x] present and
  - [x] effectively explain longer code procedure when necessary.

CSS
- [x] Comments are
  - [x] present and
  - [x] effectively explain longer code procedure when necessary.

JavaScript
- [x] Comments are
  - [x] present and
  - [x] effectively explain longer code procedure when necessary.

#### Code Quality

- [x] Code is formatted with consistent, logical, and easy-to-read formatting as described in the Udacity JavaScript Style Guide.
