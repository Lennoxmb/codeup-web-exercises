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

// $('.listButton').on('click', function(){
//     $('#parkFacts').find('ul').each(function(){
//         $(this).find('li').last().toggleClass('highlight');
//     })
// });


$('.listButton').on('click', function(){
    $('#parkFacts').find('ul li:last-child').css('background-color', 'yellow')
});

$('h3').on('click', function(){
    let $nextUL = $(this).next();
    $nextUL.find('li').css('font-weight', 'bold');
})
$('li').on('click', function(){
    let $parentUL = $(this).parent();
    $parentUL.find('li').first().css('color', 'blue')
})


$('.swap-btn').on('click', function(){
    let btn = $(this).attr('id')
    let $commonParent = $(this).parent('.row');
    let $images = $commonParent.find('img');
    let imgSources = [];
    $images.each(function(){
        let srcValue = $(this).attr('src');
        imgSources.push(srcValue)
    })
    switch(btn) {
        case "leftButton":
            $($images[0]).attr('src', imgSources[1]);
            $($images[1]).attr('src', imgSources[0]);
            console.log('clicked')
            break;
        case 'centerButton':
            console.log('clicked')
            break;
        case "rightButton":
            console.log('clicked')
            break;
    }
})

// $('.leftButton').on('click',(function(event) {
//     $("#image").css({"center": event.pageX});
// })
// );

