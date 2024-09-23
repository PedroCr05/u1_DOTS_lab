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
    // Changing the text of the score which is set at 0000 by scoreDisplay as defaulted
        // Using the score value, we change it's origin from another variable which is from `score`
    scoreDisplay.innerText = score;
    // Our conditional statement for when our player reaches 100 points!
    if (score >= 100){
        // Changing the opacity of the text from 0 to 1.
        levelWinner.style.opacity = 1;
    }
});

// Notes:
    // This is what a conditional means
        // We aren't trying to make a for statement
            // It's just a simple `if();` statement. 