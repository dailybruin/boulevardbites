mapboxgl.accessToken = 'pk.eyJ1Ijoia2FzcGkiLCJhIjoiY2l6MWt6czNuMDVnMTJxbjEycnB1Nmt3MiJ9.25IwYCMCXhrhtgKBsFfdNA';

var map = new mapboxgl.Map({
    container: 'map',
    zoom: 13,
    center: [-118.43791, 34.05048],
    style: 'mapbox://styles/mapbox/streets-v9'
});

//smooth scrolling
$('a[href*="#"]:not([href="#"])').click(function() {
  if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
    if (target.length) {
      $('html, body').animate({
        scrollTop: target.offset().top
      }, 1000);
      return false;
    }
  }
});

$('.menu li a').click(function(e) {
  var $this = $(this);
  if (!$this.hasClass('active')) {
    $this.addClass('active');
  }
  e.preventDefault();
});
