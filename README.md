# WordleClone

# Word Guessing Game

A browser-based Wordle-style game built with vanilla JavaScript, HTML, and CSS. Players have six attempts to guess a random five-letter word, with visual feedback on letter accuracy and position.

## Table of Contents

1. [Features](#features)
2. [Demo](#demo)
3. [Prerequisites](#prerequisites)
4. [Installation](#installation)
5. [Configuration](#configuration)
6. [Usage](#usage)
7. [Project Structure](#project-structure)
8. [How It Works](#how-it-works)

   * [createSquare](#createsquare)
   * [getNewWord](#getnewword)
   * [getCurrentWordArray](#getcurrentwordarray)
   * [updateGuessedWords](#updateguessedwords)
   * [deleteLetter](#deleteletter)
   * [getTileColor](#gettilecolor)
   * [handleSubmitWord](#handlesubmitword)
9. [Contributing](#contributing)
10. [License](#license)
11. [Acknowledgements](#acknowledgements)

---

## Features

* Random five-letter word selection (local list or WordsAPI)
* Six guess attempts per round
* On-screen and physical keyboard support
* Real-time input: letter placement, deletion, submission
* Flip animation and color-coded feedback:

  * **Green**: correct letter & position
  * **Yellow**: correct letter, wrong position
  * **Grey**: letter not in word
* Responsive design with basic CSS animations

## Demo

![Gameplay demo](./demo.gif)

## Prerequisites

* Modern web browser (Chrome, Firefox, Safari, Edge)
* Internet connection for optional WordsAPI usage

## Installation

1. Clone this repository:

   ```bash
   git clone https://github.com/your-username/word-guessing-game.git
   cd word-guessing-game
   ```
2. Open `index.html` in your browser.

## Configuration

* The game defaults to a small local word list in `LOCAL_WORDS`.
* To enable fetching random words from WordsAPI:

  1. Sign up at [RapidAPI](https://rapidapi.com) and subscribe to WordsAPI.
  2. Copy your **x-rapidapi-key**.
  3. In `script.js`, replace `'<YOUR_KEY_GOES_HERE>'` with your key.

## Usage

1. Type or click letters to build your guess.
2. Press **Enter** to submit a 5-letter word.
3. Press **Backspace** to delete the last letter.
4. Colored tiles will flip and indicate accuracy.
5. Guess correctly within six tries to win, or see the answer after six attempts.

## Project Structure

```
/word-guessing-game
├── index.html       # Main HTML file
├── styles.css       # Game styles and animations
├── script.js        # Core game logic
├── README.md        # Project documentation
└── demo.gif         # Optional demonstration GIF
```

## How It Works

### createSquare

Creates 30 `<div>`s inside the game board (`#board`), each with a unique ID (1–30) and CSS classes for animation.

### getNewWord

Selects a random 5-letter word:

* If no API key is set, picks from `LOCAL_WORDS`.
* Otherwise, fetches from WordsAPI with error fallback.

### getCurrentWordArray

Returns the active row (`guessWords[guessWords.length - 1]`) to which new letters will be added.

### updateGuessedWords

Adds a letter to the current guess if under 5 letters:

1. Pushes the letter into the current array.
2. Fills the next empty tile based on `availableSpace`.
3. Increments `availableSpace`.

### deleteLetter

Removes the last letter from the current guess:

1. Pops from the current array.
2. Decrements `availableSpace`.
3. Clears the corresponding tile’s text.

### getTileColor

Determines tile color by comparing each letter to the target word:

* Green: exact match
* Yellow: letter exists elsewhere
* Grey: letter absent

### handleSubmitWord

Submits a complete 5-letter guess:

1. Validates length; alerts if incomplete.
2. Checks word validity via WordsAPI; alerts on error.
3. Animates and colors each tile sequentially.
4. Increments `guessedWordCount`.
5. Alerts on win or after 6th guess with solution.
6. Pushes a new empty array to `guessWords` for the next row.

## Contributing

1. Fork the repo
2. Create a feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Open a Pull Request

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

## Acknowledgements

* [WordsAPI](https://rapidapi.com/wordsapi) for random word fetching
* [Animate.css](https://animate.style/) for flip animations
* Inspiration from the popular Wordle game
