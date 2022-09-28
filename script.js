// prompt the user for r p or s
var userChoice = prompt("Enter R, P, or S");
userChoice = userChoice.toUpperCase();
console.log(userChoice);
var choices = ['R', 'P', 'S'];

// if the userchoice is not inside choices, they would have to choose again
while(!choices.includes(userChoice)) {
    userChoice = prompt("Enter R, P, or S");
    userChoice = userChoice.toUpperCase();
}


// player enters letter and presses ok
// we are then alterted witht he computers random choice

var randomNumber = Math.floor(Math.random() * 3);
console.log(randomNumber);
var computerChoice = choices[randomNumber];
alert('Computer chose: ' + computerChoice);


// after we presss ok we are alerted if we won or lost
// after we press ok again we are alerted with our stats
// after we are them prompted if we want to play again
// if we press ok then the game starts again, stats are stored for the next game