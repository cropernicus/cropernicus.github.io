(function() {
  "use strict";

  $(document).ready(function() {

    // stretch height
    function stretchHeight() {
      $(".hero-content").css({
          "min-height": $(window).height()
      });
    }

    stretchHeight();
    $(window).resize(stretchHeight);

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
