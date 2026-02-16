let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 1;
const END_GAME = 999; 

// Prompt user for a number between 1 and 10, or type 999 to exit. 
userGuess = Number(prompt("Enter a number between. 1 and 10, or type 999 to exit: ")) 

// Check to ensure guess is within randomized number range and if not, prompt user to enter a valid number.
while (userGuess < 1 || userGuess > 10 && userGuess != END_GAME) {
    userGuess = Number(prompt("Enter a number between. 1 and 10, or type 999 to exit: ")) 
}

// Create while loop that continues for as long as the user guesses are incorrect.
while (userGuess != randomNumber) { 
    // Loop should count the number of guesses. 
    attempts += 1; 

    // Loop should exit if user enters 999 and not display "Too high!"
    if (userGuess == END_GAME) {
        break;
    }

    // If the guess is too low, the user should be promped "Too low!" 
    // and be able to guess again. 
    else if (userGuess < randomNumber) { 
        userGuess = Number(prompt("Too low! Guess again: ")); 
    } 

    // If the guess is too high, the user should be promped 'Too high!" 
    // and be able to guess again. 
    else if (userGuess > randomNumber) { 
        userGuess = Number(prompt("Too high! Guess again: ")); 
    } 

    // If anything else is entered, the user should be prompted that their input is invalid 
    // to guess again. 
    else { 
        userGuess = Number(prompt("Invalid input, please try again. ")); 
    } 
}

// If the guess is correct, the user should be alerted of their win and 
// be told the number of guesses they made. 
// ADDED: Condtitonal to change grammar of string to be displayed
while (userGuess != END_GAME) {
    if (attempts == 1) {
        window.alert(`Congratulations, You've guessed the random number in ${attempts} try!`)
        break;
    } else {
        window.alert(`Congratulations, You've guessed the random number in ${attempts} tries!`) 
        break;
    }
}
