"use strict";

// to make it run 10 times, can also put i = 0
let i = 1;
while (i <= 10) {
    if (i % 2 === 0) {
        console.log(`Loop #${i}`);
    }
    i++;
}
// 3 pieces needed, initialize to start incrementor (i= 1) next is condition (i <= 10) and to actually increment it (i++)

//do while
do {
    console.log(`Loop #${i}`);
    i++;
} while (i <= 10)

//for loop
for (let i = 1; i <= 10; i++) {
    console.log(`Loop #${i}`)
}

const getFactorial = (num) => {
    let result = num;
    for(let i = (num - 1); i > 0; i--) {
        result *= i;
    }
    console.log(result)
    return result;
}
getFactorial(5);

//make tree
const buildPyramid = (rows) => {
    let pyramid = "";
    // loop through rows
    for (let i = 1; i <= rows; i++) {
        let row = "";
        //loop to add spaces
        for (let j = 1; j <= rows - i; j++){
            row += " ";
        }
        //loop to add the asterisks
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += "*";
        }
        pyramid += `\n${row}`;
        console.log(row)
    }
}
buildPyramid(5)

//The following pattern is called recursion, a function calling itself
function factorial(x) {
    // if number is 0
    if (x == 0) {
        return 1;
    }
    // if number is positive
    else {
        return x * factorial(x - 1);
    }
}

// #3
function randomNumber(min, max) {
    return Math.random() * (max - min + 1) + min;
}

let randomNumber = Math.floor(Math.random() * (max - min + 1) + min)