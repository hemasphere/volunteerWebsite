/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log('hi');
/*
document.addEventListener('DOMContentLoaded', function() {
    var elems = document.querySelectorAll('.collapsible');
    var instances = M.Collapsible.init(elems, options);
  });
*/
  // Or with jQuery

  $(document).ready(function(){
    $('.collapsible').collapsible();
  });
     

  $(document).ready(function(){
    $('.carousel').carousel();
  });

 $(document).ready(function(){
    $('.modal').modal();
  });

$(document).ready(function(){
    $('input.autocomplete').autocomplete({
      data: {
        "Apple": null,
        "Microsoft": null,
        "Google": 'https://placehold.it/250x250'
      },
    });
  });

 $(document).ready(function(){
    $('.parallax').parallax();
  });
        
