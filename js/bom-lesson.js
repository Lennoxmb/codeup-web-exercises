// count something once every second, interval is in milliseconds
let count = 0;
let max = 10;
let interval = 1000;

let intervalId = setInterval(function(){
    console.log('console logging every second');
}, interval);
// can enter "clearInterval(intervalId);" to stop it from counting in the inspect page

let intervalId = setInterval(function(){
    if (count >= max) {
        clearInterval(intervalId);
        console.log('All Done!');
    } else {
        count++;
        console.log('repeating this line' + count);
    }
}, interval);

console.log('5 seconds starts now.')
setTimeout(function(){
    console.log('been 5 seconds!')
}, 5000);


setTimeout(function(){
    window.location.href= 'https://google.com';
}, 10000);
//allows you to use a back button when going to new page so you can go back to the original place

//can do history to go back
