/*
const Hello = "Hello World";

function Repeat() {
    const repetitions = [3, 2, 1];

    repetitions.forEach(count => {
        console.log(Array(count).fill(Hello).join(" "));
    })
    }

Repeat();
*/

/*
function sayItAgain(phrase) {
    const repeat = [3, 2, 1];
    repeat.forEach(count => {
        console.log(Array(count).fill(phrase).join(" "));
    })
}

sayItAgain("Kamala is best.")
*/

const prompt = require("prompt-sync")();

const target = Math.floor(Math.random() * 101);

let guesses = 0





while (true)  {
    guesses++;

    const guess = Number(prompt("Guess a number between 0 - 100: "));
    if (guess > target) {
        console.log("Your guess is too high.");
    } else if (guess < target) {
        console.log("Your guess is too low.");
    } else {
        console.log("You guessed it!");
        break;
    }
}
console.log("You gussed it in " + guesses + " tries!");