const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const roundOne = new Hangman('Astronomy', 5)

puzzleEl.textContent = roundOne.getPuzzle()
guessesEl.textContent = roundOne.numberOfGuesses
console.log(roundOne.status)

window.addEventListener('keypress', function (e) {
    const guess = String.fromCharCode(e.charCode)
    roundOne.makeGuess(guess)
    puzzleEl.textContent = roundOne.getPuzzle()
    guessesEl.textContent = `You have ${roundOne.numberOfGuesses} guesses left`
})