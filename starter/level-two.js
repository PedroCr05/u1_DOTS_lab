// Our score value
let score = 0;

// We're doing a `Getter` here for the classes with-in `HTML`
    // Though for when there are multiple classes we use `.querySelectorAll();`
        // This is helpful but in order to use this. It become an `Array[];`
        // When being an array we MUST call it with the `functionName[ourArrayVariable];`
const balls = document.querySelectorAll(`.js-ball`);
const scoreDisplay = document.querySelector(`.js-score`);
const levelWinner = document.querySelector(`.level-winner`);

// In order for us to use this `Array[];`. We must pass it through a `for loop`
    // Our `for loop` helps us detect multiple inputs for the `.addEventListener();`
for (i = 0; i < balls.length; i++){
    // Remember when calling from an `Array[] li` we have to always use the `functionName[ourArrayVariable]`
        // Since `balls[i]` is our document/function name. We can attach the `.addEventListener();` to this
    balls[i].addEventListener(`click`, ()=>{
        // Our incremented score value
        score += 10;
        // The value of the score being updated
        scoreDisplay.innerText = score;
        // It's the conditional for when our play reaches or passes the total score
        if (score >= 100){
            // This reveals our player thay they've won and can move on
            levelWinner.style.opacity= 1;
        }
    })
}