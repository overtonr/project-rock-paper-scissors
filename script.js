// win tie lose counts are global so they don't reset after each game
var tieCount = 0;
var winCount = 0;
var losecount = 0;

// A function to compare the userchoice to the computer choice and increments the tie, win, or lose count
function check(userChoice, computerChoice) {
    if (userChoice === computerChoice) {
        alert('It is a tie');
        tieCount++;
        return;
    }
    if (userChoice === "R") {
        if (computerChoice === "P") {
            alert('Paper beats rock! Computer won.')
            losecount++;
            return;
        }
        if (computerChoice === "S") {
            alert('Rock beats scissors! We won.')
            winCount++;
            return;
        }
    }
    if (userChoice === "P") {
        if (computerChoice === "R") {
            alert('Paper beats rock! We won.')
            winCount++;
            return
        }
        if (computerChoice === "S") {
            alert('Scissors beats paper! Computer won.')
            losecount++;
            return;
        }
    }
    if (userChoice === "S") {
        if (computerChoice === "R") {
            alert('Rock beats scissors! Computer won.')
            losecount++;
            return;
        }
        if (computerChoice === "P") {
            alert('Scissors beats paper! We won.')
            winCount++;
            return;
        }
    }
}

// a function to show the stats on different lines as an alert
function showStats() {
    alert("ties: " + tieCount + '\n' + "wins: " + winCount + '\n' + "loses: " + losecount);
}


// this function is the game loop for the rock paper scissors game
// 1. get user input for r p or s
// 2. computer randomly chooses r p or s
// 3. compare user with computer
// 4. increment win lose tie count
// 5. confirm if the user wants to play again
function playGame() {

    // prompt the user to enter choice
    // player enters letter and presses ok
    var userChoice = prompt("Enter R, P, or S");
    userChoice = userChoice.toUpperCase();
    console.log(userChoice);
    var choices = ['R', 'P', 'S'];

    // if the userchoice is not inside choices, they would have to choose again until they enter r p or s
    while (!choices.includes(userChoice)) {
        userChoice = prompt("Enter R, P, or S");
        userChoice = userChoice.toUpperCase();
    }


    // the computer will choose a random index of choices for R P or S
    // generate random number 0-2.99 then round down to whole number
    var randomNumber = Math.floor(Math.random() * 3); 
    console.log(randomNumber);
    var computerChoice = choices[randomNumber];

    // we are then alerted with the computers random choice
    alert('Computer chose: ' + computerChoice);

    // Check and compare the computer choice with the user choice and increment win lose tie counts
    check(userChoice, computerChoice);

    // show the global stats when the game has ended then ask the user if they want to play again.
    showStats();

    // confirm if the user wants to play again
    if(confirm('play again?')) {
        playGame();
    }

}

//starts the game of rock paper scissors
playGame();
