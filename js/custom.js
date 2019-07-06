(function ($) {
  "use strict";
  // niceSelect js code
  $(document).ready(function () {
    $('select').niceSelect();
  });

  $('.popup-youtube, .popup-vimeo').magnificPopup({
    // disableOn: 700,
    type: 'iframe',
    mainClass: 'mfp-fade',
    removalDelay: 160,
    preloader: false,
    fixedContentPos: false
  });
  
  $('.banner_text').slick({
    vertical:true,
    verticalSwiping:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    pauseOnHover: true,
    touchMove: true,
    verticalSwiping: true,
    prevArrow: $('.prev'),
    nextArrow: $('.next'),
  });



  // service_slider js code
  var service = $('.service_slider');
  if (service.length) {
    service.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      smartSpeed: 2000,
      navText: [
        '<i class="ti-angle-left"></i>',
        '<i class="ti-angle-right"></i>'
      ],
      responsive: {
        0: {
          nav: false,
        },
        768: {
          nav: true,
        },
        992: {
          nav: true,
        }
      }
    });
  }
  // project_slider js code
  var project = $('.project_slider');
  if (project.length) {
    project.owlCarousel({
      items: 1,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      smartSpeed: 2000,
      navText: [
        '<i class="flaticon-left-arrow"></i>',
        '<i class="flaticon-right-arrow"></i>'

      ],
      responsive: {
        0: {
          nav: false,
        },
        768: {
          nav: true,
        },
        992: {
          nav: true,
        }
      }
    });
  }
  // blog_slider js code
  var single_page = $('.single_page_special_item');
  if (single_page.length) {
    single_page.owlCarousel({
      items: 4,
      loop: true,
      dots: false,
      autoplay: true,
      autoplayHoverPause: true,
      autoplayTimeout: 5000,
      nav: true,
      smartSpeed: 2000,
      navText: [
        '<i class="flaticon-left-arrow"></i>',
        '<i class="flaticon-right-arrow"></i>'

      ],
      responsive: {
        0: {
          nav: false,
          items: 1
        },
        576:{
          items: 1
        },
        768: {
          nav: true,
          items: 2
        },
        992: {
          nav: true,
          items: 3
        },
        1200: {
          nav: true,
          items: 3
        }
      }
    });
  }

  // blog_post_slider js code
  // var blog = $('.blog_post_slider');
  // if (blog.length) {
  //   blog.owlCarousel({
  //     items: 1,
  //     loop: true,
  //     dots: false,
  //     autoplay: false,
  //     autoplayHoverPause: true,
  //     autoplayTimeout: 5000,
  //     nav: true,
  //     smartSpeed: 2000,
  //     navText: [
  //       '',
  //       'NEXT'


  //     ]
  //   });
  // }


  $('.blog_post_slider').on('initialized.owl.carousel changed.owl.carousel', function (e) {
    if (!e.namespace) {
      return;
    }
    var carousel = e.relatedTarget;
    $('.slider-counter').text(carousel.relative(carousel.current()) + 1 + '/' + carousel.items().length);
  }).owlCarousel({
    items: 1,
    loop: true,
    dots: false,
    autoplay: true,
    autoplayHoverPause: true,
    autoplayTimeout: 5000,
    nav: true,
    smartSpeed: 2000,
    navText: [
      '',
      'NEXT'


    ]
  });
  // map js code
  var map = $('.map');
  if (map.length) {
    $('.map')
      .gmap3({
        center: [40.740, -74.18],
        zoom: 12
      })
  }
  // menu fixed js code
  $(window).scroll(function () {
    var window_top = $(window).scrollTop() + 1;
    if (window_top > 50) {
      $('.main_menu').addClass('menu_fixed animated fadeInDown');
    } else {
      $('.main_menu').removeClass('menu_fixed animated fadeInDown');
    }
  });

  // Search Toggle
  $("#search_input_box").hide();
  $("#search_1").on("click", function () {
    $("#search_input_box").slideToggle();
    $("#search_input").focus();
  });
  $("#close_search").on("click", function () {
    $('#search_input_box').slideUp(500);
  });


  //memnu js
  jQuery(document).ready(function ($) {
    $(".menu-trigger").on('click', function () {
      $(".off-canven-menu").addClass("active")
      $(".offcanvas-overlay").addClass("active")
    });
    $(".close-icon i, .offcanvas-overlay").on('click', function () {
      $(".off-canven-menu").removeClass("active")
      $(".offcanvas-overlay").removeClass("active")
    });
  });

  //gallery js
  $('.grid').masonry({
    itemSelector: '.grid-item',
    columnWidth: '.grid-sizer',
    percentPosition: true
  });
  
  $('.gallery').each(function() { // the containers for all your galleries
    $(this).magnificPopup({
        delegate: 'a', // the selector for gallery item
        type: 'image',
        gallery: {
          enabled:true
        }
    });
});

//------- Mailchimp js --------//  
function mailChimp() {
  $('#mc_embed_signup').find('form').ajaxChimp();
}
mailChimp();


}(jQuery));