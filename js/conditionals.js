"use strict";

/* ########################################################################## */

/**
 * TODO:
 * Create a function named `analyzeColor` that accepts a string that is a color
 * name as input. This function should return a message which relates to the
 * color stated in the argument of the function. For colors you do not have
 * responses written for, return a string stating so
 *
 * Example:
 *  > analyzeColor('blue') // returns "blue is the color of the sky"
 *  > analyzeColor('red') // returns "Strawberries are red"
 *
 *
 *  > analyzeColor('cyan') // returns "I don't know anything about cyan"
 *
 * You should use an if-else-if-else block to return different messages.
 *
 * Test your function by passing various string literals to it and
 * console.logging the function's return value
 */
// const analyzeColor = (color) => {
//     let colorLower = color.toLowerCase();
//     if (colorLower === 'blue') {
//         return ('That\'s the color of the sea!');
//     } else if (colorLower === 'violet') {
//         return (`That\'s the color of Royalty!`);
//     } else if (colorLower === 'red') {
//         return ('That\'s the color of FIRE!!');
//     } else if (colorLower === 'orange') {
//         return ('That\'s the color of the Dragon Balls!');
//     } else if (colorLower === 'yellow') {
//         return ('That\'s what color Codey is!');
//     } else if (colorLower === 'green') {
//         return ('That\'s what color nature is!');
//     } else if (colorLower === 'mint') {
//         return ('That\'s my favorite color ever!');
//     } else {
//         return (`I'm not sure about ${color}... `)
//     }
// }


// Don't change the next two lines!
// These lines create two variables for you:
// - `colors`: a list of the colors of the rainbow
// - `randomColor`: contains a single random color value from the list (this
//                  will contain a different color every time the page loads)
// const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
// const randomColor = colors[Math.floor(Math.random() * colors.length)];

/**
 * TODO:
 * Pass the `randomColor` variable to your 'analyzeColor' function and console.log the results.
 * You should see a different message every time you refresh the page
 */
// can also do in one-step
    //console.log(analyzeColor(randomColor)
// let colorMessage = analyzeColor(randomColor);
// console.log(colorMessage)

/**
 * TODO:
 * Comment out the code above, and refactor your function to use a switch-case statement
 */
// Don't need break if "return"ed
// const analyzeColors = (enteredColor) => {
//     switch (enteredColor) {
//         case "blue":
//           return('That\'s the color of the sea!');
//         case 'purple':
//             return(`That\'s the color of Royalty!`);
//         case 'red':
//             return('That\'s the color of FIRE!!');
//         case 'orange':
//             return('That\'s the color of the Dragon Balls!');
//         case 'yellow':
//             return('That\'s what color Codey is!');
//         case 'green':
//             return('That\'s what color nature is!');
//         case 'mint':
//             return('That\'s my favorite color ever!');
//         default:
//             return("what is that?");
//     }
// }

// const analyzedColor = prompt("What is your favorite color?");
// console.log(analyzeColors (analyzedColor))
/**
 * TODO:
 * Prompt the user for a color when the page loads, and pass the input from the
 * user to your `analyzeColor` function. Alert the return value from your
 * function to show it to the user.
 */
// const usedColor = prompt(`what is your favorite color?`)
// alert(analyzeColor(usedColor.toLowerCase()))

/* ########################################################################## */

/**
 * TODO:
 * Suppose there's a promotion in Walmart, each customer is given a randomly
 * generated "lucky number" between 0 and 5. If your lucky number is 0 you have
 * no discount, if your lucky number is 1 you'll get a 10% discount, if it's 2,
 * the discount is 25%, if it's 3, 35%, if it's 4, 50%, and if it's 5 you'll get
 * everything for free!.
 *
 * Write a function named `calculateTotal` which accepts a lucky number and total
 * amount, and returns the discounted price.
 *
 * Example:
 * calculateTotal(0, 100) // returns 100
 * calculateTotal(4, 100) // returns 50
 * calculateTotal(5, 100) // returns 0
 *
 * Test your function by passing it various values and checking for the expected
 * return value.
 */

const calculateTotal= (total, lucky)  => {
    let totalNumber = parseFloat(total);
    let luckyNumber = parseFloat(lucky);
    if (luckyNumber === 0) {
        return totalNumber;
    } else if (luckyNumber === 1) {
        return (totalNumber * .1);
    } else if (luckyNumber === 2) {
        return (totalNumber * .25);
    } else if (luckyNumber === 3) {
        return (totalNumber * .35);
    } else if (luckyNumber === 4) {
        return (totalNumber * .5);
    } else {
        return `It's free!`
    }
}
console.log(calculateTotal(100, 4))


/**
 * TODO:
 * Uncomment the line below to generate a random number between 0 and 5.
 * (In this line of code, 0 is inclusive, and 6 is exclusive)
 * Prompt the user for their total bill, then use your `calculateTotal` function
 * and alerts to display to the user what their lucky number was, what their
 * price before the discount was, and what their price after the discount is.
 */
// Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
//
// let bill = parseFloat(prompt(`How much was your bill?`));
// let discountPrice = calculateTotal(luckyNumber, bill)
// alert(`your lucky number was ${luckyNumber}. Your total bill was ${dollaDollaBills(bill)}, so your price after the discount is ${dollaDollaBills(discountPrice)}`)



/**
 * TODO:
 * Write some JavaScript that uses a `confirm` dialog to ask the user if they
 * would like to enter a number. If they click 'Ok', prompt the user for a
 * number, then use 3 separate alerts to tell the user:
 *
 * - whether the number is even or odd
 * - what the number plus 100 is
 * - if the number is negative or positive
 *
 * Do *NOT* display any of the above information
 * if the user enters a value that is not of the number data type.
 * Instead, use an alert to inform them of the incorrect input data type.
 *
 *
 * Can you refactor your code to use functions?
 * HINT: The way we prompt for a value could be improved
 */

const wantedNumber = confirm(`would you like to enter a number?`);
if (wantedNumber){
   const userNumber = parseFloat(prompt("enter a number"));
   if (isNumberNotNaN(userNumber)){
    if (userNumber % 2 === 0) {
        alert("that number is even");
    } else {
        alert(`That number is odd`);
    }
    alert('that number plus 100 is ' + (userNumber + 100))
    if (userNumber < 0){
        alert(`that number is negative`);
    } else if (userNumber > 0) {
        alert(`that number is positive`);
    } else {
        alert(`that number is not positive or negative`);
    }
} else {
   alert('input is an incorrect datatype')
   }
}
