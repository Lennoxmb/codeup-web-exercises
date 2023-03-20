//jquery selector
// $('#paragraphParent')
// with jquery can't select nodes like "
// let $jqueryParent = $('#paragraphParent');
// jqueryparent.style.color = 'red'

//vanilla js equivalent
let vanillaParent = document.querySelector('#paragraphParent')

//changing 1 css property
// $jqueryParent.css('color', 'red')

//OR change a bunch
// $jqueryParent.css({
//     'fontWeight': '600',
//     'textTransform': 'uppercase',
//     'fontStyle': 'italic'
// })
//adding classes with jquery
// $jqueryParent.addClass('active');

let $paragraphs = $('p');
$paragraphs.css('color', 'blue')

//vanilla v
let paragraphs = document.querySelectorAll('p');
paragraphs.forEach(function(element){
    element.style.color = 'blue';

    element.setAttribute('data-name', 'value');
    let paragraphValue = element.getAttribute('data-name')
})


$paragraphs.attr('data-name2', 'value')
let newParaValue = $paragraphs.attr('data-name2')

$paragraphs.text('this is the new text inside this element.')
//gets the text V
let paraText = $paragraphs.text();
console.log(paraText)

//adding a class to elements
// $paragraphs.addClass('highlight');
//
// //remove class
// $paragraphs.removeClass('highlight')
//
$paragraphs.on('click', function(){
    $(this).toggleClass('highlight')
//     $(this).fadeOut(1000, function(){
//         $(this).fadeIn(1000);
//     });
//
})

// $paragraphs.on('click', function(){
//     // $(this).hide()
//     $(this).animate({
//         opacity: 0.25,
//     }, 3000, function(){
//         console.log('animation complete')
//     })
// })





