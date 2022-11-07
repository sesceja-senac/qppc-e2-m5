window.addEventListener('load', function(){AOS.refresh()})
$('.tooltip-link').click(function(e){
    e.preventDefault();
})
var menu = $(".menu");

$(window).scroll(function() {
      var topPos = $(this).scrollTop();
      // if user scrolls down - menu goes up
      if (topPos > 100) {
        $(menu).addClass("topativo");

      } else {
        $(menu).removeClass("topativo");
      }

    }); // scroll END