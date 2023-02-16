"use strict";
// let i = 1;
// let accumulator = 0;
// while(i <= 16){
//     let result = accumulator * multiplyBy;
//     accumulator += result;
//     console.log(accumulator)
//         i++;
// }
// let i = 1;
// while (i < 16) {
//     console.log(math.pow(2 ** i));
//     i++;
// }
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}



let conesInventory = randomNumber(50, 100);

do {
    let buyCones = randomNumber(1, 5)
    if (buyCones > conesInventory){
        console.log(`Don't have enough ${buyCones}. I only have ${conesInventory}`)
    } else {
        console.log(`Here's ${buyCones} cones for you. Next!`);
        conesInventory = conesInventory - buyCones
    }
    console.log(`${conesInventory} left`)
} while(conesInventory > 0);
console.log("I'm out!");
