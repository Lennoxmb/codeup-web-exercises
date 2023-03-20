// change numbers to currency
function dollaDollaBills(number, language='en', country="US", currency= 'USD'){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}
// check number is NAN
function isNumberNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== 'boolean';
}


//shows number is a number or string of numbers
function isNumericOrNumericString(input) {
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== 'boolean'
}


//random num generator
function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}


//palindrome true of false
function fastestIsPalindrome(str) {
    let len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1])
            return false;
    return true;
}


//menu drop down open closer
let dropdowns = document.querySelectorAll('[data-dropdown="parent"]')
dropdowns.forEach(function(dropdown){
    let toggle = dropdown.querySelector('[data-dropdown="toggle"]')
    toggle.addEventListener('click',function(){
        dropdowns.forEach(function(element){
            if (element.classList.contains('open') && element !== dropdown) {
                element.classList.remove('open')
            }
        });
        dropdown.classList.toggle('open');
    });
});
pageWrapper.addEventListener('click', function(event_){
    if (!event.target.closest('[data-dropdown="parent"]')){
        dropdowns.forEach(function(dropdown){
            dropdown.classList.remove('open');
        });
    };
});
