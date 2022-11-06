(function() {
  "use strict";

  $(document).ready(function() {

    // local scroll
    $(".hero").localScroll({
      duration: 600
    });

    // stretch height
    function stretchHeight() {
      $(".hero-content").css({
          "height": $(window).height()
      });
    }

    stretchHeight();
    $(window).resize(stretchHeight);

    // counter
    $("#counter--js").countdown("2019/06/01", function(event) {
      var $this = $(this).html(event.strftime(""
        + "<span>%D</span> d "
        + "<span>%H</span> h "
        + "<span>%M</span> m "
      ));
    });

    // packery
    $(".gallery").imagesLoaded( function() {
      $(".gallery-grid").packery({
        itemSelector: ".-image"
      });
    });

    // magnific-popup
    $(".lightbox--js").magnificPopup({
      type: "image",
      mainClass: "mfp-with-zoom mfp-fade",

      gallery:{
        enabled: true
      },

      zoom: {
        enabled: true,

        duration: 300,
        easing: "ease-in-out",

        opener: function(openerElement) {
          return openerElement.is("img") ? openerElement : openerElement.find("img");
        }
      }
    });

    // slick-carousel
    $("#testimonials-slider").slick({
      dots: true,
      infinite: true,
      speed: 500,
      fade: true,
      adaptiveHeight: true,
      draggable: false,
      cssEase: "linear",
      appendDots: "#slick-dots",
      appendArrows: "#slick-arrow"
    });
  });
})();
