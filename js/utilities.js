function dollaDollaBills(number, language='en', country="US", currency= 'USD'){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}

function isNumberNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== 'boolean';
}

function isNumericOrNumericString(input) {
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== 'boolean'
}

function randomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

function fastestIsPalindrome(str) {
    var len = Math.floor(str.length / 2);
    for (var i = 0; i < len; i++)
        if (str[i] !== str[str.length - i - 1])
            return false;
    return true;
}