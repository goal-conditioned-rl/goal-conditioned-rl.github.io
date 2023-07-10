//const canvas = document.getElementById("bgim");
//const context = canvas.getContext("2d");


const preloadImages = () => {
  for (let i = 80; i < 200; i+=5) {
    const img = new Image();
    img.src = currentFrame(i);
  }
};


//img.src = currentFrame(80);
//canvas.width=2048;
//canvas.height=1024;

(function($) {
  "use strict"; // Start of use strict

  // preloadImages();
  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 54
  });




})(jQuery); // End of use strict



  /**
 * Listen to scroll to change header opacity class
 */
  function checkScroll(){
      //var startY = $('.headercontainer').height()*2; //The point where the navbar changes in px
      var startY = 0;
      //console.log($(window).scrollTop());
      var scroll_num = $(window).scrollTop();
      
      // requestAnimationFrame(() => updateImage(image_name))
      
      $('.navbar').addClass("scrolled");
      $('.navbar-brand').show()
      if($(window).scrollTop() >= startY){
      }else{
          $('.navbar').removeClass("scrolled");
          
          $('.navbar-brand').hide()
      }
  }

  if($('.navbar').length > 0){
      $(window).on("scroll load resize", function(){
          checkScroll();
      });
  }
