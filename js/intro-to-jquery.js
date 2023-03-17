// jQuery("h3").click(function(){
//     $(this).next().slideToggle(500);
// });

// if you want to use an arrow function you cannot use the `this` keyword. In that case you have to use event.currentTarget
// jQuery("h3").click((event)=>{
//     $(event.target).next().slideToggle(500);
// });

// We can (and usually do) use `$` as shorthand for calling the jQuery function
// $("h3").click(function(){
//     $(this).next().slideToggle(500);
// });

// If we ask our JavaScript to access DOM elements but those elements have not loaded yet, then our JavaScript can't access them. We can get around this by asking our JavaScript to wait until the page has loaded

// We can do this with the vanilla JS window.onload event

// function init(){
//     $("h3").click(function(){
//         $(this).next().slideToggle(500);
//     });
// }
//
// window.onload = init;

// or we can use the $(document.ready)
$(document).ready(function(){

   $("h3").click(function(){
      $(this).next().slideToggle(500);
   });

   // jQuery selectors use css selectors syntax
   // $("#library").text("jQuery is a JavaScript library");


   // get a reference to the element with the id of library
   // using a jQuery selector
   // and storing it in a variable
   // I use the $ to mark this as a reference to a jQuery object
   // as opposed to a reference to a JS DOM node
   const $libraryReference = $("#library");
   // this is jQuery equivalent to
   const libraryReferenceJS = document.querySelector("#library");
   // use the reference to get the innerText of the element
   let libraryText = $libraryReference.text();
   // output the innerText of the element to the console
   console.log(libraryText);
   // change the innerText of the element on the page
   $libraryReference.text(`${libraryText} is library`);
   // if I console.log libraryText, it still shows the unchanged text
   // because it was stored in a variable prior to being changed
   console.log(libraryText);
   // but if I use the .text() method to read the innerText again,
   // it shows the new (changed) innerText
   console.log($libraryReference.text());

   // jQuery class selector with the .css method
   // to change the css of the selected element(s)
   // $(".framework").css('border', '1px solid black');
   // to change more than one css property at a time
   $(".framework").css({
      'border': '1px solid black',
      'width': 'fit-content',
      'padding': '4px',
      'border-radius': '5px',
      'margin-bottom': '3px'
   });


   $("p, li.framework").text("jQuery takes over").css("color", "hotpink");

});






