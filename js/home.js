document.addEventListener('keyup', function (event) {
    const playerPressed = event.key;
    const pLayerPressedLowerCase = playerPressed.toLowerCase();
    console.log('player pressed', pLayerPressedLowerCase);
    // get random key
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log('expected key', expectedAlphabet);
    // checked key
    if (pLayerPressedLowerCase === expectedAlphabet) {
        console.log('you get a point');
        // display score
        const Score = ScoreLifeUpdate('current-score');
        const currentScoreUpdate = Score + 1;
        const currentScoreElement = document.getElementById('current-score');
        currentScoreElement.innerText = currentScoreUpdate;
        // return currentScoreUpdate;
        removeBackgroundColor(expectedAlphabet);
        continueGame();
        // return currentScoreUpdate;
    }
    else {
        console.log('you missed, you lost a life');
        // display life 
        const lifeUpdate = ScoreLifeUpdate('current-life');

        const currentLifeUpdate = lifeUpdate - 1;
        const currentLifeElement = document.getElementById('current-life');
        currentLifeElement.innerText = currentLifeUpdate;
        if (lifeUpdate - 1 == 0) {
            hiddenElementById('play-ground');
            const finalScoreValue = ScoreLifeUpdate('final-result');
            // console.log(finalScoreValue);
            const final = document.getElementById('final-result');
            const Score = ScoreLifeUpdate('current-score');
            const currentScoreUpdate = Score;
            final.innerText = currentScoreUpdate;




            showElementById('final-score');
        }
    }
})



function continueGame() {
    const alphabet = getARandomAlphabet();
    const alphabetToLowerCase = alphabet.toLowerCase();
    const currentAlphabet = document.getElementById('current-alphabet');
    currentAlphabet.innerText = alphabet;
    addBackgroundColor(alphabetToLowerCase);
}


/* const lifeValue = ScoreLifeUpdate('current-life');
console.log(lifeValue);
if (lifeValue === 0) {

} */

function playBtn() {
    hiddenElementById('home-section');
    showElementById('play-ground');
    continueGame();
}
