var winningNumber = 0;

// before start all button should be disabled
disabledBall();

function disabledBall() {
    for (var i = 1; i <= 10; i++) {
        document.getElementById(`ball${i}`).disabled = true;
    }
}

function clearBallBackgroundAndDisable(disabled) {
    for (let i = 1; i <= 10; i++) {
        console.log(`ball${i}`)
        document.getElementById(`ball${i}`).style.backgroundColor = 'lightgray';
        document.getElementById(`ball${i}`).disabled = disabled;
    }
}

function changeBallColor(color, ballNumber) {
    document.getElementById(`ball${ballNumber}`).style.backgroundColor = color;

}

function startGame() {
    winningNumber = Math.floor(Math.random() * 10) + 1;
    // console.log("winningNumber = " + winningNumber);
    clearBallBackgroundAndDisable(false);
}

function quitGame() {
    winningNumber = 0;
    // console.log("winningNumber = " + winningNumber);
    clearBallBackgroundAndDisable(true);
}

function buttonOnClickHandler(userSelectedNumber) {

    if (winningNumber === userSelectedNumber) {
        changeBallColor("green", userSelectedNumber);
        disabledBall();
        alert("YOU WIN!");
    } else {
        changeBallColor("red", userSelectedNumber);
    }
}