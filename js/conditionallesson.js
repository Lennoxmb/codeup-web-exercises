"use strict";
// function negativize(input){
//     if (isNaN(parseFloat(input))){
//         return "that is not number";
//     } else if (input > 0) {
//         return -input;
//     } else {
//         return input;
//     }
// }
//

// let flavor = prompt('Welcome to codeup ice cream. what flavor do you want?')
// if (flavor === "chocolate"){
//     alert("one chocolate coming right up");
// } else if (flavor === 'vanilla') {
//     alert('coming right up!')
// }else {
//     alert("we don't have that flavor");
//     }

// switch and case
// let flavor = prompt('Welcome to codeup ice cream. what flavor do you want?');
// switch(flavor.toLowerCase()) {
//     case("chocolate"):
//         alert("chocolate coming up");
//         break;
//     case "vanilla":
//         alert("vanilla coming up");
//         break;
//     case "strawberry":
//         alert("best one there is");
//         break;
//     default:
//         alert("we don't have that");
// }

// function serveIceCream(flavor){
//     if (flavor === "chocolate" || flavor === "vanilla" || flavor === "strawberry") {
//         alert(`One ${flavor} coming right up!`);
//     } else {
//         alert('we dont have that')
//     }
// }
// serveIceCream(prompt('welcome! What do you want?').toLowerCase());

// function divisibleByFive(number){
//     if (number % 5 === 0){
//         console.log("divisible by 5");
//     } else {
//         console.log("not divisible by 5");
//     }
// }

// const divisibleByFiveTernary = number =>{
//     number % 5 === 0 ? console.log("Divisible by 5") :
//         console.log("not divisible by 5");
// }


// const divisible = (dividend, divisor) => {
//     dividend % divisor === 0 ? console.log(`divisible by ${divisor}`) :
//         console.log(`not divisible by ${divisor}`);
// }

// const divisible = (Dividend, divisor) => dividend % divisor === 0 ? `divisible by ${divisor}` : `not divisible by ${divisor}`;


function divisible(dividend, divisor) {
    return dividend % divisor === 0;
}
//boolean