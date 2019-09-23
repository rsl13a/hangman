const
    wordGuessContainer = document.getElementById("guessed-word"),
    guessedLettersContainer = document.getElementById("guessed-letter"),
    newGameButton = document.getElementById("new-game-button"),
    guessLetterForm = document.getElementById("guess-form"),
    userGuessesLeft = document.getElementById("remaining-guesses"),
    wordsToGuess = [
        "banana",
        "pineapple",
        "lemon",
        "apple",
        "orange",
        "pear",
        "peach",
        "coconut",
        "durian"
    ];
let chosenWord = "";
function initialWordSetup(e) {
    let n = e.split("").map(function (e) { return "_" });
    wordGuessContainer.innerHTML = n.join(" ")
}
function startNewGame() {
    guessLetterForm.classList.remove("d-none"),
        wordGuessContainer.innerHTML = "",
        guessedLettersContainer.innerHTML = "",
        guessesRemaining = 10,
        userGuessesLeft.innerHTML = guessesRemaining,
        alreadyGuessed = [],
        initialWordSetup(
            chosenWord = wordsToGuess
            [Math.floor(Math.random() * wordsToGuess.length)])
}
newGameButton.onclick = function () { startNewGame() };
let guessesRemaining = 10;
const alphabet = /^[A-Za-z]+$/;
let alreadyGuessed = [];
function checkWin() {
    wordGuessContainer.innerHTML.split(" ").join("") === chosenWord && (alert(`You won! You guessed ${chosenWord} correctly!`),
        startNewGame())
}
function checkValidGuess(e) {
    return e.match(alphabet) && 1 === e.length ? alreadyGuessed.includes(e) ? (alert(`You have already used the letter ${e}, 
    pick another!`), !1)
        : (alreadyGuessed.push(e), !0)
        : (alert("Invalid guess! Pick a letter a-z!"), !1)
}
function updateGuessList(e) {
    let n = document.createElement("li");
    n.innerHTML = e,
        guessedLettersContainer.append(n)
}
function findInWord(e) {
    let n = chosenWord.split(""),
        s = !1; for (i = 0; i < n.length; i++)if (e == n[i]) {
            let n = wordGuessContainer.innerHTML.split(" ");
            n[i] = e,
                wordGuessContainer.innerHTML = n.join(" "),
                s = !0
        } return s
}
guessLetterForm.onsubmit = function (e) {
    guessesRemaining > 0 && (e.preventDefault(),
        currentGuess = e.target[0].value.toLowerCase(),
        checkValidGuess(currentGuess) && (updateGuessList(currentGuess),
            findInWord(currentGuess) ? checkWin()
                : (guessesRemaining-- ,
                    userGuessesLeft.innerHTML = guessesRemaining,
                    0 === guessesRemaining && (alert(`Game Over! Answer was ${chosenWord}! Try Again!`),
                        wordGuessContainer.innerHTML = chosenWord.split("").join(" "))),
            guessLetterForm.reset()))
};
