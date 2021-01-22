(function($){

  $.fn.fullHeight = function(){

    var self = this;
    var windowHeight = $(window)[0].innerHeight;

    var fullHeightFunction = function(){
      return self.each(function() {
        self.css({
          'height': windowHeight
        });
      });
    }

    $(window).on('resize', function(){
      windowHeight = $(window)[0].innerHeight;
      fullHeightFunction();
    });

    fullHeightFunction();
    return self;
    
  }

})(jQuery);