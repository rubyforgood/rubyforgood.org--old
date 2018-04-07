(function(){

  // Init global DOM elements, functions and arrays
  window.app                         = {el : {}, fn : {}};
  app.el['window']                   = $(window);
  app.el['document']                 = $(document);
  app.el['back-to-top']              = $('.back-to-top');
  app.el['html-body']                = $('html,body');
  app.el['loader']                   = $('#loader');
  app.el['mask']                     = $('#mask');

  app.fn.screenSize = function() {
    var size, width = app.el['window'].width();
    if(width < 320) size = "Not supported";
    else if(width < 480) size = "Mobile portrait";
    else if(width < 768) size = "Mobile landscape";
    else if(width < 960) size = "Tablet";
    else size = "Desktop";
    if (width < 768) { $('.animated').removeClass('animated').removeClass('hiding'); }
  };



  $(function() {
    // Resized based on screen size
    app.el['window'].resize(function() {
      app.fn.screenSize();
    });

    // fade in .back-to-top
    $(window).scroll(function () {
      if ($(this).scrollTop() > 500) {
        app.el['back-to-top'].fadeIn();
      } else {
        app.el['back-to-top'].fadeOut();
      }
    });

    // scroll body to 0px on click
    app.el['back-to-top'].click(function () {
      app.el['html-body'].animate({
        scrollTop: 0
      }, 1500);
      return false;
    });

    $('#mobileheader').html($('#header').html());

    // fix toggling dropdown inside dropdown
    // when click on dropdown link inside mobile menu, bootstrap will toggle both, submenu and parent menu
    // this fix will toggle only submenu
    $('#mobileheader li.dropdown [data-toggle="dropdown"]').on('click', function (e) {
      e.stopPropagation();
      e.preventDefault();
      $(this).closest('li').toggleClass('open');
    });

    function heroInit() {
      var hero      = jQuery('#hero'),
        winHeight   = jQuery(window).height(),
        heroHeight  = winHeight;

      hero.css({height: heroHeight+"px"});
    };

    jQuery(window).on("resize", heroInit);
    jQuery(document).on("ready", heroInit);

    $('.animated').appear(function(){
      var element = $(this);
      var animation = element.data('animation');
      var animationDelay = element.data('delay');
      if (animationDelay) {
        setTimeout(function(){
          element.addClass( animation + " visible" );
          element.removeClass('hiding');
          if (element.hasClass('counter')) {
            element.find('.value').countTo();
          }
        }, animationDelay);
      }else {
        element.addClass( animation + " visible" );
        element.removeClass('hiding');
        if (element.hasClass('counter')) {
          element.find('.value').countTo();
        }
      }
    },{accY: -150});

    $('#header').waypoint('sticky', {
      wrapper: '<div class="sticky-wrapper" />',
      stuckClass: 'sticky'
    });

    $('.fancybox').fancybox();

  });

  mapboxgl.accessToken = 'pk.eyJ1Ijoia2FsaW1hciIsImEiOiJjamZwZjI3eG4xMWcwMnFwZXlmeWlpZjYxIn0.x4tB7Pictd1bEOFDtBUolQ';

  var map = new mapboxgl.Map({
      container: 'canvas-map',
      style: 'mapbox://styles/kalimar/cjfjpo6ioa9vg2slg1pjbxt78',
      center: [-77.0725, 38.9072],
      zoom: 16
  });

  let navControl = new mapboxgl.NavigationControl();
  map.addControl(navControl, 'top-right');

  map.on('load', function() {
    map.loadImage('assets/img/r4g-map-pin.png', function(error, image) {
      if (error) throw error;
      map.addImage('rfg-pin', image)
      map.addLayer({
        "id": "poi",
        "type": "symbol",
        "source": {
          "type": "geojson",
          "data": {
            "type": "FeatureCollection",
            "features": [{
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [-77.072, 38.90782]
              }
            }]
          }
        },
        "layout": {
          "icon-image": "rfg-pin",
          "icon-size": {
            "stops": [[6, 0.05], [22, 0.5]],
          },
          "icon-offset": [15, 15]
        }
      });
    });
  })
})();
