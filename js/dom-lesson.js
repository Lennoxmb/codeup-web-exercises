'use strict';

// let myButton = document.querySelector('.btn')
// //this will save this node and everything we can do with it in this var
//
// let myButton = doctument.getElementById('clickMe');
// //select node based on ID
// let myButton = document.getElementsByClassName('btn');
// // get all by the calss name
// let myButton = document.querySelectorAll('.btn');
// //gets all items with the same class name.
let clickMe= document.querySelector('.btn')
// //will store just the click me button
// let clickMe = document.querySelector('.btn');
// //grab all

// console.log(clickMe.innerText);
// clickMe.innerText = "Hello World!";
// //changes inner text
// clickMe.remove();
// // will remove it from the dom
let btnColumn = document.querySelector('#btn-column');
//
// btnColumn.insertAdjacentHTML('beforeend', '<p> new HTML element</p>');
// takes in multiple inputs
//
// //more than one element, do queryselectorall, it will make an array.
// let pageWrapper = document.querySelector('.page-wrapper')
// let allButtons = document.querySelectorAll('.btn')
// allButtons.forEach(function(button){
//     button.style.backgroundColor = 'red'
// });
//
// clickMe.addEventListener('click', function(){
//     pageWrapper.style.background = 'red'
// })
// //can go back and toggle off, need to update in css to handle what it looks liek
clickMe.addEventListener('click', function(){
    pageWrapper.classList.toggle('red')
// })
// let newHTML = '<button class="button">New button</button>';
//
// let btnColumn = document.querySelector('#btn-column');
//
// btnColumn.insertAdjacentHTML('afterbegin', newHTML)
// let newButton = document.querySelector('#newButton');
//
// //create node on the fly
// let buttonNode = document.createElement('button');
// buttonNode.classList.add('btn');
// buttonNode.innerText = "I am a new button!";
// buttonNode.addEventListener('click', function(){
//     alert('it works!')
// })
// btnColumn.appendChild(buttonNode)
//
// //clears out the element
// btnColumn.innerHTML = ' ';

// clickMe.addEventListener('click', function(){
//     alert('yay! You clicked me')
// })

const handleClick = () => {
    alert('yay! You clicked me')
}

// clickMe.addEventListener('click',handleClick)
// clickMe.removeEventListener('click', handleClick)

// allButtons.forEach(function(element){
//     element.addEventListener('click', handleClick)
// });

btnColumn.addEventListener('click', function(e){
    // console.log(e);
    if(e.target.classList[0] === 'btn'){
        alert('yay! You clicked me')
    }
})
let buttonNode = document.createElement('button');
buttonNode.classList.add('btn');
buttonNode.innerText = "I am a new button!";
btnColumn.appendChild(buttonNode)