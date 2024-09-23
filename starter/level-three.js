// Here same thing. Just pre-setting our point score to 0
let score = 0;

// We're defining our HTML into variables for JS
    // Remember, `.querySelectorAll();` grabs all `classes` and turns them into an `Array[];`
const balls = document.querySelectorAll(`.js-ball`);
const scoreDisplay = document.querySelector(`.js-score`);
const levelWinner = document.querySelector(`.level-winner`);

// Our for loop to select within our `Array[];`
for (i = 0; i < balls.length; i++){
    // Calling the object.. `{example.object}` | `{example[ourArrayVariable].object}`
    // console.log(balls[i].dataset.increment);
    // The second way of the day same thing above.

    // So here is a break down of understanding this process:
        // Below here is our `dataset but in another way`
            // console.log(balls[i].getAttribute('data-increment'));
        // Since we get our number values from running it through the console.log, we can use this basically reuse it within our code
            // const ballVal = parseInt(balls[i].getAttribute('data-increment'));
        // We remove the `console.log` & define this line of code into a variable. Hence the `let ballVal`
        // With `ballVal` it holds the value of whatever the console.log spat out to us.
        // In this case, it was the values of `20, 5, 10;`
        // Now since we did that. We aren't actually finished. I have to turn my number values into actual number values
        // Without `parseInt()` | It'll change the number values as a `string` value which isn't what we need.
            // Our parseInt() has to be infront, so it works properly
    const ballVal = parseInt(balls[i].getAttribute('data-increment'));
    // Our `.addEventListener li` that is checking for our values
    balls[i].addEventListener(`click`, ()=>{
        // Now here is where we use our BallVall instead of doing the hard code of `10;`
            // Just a small reminder. Whenever an input is given. It'll spit out as an `Array[];` order, so order placement does matter!
        score += ballVal;
        // Our display for the player score
        scoreDisplay.innerText = score;
        // The conditional statement for when the player passes the level
        if(score >= 100){
            // Changing the value of our opacity from `levelWinner` so it can appear on screen again
            levelWinner.style.opacity = 1;
        }
    })
}

Full code without the comment in between
let score = 0;

const balls = document.querySelectorAll(`.js-ball`);
const scoreDisplay = document.querySelector(`.js-score`);
const levelWinner = document.querySelector(`.level-winner`);

for (i = 0; i < balls.length; i++){
    const ballVal = parseInt(balls[i].getAttribute('data-increment'));
    balls[i].addEventListener(`click`, ()=>{
        score += ballVal;
        scoreDisplay.innerText = score;
        if(score >= 100){
            levelWinner.style.opacity = 1;
        }
    })
}

// Now this is by using the `forEach.();` instead of a for loop
let score = 0;

const balls = document.querySelectorAll(`.js-ball`);
const scoreDisplay = document.querySelector(`.js-score`);
const levelWinner = document.querySelector(`.level-winner`);

// Here we are declaring the `forEach();` statement which acts like an `Array[] li`
    // We decalre jsBall since it's a placeholder for every value that is inputed
balls.forEach(jsBall => {
    // Instead of using `balls` as our `functionName();` it preset's the `Array[];`
        // Though when running this code. Our `Array[];` it would be considered a string we have to run it with `parseInt();`
    const ballVal = parseInt(jsBall.getAttribute('data-increment'));
    
    // Same process with `ballVal`
    jsBall.addEventListener(`click`, ()=> {
        score += ballVal;
        scoreDisplay.innerText = score;
            if(score >= 100){
            levelWinner.style.opacity = 1;
        }
    })
});

// Additional Notes:
    // So here's the thing.
    // When calling an object | {example.object} <- | It's basically searching within folders.
        // When you run `console.log(function.dataset);` | It'll give you the name of the object to that folder and from there is rinse and repeat.