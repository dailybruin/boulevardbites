mapboxgl.accessToken = 'pk.eyJ1Ijoia2FzcGkiLCJhIjoiY2l6MWt6czNuMDVnMTJxbjEycnB1Nmt3MiJ9.25IwYCMCXhrhtgKBsFfdNA';

var map = new mapboxgl.Map({
    container: 'map',
    zoom: 13,
    center: [-118.43791, 34.05048],
    style: 'mapbox://styles/mapbox/outdoors-v9',
});

$('#myTabs a').click(function (e) {
  e.preventDefault()
  $(this).tab('show')
})

$('#myTabs a[href="#profile"]').tab('show') // Select tab by name
$('#myTabs a:first').tab('show') // Select first tab
$('#myTabs a:last').tab('show') // Select last tab
$('#myTabs li:eq(2) a').tab('show') // Select third tab (0-indexed)