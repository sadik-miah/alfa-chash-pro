function hiddenElementById(elementId) {
    const hidden = document.getElementById(elementId);
    hidden.classList.add('hidden');
}
function showElementById(elementId) {
    const showElement = document.getElementById(elementId);
    showElement.classList.remove('hidden');
}
// generate alphabet 
function getARandomAlphabet() {
    const alphabetString = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ/';
    const alphabets = alphabetString.split('');
    const randomNumber = Math.random() * 27;
    const index = Math.round(randomNumber);
    const alphabet = alphabets[index];
    return alphabet;

}
// set background function
function addBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
// remove background function
function removeBackgroundColor(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

function ScoreLifeUpdate(Score) {
    const currentScoreElement = document.getElementById(Score);
    const currentScoreText = currentScoreElement.innerText;
    const currentScore = parseInt(currentScoreText);
    return currentScore;
}