"use strict";
//traditional way
// function helloWorld(){
//     alert('Hello World')
// }
// helloWorld();
//
// //new method: arrow function
// const helloWorld = (name) => {
//     alert(`Hello ${name}`);
// }
//
// helloWorld("Lennox");
const helloWorld = (name) => {
    let message = `Hello ${name}`
    return message;
}

let firsthello = helloWorld("Lennox");
console.log(firsthello)
let secondhello = helloWorld("jenn");
alert(secondhello);


// const isEven =(num) => {
//     let result = num % 2 === 0;
//     return result;
// }
//
// let students = 24;
// let evenStudents = isEven(students);


// //called iife(immediately invoked function expression): helps protect code
// // if you pull another data base that may have same var names. will run immediately. put on top of pages
// (() +. {
//
// })();
//
// //traditional iffe
// (function(){
//
// })();

