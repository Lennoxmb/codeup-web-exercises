function dollaDollaBills(number, language='en', country="US", currency= 'USD'){
    return parseFloat(number).toLocaleString(`${language}-${country}`,
        {style: 'currency', currency: currency}
    );
}

function isNumberNotNaN(input){
    return !isNaN(parseFloat(input)) && input !== null && typeof input !== 'boolean';
}