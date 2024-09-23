// Our main variable for changing our score value
let score = 0;

// Our variables for calling our classes from with-in HTML
const ball = document.querySelector(`.js-ball`);
const scoreDisplay = document.querySelector(`.js-score`);
const levelWinner = document.querySelector(`.level-winner`);

// Our event listener for when the ball is being clicked
ball.addEventListener(`click`, ()=>{
    // This is how we are incrementing our score value
    score += 10;
    // Chaning the text of the score which is set at 0000 by scoreDisplay
        // Using the score value we change it's origion from another variable
    scoreDisplay.innerText = score;
    // Our conditional statement for when our player reaches 100 points!
    if (score >= 100){
        // Simple DOM here.
            // Changing the opacity of the text from 0 to 1.
        levelWinner.style.opacity = 1;
    }
});

// Notes:
    // This is what a conditional means
        // We aren't trying to make a for statement
            // Just simple if it's this or not. Nothing more.