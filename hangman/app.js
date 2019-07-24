// Hypertext Transfer Protocol

const puzzleEl = document.querySelector('#puzzle')
const guessesEl = document.querySelector('#guesses')
const roundOne = new Hangman('Shadow Blade', 5)

puzzleEl.textContent = roundOne.puzzle
guessesEl.textContent = roundOne.statusMessage

window.addEventListener('keypress', (e) => {
    const guess = String.fromCharCode(e.charCode)
    roundOne.makeGuess(guess)
    puzzleEl.textContent = roundOne.puzzle
    guessesEl.textContent = roundOne.statusMessage
})

getPuzzle("1", (error, puzzle) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(puzzle)
    }
})

getCountry('NZ', (error, country) => {
    if (error) {
        console.log(`Error: ${error}`)
    } else {
        console.log(`Country name: ${country.name}`)
    }
})