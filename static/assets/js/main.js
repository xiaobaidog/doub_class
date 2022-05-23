(function($){
  "user strict";

  $(document).on('ready',function() {
    background();
  });

  $(window).on("load", function() {
    //preloader
    $(".preloader").delay(300).animate({
      "opacity" : "0"
      }, 300, function() {
      $(".preloader").css("display","none");
    });
  });

  $(".header-serch-btn").on('click', function(){
    //$(".header-top-search-area").toggleClass("open");
    if ($(this).hasClass('toggle-close')) {
        $(this).removeClass('toggle-close').addClass('toggle-open');
        $('.header-top-search-area').addClass('open');
    }
    else {
        $(this).removeClass('toggle-open').addClass('toggle-close');
        $('.header-top-search-area').removeClass('open');
    }
  });

  //close when click off of container
  $(document).on('click touchstart', function (e){
    if (!$(e.target).is('.header-serch-btn, .header-serch-btn *, .header-top-search-area, .header-top-search-area *')) {
      $('.header-top-search-area').removeClass('open');
      $('.header-serch-btn').addClass('toggle-close');
    }
  });

  $(".navbar-collapse>ul>li>a, .navbar-collapse ul.sub-menu>li>a").on("click", function() {
    const element = $(this).parent("li");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
    }
    else {
      element.addClass("open");
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
    }
  });

  //js code for mobile menu 
  $(".menu-toggle").on("click", function() {
      $(this).toggleClass("is-active");
  });

  // header-top 
  $('.header-top-open-btn').on('click', function(){
    $('.header-top').addClass('open');
  });

  $('.header-top .close-btn').on('click', function(){
    $('.header-top').removeClass('open');
  });


  $('.hero-setion').ripples();

  $('select').niceSelect();

  $('.datepicker-here').datepicker();

  function background() {
    const img =$('.bg_img');
    img.css('background-image', function () {
    const bg = ('url(' + $(this).data('background') + ')');
    return bg;
    });
  };

  $('.counter').counterUp({
    delay: 50,
    time: 2500
  });

  // lightcase plugin init
  $('a[data-rel^=lightcase]').lightcase();

  new WOW().init();

  // destination-price-range js 
  $( function() {
    $( "#destination-price-range" ).slider();
  } );

  $( function() {
    $( "#destination-price-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 0, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#destination-price-range" ).slider( "values", 0 ) +
      " - $" + $( "#destination-price-range" ).slider( "values", 1 ) );
  } );

  // testimonial-slider js
  $('.testimonial-slider').owlCarousel({
    loop:true,
    margin: 30,
    smartSpeed: 800,
    dots: false,
    dots: false,
    autoplay: true,
    //nav: true,
    //navText: ["<i class='fa fa-chevron-left'></i>", "<i class='fa fa-chevron-right'></i>"],
    responsiveClass:true,
    responsive:{
      0:{
        items: 1
      },
      576:{
        items: 2
      },
      992:{
        items:3
      }
    }
  });

  // testimonial-slider-two js
  $('.testimonial-slider-two').owlCarousel({
    loop:false,
    margin: 0,
    smartSpeed: 800,
    dots: false,
    // center: true,
    dots: false,
    responsiveClass:true,
    responsive:{
      0:{
        items: 1
      },
      992:{
        items:1
      }
    }
  });

  // testimonial-slider-two-nav js
  $('.testimonial-slider-two-nav').owlCarousel({
    loop:false,
    margin: 10,
    smartSpeed: 800,
    dots: false,
    dots: false,
    // center: true,
    responsiveClass:true,
    responsive:{
      0:{
        items: 2
      },
      576:{
        items:4
      }
    }
  });

  //brand-slider js
  $('.brand-slider').owlCarousel({
    loop:true,
    margin: 0,
    smartSpeed: 800,
    dots: false,
    dots: false,
    //autoplay: true,
    responsiveClass:true,
    responsive:{
      0:{
        items: 2
      },
      575:{
        items: 3
      },
      768:{
        items: 4
      },
      992:{
        items:5
      }
    }
  });

  // Show or hide the sticky footer button
  $(window).on("scroll", function() {
    if ($(this).scrollTop() > 200) {
        $(".scroll-to-top").fadeIn(200);
    } else {
        $(".scroll-to-top").fadeOut(200);
    }
  });

  // Animate the scroll to top
  $(".scroll-to-top").on("click", function(event) {
    event.preventDefault();
    $("html, body").animate({scrollTop: 0}, 300);
  });


})(jQuery);