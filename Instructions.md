## Project Rubric
Your project will be evaluated by a Udacity code reviewer according to the [Memory Game project rubric](https://review.udacity.com/#!/rubrics/591/view). Please review for detailed project requirements.

## Get the Starter Code
If you'd like to start from scratch without any files, you are encouraged to do so! You learn the most by developing on your own! But, it can be a bit challenging having to start from scratch, so we do provide a starter project to use.

You can download the starter code through either:

* [The Memory Game project repository on GitHub](https://github.com/udacity/fend-project-memory-game)
* [This zipped folder](https://github.com/udacity/fend-project-memory-game/archive/master.zip)

This starter code has a static, non-interactive version of the project so you can get a jump-start on development.

## Development Strategy
It's very important that you plan your project before you start writing any code. Break your project down into small pieces of work and plan out your approach to each one. It's much easier to debug and fix an issue if you've only made a small change. It becomes much harder if you wait longer to test your code. You don't build a house all at once, but brick-by-brick.

Feel free to implement your own design workflow, but if you get stuck -- here are some quick tips to get started!

1. **Start by building a grid of cards**. After all, the rest of your game's functionality depends on this grid.

* How many total pairs of cards would you have?
* Which data structure can you use to store card symbols? How would you iterate (i.e., loop) over this data structure?
* Think about how you can create, say, an unordered list in HTML from this structure. Recall some of the tools and methods you've learned:
  * `createElement()`
  * `querySelector()`
  * `getElementbyId()`
  * `appendChild()`
  * `Document`

* Are your cards [randomly placed](https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array/2450976#2450976) onto the grid?
* Figure out the HTML needed to represent a card. Remember, you have to represent two sides of the card, and the symbols are faced down
* How can you use CSS properties like `transform` or `opacity` to represent the sides of a card?

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

* Reset button
* Star rating
* Timer (how does `setTimeout()` come into play here?)
* Move counter

6. **We recommend saving most of the styling until the very end**. Allow your game logic and functionality to dictate the styling.

## Version Control
We recommend using Git from the very beginning. Make sure to commit often and to use well-formatted commit messages that conform to our [Git Style Guide](https://udacity.github.io/git-styleguide/).

## Udacity Style Guides
You should write your code and markup to meet the specifications provided in these style guides:

* [CSS Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/css.html)
* [HTML Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/index.html)
* [JavaScript Style Guide](http://udacity.github.io/frontend-nanodegree-styleguide/javascript.html)
* [Git Style Guide](https://udacity.github.io/git-styleguide/)

## Still Not Sure How to Begin?
Be sure that you're comfortable with the content from [JavaScript and the DOM](https://classroom.udacity.com/courses/ud117). After all, this entire project is about DOM manipulation! You are also welcome to [review this post in Knowledge](https://knowledge.udacity.com/questions/4579), which includes several student-curated resources for this particular project.

Beyond that, feel free to check out Mike's webinar on the Memory Game project below!
[Mike Webinar](https://www.youtube.com/watch?v=x47oLiTpIVk)

For another perspective on the project, check out [Ryan's webinar](https://www.youtube.com/watch?v=oECVwum-7Zc) as well.

A note on plagiarism: Viewing someone else’s code to get a general idea of implementation, then putting it away and starting to write your own code from scratch is okay. **Please do not copy someone's code**, in whole or in part. For further details, check out this [guide regarding plagiarism](https://udacity.zendesk.com/hc/en-us/categories/360000151251-Plagiarism).
