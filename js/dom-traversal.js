$('.box').on('click', function(){
    // hide the boxes in the OTHER container
    $(this)
        .parents('.container')
        .siblings('.container')
        .find('.box')
        .fadeToggle();
});

// crawling UP the DOM
$('#box1').parents('.container');
$('#box1').closest('.column');
document.querySelector('#box1').closest('.column');

// crawl DOWN the DOM
$('#box1').find();
$('#box1').children();

// crawl SIDEWAYS on the DOM
$('#box1').siblings();

$('.dropdown-toggle').on('click', function(){
    $(this).parents('.dropdown-parent').toggleClass('open');
});

$('.box').each(function(){
    if ($(this).text() === "1" || $(this).text() === "6" || $(this).text() === "7" || $(this).text() === "4") {
        $(this).closest('.column').next().find('.box').css('background-color', 'yellow');
    }
});