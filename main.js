mapboxgl.accessToken = 'pk.eyJ1Ijoia2FzcGkiLCJhIjoiY2l6MWt6czNuMDVnMTJxbjEycnB1Nmt3MiJ9.25IwYCMCXhrhtgKBsFfdNA';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v9'
});

function activaTab(tab){
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
};
