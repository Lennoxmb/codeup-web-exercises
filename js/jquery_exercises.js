// window.onload = alert("page loaded")
// const $listTitle = $('#listTitle')
// alert($listTitle.text())
//
// const $pageTitle = $('#pageTitle')
// alert($pageTitle.text())
//
// $('li').css({
//     'border': '1px solid red',
// })

// $('li').css({
//     'font-size': '20px',
// })

// $('h1,p,li').css({
//     'background-color': '#00ffb7'
// })
$("h1").click(
    function (){
        $(this).css('background-color', 'red')
    })
$("p").dblclick(
    function (){
        $(this).css('font-size', '18px')
    })
$('li').hover(
    function() {
        $(this).css('background-color', 'red');
    },
    function() {
        $(this).css('background-color', 'white');
    }
);