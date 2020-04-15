//1.Gather user input
//2.Check for all uppercase and lowercase letters
//3. Trigger an even listener if pressed key matched
//4. Generate a random letter  from all letters
//5. Compare value of user input to generated random value
//6. if  values are equal, increment the "wins" variable and update in the DOM/HTML element
//7. if values are not equal, increment the "losses" variable and update in DOM element

var targetLetter;
var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
var charactersLength = characters.length;
var wins = 0;
var losses = 0;;
var guessesLeft = 0;
var guessesSoFar = 0;
var gameElement = document.getElementById('game');

//used stack overflow for this function:

function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }