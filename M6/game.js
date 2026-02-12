let randomNumber = Math.floor(Math.random() * 10) + 1;
let userGuess;
let attempts = 0;
const END_GAME = 999; 

// Prompt user for a number between 1 and 10, or type 999 to exit. 
userGuess = Number(prompt("Enter a number between. 1 and 10, or type 999 to exit: ")) 
// Create while loop that continues for as long as the user guesses are incorrect.
// Loop should exit if user enters 999 and not display "Too high!"
while (userGuess != END_GAME || userGuess != randomNumber) { 
    // Loop should count the number of guesses. 
    attempts += 1; 
    // If the guess is too low, the user should be promped "Too low!" 
    // and be able to guess again. 
    if (userGuess < randomNumber) { 
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
// // be told the number of guesses they made. 
if (userGuess == randomNumber) { 
    console.log("Congrats! You guessed the random number in ${attempts} trys.") 
}