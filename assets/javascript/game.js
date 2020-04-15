//1.Gather user input
//2.Check for all uppercase and lowercase letters
//3. Trigger an even listener if pressed key matched
//4. Generate a random letter  from all letters
//5. Compare value of user input to generated random value
//6. if  values are equal, increment the "wins" variable and update in the DOM/HTML element
//7. if values are not equal, increment the "losses" variable and update in DOM element


 // copied from Rock, Paper, Scissors

 // Creates an array that lists out all of the options (upper and lowercase letters).
 var computerChoices = ["a", "b", "c","d", "e", "f","g", "h", "i","j", "k", "l","m", "n", "o","p", "q", "r","s", "t", "u","v", "w", "x","y", "z","A", "B", "C","D", "E", "F","G", "H", "I","J", "K", "L","M", "N", "O","P", "Q", "R","S", "T", "U","V", "W", "X","Y", "Z"];

 // Creating variables to hold the number of wins, losses, and ties. They start at 0.
 var wins = 0;
 var losses = 0;
 var guessesLeft = 0;
 var guessesSoFar = 0;
 var gameElement = document.getElementById('game');





 // Create variables that hold references to the places in the HTML where we want to display things.
 var directionsText = document.getElementById("directions-text");
 var winsText = document.getElementById("wins-text");
 var lossesText = document.getElementById("losses-text");
 var guessesLeftText = document.getElementById("guessesLeft-text");
 var guessesSoFarText = document.getElementById ("guessesSoFar-text");

 // This function is run whenever the user presses a key.
 document.onkeyup = function(event) {

   // Determines which key was pressed.
   var userGuess = event.key;

   // Randomly chooses a choice from the options array. This is the Computer's guess.
   var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

   // Reworked our code from last step to use "else if" instead of lots of if statements.

   // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
   if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

     if ((userGuess === "r" && computerGuess === "s") ||
       (userGuess === "s" && computerGuess === "p") || 
       (userGuess === "p" && computerGuess === "r")) {
       wins++;
     } else if (userGuess === computerGuess) {
       ties++;
     } else {
       losses++;
     }

     // Hide the directions
     directionsText.textContent = "";

     // Display the user and computer guesses, and wins/losses/ties.
     userChoiceText.textContent = "You chose: " + userGuess;
     computerChoiceText.textContent = "The computer chose: " + computerGuess;
     winsText.textContent = "wins: " + wins;
     lossesText.textContent = "losses: " + losses;
     tiesText.textContent = "ties: " + ties;
   }
 };
</script>
