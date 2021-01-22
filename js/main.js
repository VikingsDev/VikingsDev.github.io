$(document).ready(function() {
    "use strict";


    //------- Niceselect  js --------//  

    if (document.getElementById("default-select")) {
        $('select').niceSelect();
    };
    if (document.getElementById("default-select2")) {
        $('select').niceSelect();
    };
    if (document.getElementById("service-select")) {
        $('select').niceSelect();
    };    

    //------- Lightbox  js --------//  

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery: {
            enabled: true
        }
    });

    $('.play-btn').magnificPopup({
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });

    //------- Counter  js --------//  

     if(document.getElementById("facts-area")){
      $('.counter').counterUp({
          delay: 10,
          time: 1000
      });
    }

    //------- Skill  js --------//  

    $('.skill').simpleSkillbar();

    //------- Filter  js --------//  

      $('.filters ul li').click(function(){
        $('.filters ul li').removeClass('active');
        $(this).addClass('active');
        
        var data = $(this).attr('data-filter');
        $grid.isotope({
          filter: data
        })
      });


      if(document.getElementById("portfolio")){
            var $grid = $(".grid").isotope({
              itemSelector: ".all",
              percentPosition: true,
              masonry: {
                columnWidth: ".all"
              }
            })
      };


    //------- Timeline js --------//  


    $('.content').each( function(i){
      
      var bottom_of_object= $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).height();
      
      if( bottom_of_object > bottom_of_window){
        $(this).addClass('hidden');
      }
    });


    $(window).scroll( function(){
        /* Check the location of each element hidden */
        $('.hidden').each( function(i){
          
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
          
            /* If the object is completely visible in the window, fadeIn it */
            if( bottom_of_window > bottom_of_object ){
              $(this).animate({'opacity':'1'},700);
            }
        });
    });



    //------- Accordian Js --------//  

    var allPanels = $(".accordion > dd").hide();
    allPanels.first().slideDown("easeOutExpo");
    $(".accordion").each(function() {
        $(this).find("dt > a").first().addClass("active").parent().next().css({
            display: "block"
        });
    });


     $(document).on('click', '.accordion > dt > a', function(e) {

        var current = $(this).parent().next("dd");
        $(this).parents(".accordion").find("dt > a").removeClass("active");
        $(this).addClass("active");
        $(this).parents(".accordion").find("dd").slideUp("easeInExpo");
        $(this).parent().next().slideDown("easeOutExpo");

        return false;

    });

    //------- Tabs Js --------//  
    if (document.getElementById("horizontalTab")) {

    $('#horizontalTab').jqTabs({
        direction: 'horizontal',
        duration: 200
    });
    
    };  

    //------- Mobile Nav  js --------//

    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="lnr lnr-menu"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="lnr lnr-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("lnr-chevron-up lnr-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
            $('#mobile-body-overly').toggle();
        });

            $(document).on('click', function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('lnr-cross lnr-menu');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }



    //------- Header   Scroll Class    js --------//

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#header').addClass('header-scrolled');
        } else {
            $('#header').removeClass('header-scrolled');
        }
    });

    //------- Google Map  js --------//

//
    $(document).ready(function() {
        $('.full-height').fullHeight();
    });

    //animated mosue move
    $(document).ready(function(){
        var mouseX, mouseY;
        var ww = $( window ).width();
        var wh = $( window ).height();
        var traX, traY;
        $(document).mousemove(function(e){
            mouseX = e.pageX;
            mouseY = e.pageY;
            traX = ((4 * mouseX) / 570) + 40;
            traY = ((4 * mouseY) / 570) + 50;
            console.log(traX);
            $(".text-large").css({"background-position": traX + "%" + traY + "%"});
        });
    });



//
    (function () {

        const link = document.querySelectorAll(' .hover-this');
        const cursor = document.querySelector('.cursor');

        const animateit = function (e) {
            const span = this.querySelector('span');
            const { offsetX: x, offsetY: y } = e,
                { offsetWidth: width, offsetHeight: height } = this,

                move = 6,
                xMove = x / width * (move * 2) - move,
                yMove = y / height * (move * 2) - move;


            span.style.transform = `translate(${xMove}px, ${yMove}px)`;

            if (e.type === 'mouseleave') span.style.transform = '';

        };

        const editCursor = e => {
            const { clientX: x, clientY: y } = e;
            cursor.style.left = x + 'px';
            cursor.style.top = y + 'px';
        };

        link.forEach(b => b.addEventListener('mousemove', animateit));
        link.forEach(b => b.addEventListener('mouseleave', animateit));
        window.addEventListener('mousemove', editCursor);

    })();
//transform: translate(-50%, -50%) scale(3);
    $(".hover-this").hover(function(){
        $(".cursor").css('transform','translate(-50%, -50%) scale(7)')
    },function(){
        $(".cursor").css('transform','translate(-50%, -50%) scale(1)')
    })

    //
    $(".primary-btn").hover(function(){
        $(".cursor").css('transform','translate(-50%, -50%) scale(13)')
    },function(){
        $(".cursor").css('transform','translate(-50%, -50%) scale(1)')
    })

    //hide cursor
    $(".hide-hover").hover(function(){
        $(".cursor").css('transform','translate(-50%, -50%) scale(0)')
    },function(){
        $(".cursor").css('transform','translate(-50%, -50%) scale(1)')
    })

    //iframe
        /**
         * Scaling <iframe>-elements.
         *
         * Emanuel Kluge
         * twitter.com/Herschel_R
         */
        (function (win, doc) {

            /** Below this point the scaling takes effect. */
            var BREAKPOINT = 1030;

            /**
             * The `window.resize`-callback gets throttled
             * to an interval of 30ms.
             */
            var THROTTLE = 30;

            /** Just the declaration. Definition comes later. */
            var IFRAME_HEIGHT;

            var iframe = doc.getElementsByTagName('iframe')[0],
                timestamp = 0;

            /** Defining the inital iframe-height. */
            IFRAME_HEIGHT = parseInt(getComputedStyle(iframe).height, 10);

            /**
             * Takes an object with CSS-transform-properties
             * and generates a cross-browser-ready style string.
             *
             * @param  {Object} obj
             * @return {String}
             */
            function transformStr(obj) {
                var obj = obj || {},
                    val = '',
                    j;
                for ( j in obj ) {
                    val += j + '(' + obj[j] + ') ';
                }
                val += 'translateZ(0)';
                return '-webkit-transform: ' + val + '; ' +
                    '-moz-transform: ' + val + '; ' +
                    'transform: ' + val;
            }

            /**
             * Scaling the iframe if necessary.
             *
             * @return {Function}
             */
            function onResize() {

                var now = +new Date,
                    winWidth = win.innerWidth,
                    noResizing = winWidth > BREAKPOINT,
                    scale,
                    width,
                    height,
                    offsetLeft;

                if ( now - timestamp < THROTTLE || noResizing ) {
                    /** Remove the style-attr if we're out of the "scaling-zone". */
                    noResizing && iframe.hasAttribute('style') && iframe.removeAttribute('style');
                    return onResize;
                }

                timestamp = now;

                /**
                 * The required scaling; using `Math.pow` to get
                 * a safely small enough value.
                 */
                scale = Math.pow(winWidth / BREAKPOINT, 1.2);

                /**
                 * To get the corresponding width that compensates
                 * the shrinking and thus keeps the width of the
                 * iframe consistent, we have to divide 100 by the
                 * scale. This gives us the correct value in percent.
                 */
                width = 100 / scale;

                /**
                 * We're using the initial height and the compen-
                 * sating width to compute the compensating height
                 * in px.
                 */
                height = IFRAME_HEIGHT / scale;

                /**
                 * We have to correct the position of the iframe,
                 * when changing its width.
                 */
                offsetLeft = (width - 100) / 2;

                /** Setting the styles. */
                iframe.setAttribute('style', transformStr({
                    scale: scale,
                    translateX: '-' + offsetLeft + '%'
                }) + '; width: ' + width + '%; ' + 'height: ' + height + 'px');

                return onResize;

            }

            /** Listening to `window.resize`. */
            win.addEventListener('resize', onResize(), false);

        })(window.self, document);


//filter gallery

    class FilterGallery {

        constructor(){
            this.$filtermenuList = $('.filtermenu li');
            this.$container      = $('.container');

            this.updateMenu('all');
            this.$filtermenuList.on('click', $.proxy(this.onClickFilterMenu, this));
        }

        onClickFilterMenu(event){
            const $target      = $(event.target);
            const targetFilter = $target.data('filter');

            this.updateMenu(targetFilter);
            this.updateGallery(targetFilter);
        }

        updateMenu(targetFilter){
            this.$filtermenuList.removeClass('active');
            this.$filtermenuList.each((index, element)=>{
                const targetData = $(element).data('filter');

                if(targetData === targetFilter){
                    $(element).addClass('active');
                }
            })
        }

        updateGallery(targetFilter){

            if(targetFilter === 'all'){
                this.$container.fadeOut(300, ()=>{
                    $('.post').show();
                    this.$container.fadeIn();
                });
            }else {
                this.$container.find('.post').each((index, element)=>{
                    this.$container.fadeOut(300, ()=>{
                        if($(element).hasClass(targetFilter)) {
                            $(element).show();
                        }else {
                            $(element).hide();
                        }
                        this.$container.fadeIn();
                    })
                });
            }
        }
    }

    const fliterGallery = new FilterGallery();
});

