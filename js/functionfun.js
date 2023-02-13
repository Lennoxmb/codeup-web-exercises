// Write a function that accepts a string and returns the string reversed.
// let fallingIn = ['h','e','l','l','o'];
//     let reversedStr = fallingIn.reverse();
//
// console.log(reversedStr)
//
// function reversString(string){
//     let stringArray = string.split('');
//     let reverseStringArray = stringArray.reverse();
//     let reversedString = reverseStringArray.join('');
//     return reversedString;

// 2. Write a function that accepts a last name and a first name and returns the full name.
// const fullName = () => {
//     let first = ('Lennox')
//     let last = ('Ballard')
//     return (first + last)
// }
// console.log(fullName)
//
// //returns negative number
// function negativize(number){
//     if (number > 0) {
//         return -number;
//     } else {
//         return number;
//     }
// }
function negativize(input){
    if (isNaN(parseFloat(input))){
        return "that is not number";
    } else if (input > 0) {
        return -input;
    } else {
        return input;
    }
}


// 1. Make a function called returnTwo() that returns the number 2 when called
// Test this function with `console.log(returnTwo())`
//     1. Make a function called sayHowdy() which console.logs the string “Howdy!”
//    Test this function by directly calling `sayHowdy()`
// Remember this function does not need a defined return value
// 1. Make a function called returnName() that returns the string of your name
// Test this function with `console.log(returnName())`
//     1. Make a function called addThree() which takes in a number input and returns the number plus 3.
// Test this function with `console.log(addThree(5))`
//     1. Make a function called sayString() which returns the string input passed in.
// Test this function with `console.log(sayString('codeup'))`
// - Write a function named `lowerCase(string)`
// - Write a function named `double(n)` that returns a number times two
// - Write a function named `triple(n)` that returns a number times 3
// - Write a function named `quadruple(n)` that returns a number times 4
// - Write a function named `half(n)` that returns 1/2 of the provided input
// - Write a function named `subtract(a, b)` that returns `a` minus `b`
// - Write a function named `multiply(a, b)` that returns the product of `a` times
//     `b`
// - Write a function named divide(a, b) that returns `a` divided by ~b~
//     - Write a function named `remainder(a, b)` that returns the remainder after
// dividing a by b
// - Make a function named `modulo(a, b)` that returns the returns the remainder
// after dividing a by b
// - Write a function named `cube(n)` that returns n * n * n
// - Write a function named `squareRoot(n)` that returns the square root of the
// input
// - Write a function named `cubeRoot(n)` that returns the cube root of the input