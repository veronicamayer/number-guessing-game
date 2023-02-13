let randomNumber, numberOfRounds, round, firstDigit;

document.querySelector('#numberOfRoundsForm').addEventListener("change", (event) => {
    event.preventDefault();

    round = 0;
    (document.querySelector('#numberOfRoundsCustom').value === '') ? numberOfRounds = parseInt(document.querySelector('input[name="numberOfRoundsRadio"]:checked').value) : numberOfRounds = parseInt(document.querySelector('#numberOfRoundsCustom').value);
    document.querySelector('#numberOfRoundsOutput').innerHTML = `<p> ${round} out of ${numberOfRounds} </p>`;

    randomNumber = Math.floor(Math.random() * 99) + 1;
    console.log(randomNumber);

    document.querySelector('#numberOfRoundsForm').style.display = "none";
});

document.querySelector('#numberGuessed').addEventListener("submit", (event) => {
    event.preventDefault();

    (document.querySelector('#firstDigit').value == '') ? firstDigit = 0 : firstDigit = parseInt(document.querySelector('#firstDigit').value);
    let secondDigit = parseInt(document.querySelector('#secondDigit').value);
    (firstDigit === 0) ? numberGuessed = secondDigit : numberGuessed = parseInt(`${firstDigit}${secondDigit}`);

    console.log(numberGuessed);
    
    (numberGuessed < randomNumber) ? document.querySelector('#numberGuessedOutput').innerHTML = `<p>You guessed ${numberGuessed}, try higher!</p>` : (numberGuessed > randomNumber) ? document.querySelector('#numberGuessedOutput').innerHTML = `<p>You guessed ${numberGuessed}, try lower!</p>` : (numberGuessed == randomNumber) ? (document.querySelector('#numberGuessedOutput').innerHTML = `<p>it's a match!</p>`, document.querySelector('a').style.display = "block" ) : "";
    
    round++;
    document.querySelector('#numberOfRoundsOutput').innerHTML = `<p> ${round} out of ${numberOfRounds} </p>`;
    (round === numberOfRounds) ? (document.querySelector('#numberGuessedOutput').innerHTML = `<p>Game over</p>`, document.querySelector('a').style.display = "block") : "";
});

