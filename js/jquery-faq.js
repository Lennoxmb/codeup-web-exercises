let $invisible = $('.invisButton');
let $futureHighlight = $('dt');


$invisible.on('click', function() {
    $('dd').toggleClass('invisible');
});
//more user friendly
// $('dt').on('click', function(){
//     $(this).next().fadeToggle();
// })


$futureHighlight.on('click', function() {
    $(this).toggleClass('highlight')
});
