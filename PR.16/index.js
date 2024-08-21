
function rollDice() {
    const Dice = Math.trunc(Math.random() * 6) + 1;
    document.getElementById("dice").innerText = Dice;
}

document.getElementById("btn").addEventListener("click", rollDice);
