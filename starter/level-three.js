// Here same thing. Just pre-setting our point score to 0
// let score = 0;

// We're defining our HTML into variables for JS
    // Remember, `.querySelectorAll();` grabs all `classes` and turns them into an `Array[];`
// const balls = document.querySelectorAll(`.js-ball`);
// const scoreDisplay = document.querySelector(`.js-score`);
// const levelWinner = document.querySelector(`.level-winner`);

// Our `for(loop)` is to select within our `Array[];`
// for (i = 0; i < balls.length; i++){
    // Calling the object.. `{example.object}` || `{example[ourArrayVariable].object}`
    // `console.log(balls[i].dataset.increment)`;
    // The second way of the day same thing above.

//  /   // So here is a break down of understanding this process:
        // Below here is our `dataset but in another way`
            // console.log(balls[i].getAttribute('data-increment'));
        // Since we get our number values from running it through the `console.log();`, and since it does output our values. We can reuse it within our code
            // const ballVal = parseInt(balls[i].getAttribute('data-increment'));
        // We now can remove the `console.log();` && define this line of code into a variable. Hence the `const ballVal`
        // With `ballVal` it holds the value of whatever the `console.log()` spat out to us.
        // In this case, it was the values of `20, 5, 10;`
        // Now since we did that. We aren't actually finished. We have to turn the output value into actual number values
        // Without `parseInt()`, It'll change the number values as a `string` value which isn't what we need.
            // Our `parseInt()` has to be infront, so it works properly
//     const ballVal = parseInt(balls[i].getAttribute('data-increment'));
    // Our `.addEventListener() li` is checking for our actual number values
//     balls[i].addEventListener(`click`, ()=>{
        // Now here is where we use our function called `ballVal` instead of doing the usual hard code of `10;`
            // Just a small reminder. Whenever an input is given. It'll spit out as an `Array[];` order, so order placement does matter!
//         score += ballVal;
        // Our display for the player score
//         scoreDisplay.innerText = score;
        // The conditional statement for when the player wins during the level
//         if(score >= 100){
            // Changing the value of our opacity from `levelWinner` so it can appear on screen again
//             levelWinner.style.opacity = 1;
//         }
//     })
// }

// Full code without the comment in between
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

// Now this is by using the `forEach.(); function();` instead of a `for(loop);`
// let score = 0;

// const balls = document.querySelectorAll(`.js-ball`);
// const scoreDisplay = document.querySelector(`.js-score`);
// const levelWinner = document.querySelector(`.level-winner`);

// Here we are declaring the `forEach();` statement which acts like an `Array[];`
    // We decalre jsBall since it's a placeholder for every value that is inputed
// balls.forEach(jsBall => {
    // Instead of using `balls` as our `functionName();` it preset as the `Array[];`
        // Though when running this code. Our `Array[];` would be considered a string. Which is why we have to run it with `parseInt();` once again.
//     const ballVal = parseInt(jsBall.getAttribute('data-increment'));
    
    // Same process with `ballVal`
//     jsBall.addEventListener(`click`, ()=> {
//         score += ballVal;
//         scoreDisplay.innerText = score;
//             if(score >= 100){
//             levelWinner.style.opacity = 1;
//         }
//     })
// });

// Additional Notes:
    // When calling an object | {example.object} <- It's basically searching within folders in a way.
        // When you run `console.log(function.dataset);` <- It'll give you the name of the object to that folder and from there is rinse and repeat.