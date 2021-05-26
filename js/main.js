$(document).ready(function () {
  //change lang
  $('.lang-change').click(function () {
    if (document.documentElement.lang.toLowerCase() === 'en') {
      $("html").removeAttr('lang');
    } else {
      $("html").attr('lang', 'en');
    }
  });

  //mobile na 
  $('.overlay').fadeOut();

  $(".mob-collaps").click(function () {
    $(this).parent().find('nav').toggleClass('nav-open');
    $('.overlay').fadeToggle();
    $(this).find("span:first-child").toggleClass('rotate');
    $(this).find("span:nth-child(2)").toggleClass('none');
    $(this).find("span:nth-child(3)").toggleClass('rotate2');
  });

  $(".overlay").click(function () {
    $("nav.site-nav").removeClass('nav-open');
    $(this).fadeOut();
    $(".mob-collaps span:first-child").removeClass('rotate');
    $(".mob-collaps span:nth-child(2)").removeClass('none');
    $(".mob-collaps span:nth-child(3)").removeClass('rotate2');
  });

});
//fixed header
$(window).scroll(function(){
  var sticky = $('.sticky'),
      scroll = $(window).scrollTop();

  if (scroll >= 100) sticky.addClass('fixed');
  else sticky.removeClass('fixed');
});

// sliders
var swiper = new Swiper('.slider .swiper-container', {
  pagination: {
    el: '.swiper-pagination',
  },
});

var swiper = new Swiper('.testimonial .swiper-container', {
  slidesPerView: 3,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
  }
});
var swiper = new Swiper('.our-team .swiper-container', {
  slidesPerView: 4,
  spaceBetween: 10,
  // init: false,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    767: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    991: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024:{
      slidesPerView: 3,
      spaceBetween: 20,
    }
  }
});

//loader
$(window).on('load', function () {
  $(".loader").fadeOut(2000, function () {
      $("body").fadeIn(1000);
  })
})

