// 1. Create a constructor function for the hangman game
// 2. Setup two attributes. One for the word itself, another one for the number of guesses allowed.
// 3. Create two instances of it and and set up the word property as an array of lower case letters
// 4. Set up another instance property to store guessed letters
// 5. Create a method that gives you the word puzzle back
// 6. Display puzzle and guesses left in the browser instead of console with DOM manipulation
// 7. Separate the Hangman definition from the rest of the app code (use app.js)

const Hangman = function (word, numberOfGuesses) {
    this.word = word.toLowerCase().split('')
    this.numberOfGuesses = numberOfGuesses
    this.guessedLetters = []
    this.status = 'playing'
}

Hangman.prototype.calculateStatus = function () {
    const finished = this.word.every((letter) => this.guessedLetters.includes(letter)) 

    if (this.numberOfGuesses === 0) {
        this.status = 'failed'
    } else if (finished) {
        this.status = 'finished'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle += letter
        } else {
            puzzle += '*'
        }
    })
    return puzzle
}

Hangman.prototype.makeGuess = function (guess) {
    guess = guess.toLowerCase()
    const uniqueGuess = !this.guessedLetters.includes(guess)
    const badGuess = !this.word.includes(guess)
    
    if (uniqueGuess) {
        this.guessedLetters.push(guess)
    }

    if (uniqueGuess && badGuess) {
        this.numberOfGuesses--
    }

    this.calculateStatus()
}

/* const roundTwo = new Hangman('Takoyaki', 5)
console.log(roundTwo.getPuzzle())
console.log(roundTwo.numberOfGuesses) */