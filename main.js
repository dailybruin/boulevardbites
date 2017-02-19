mapboxgl.accessToken = 'pk.eyJ1Ijoia2FzcGkiLCJhIjoiY2l6MWt6czNuMDVnMTJxbjEycnB1Nmt3MiJ9.25IwYCMCXhrhtgKBsFfdNA';

var map = new mapboxgl.Map({
    container: 'map',
    zoom: 13,
    center: [-118.43791, 34.05048],
    style: 'mapbox://styles/mapbox/streets-v9'
})

map.on('style.load', function (e) {
    console.log(e.style.sprite);
    map.addSource('markers', {
        "type": "geojson",
        "data": {
            "type": "FeatureCollection",
            "features": [{
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [34.050646, -118.437671]
                },
                "properties": {
                    "title": "Ramyani Westwood",
                    "marker-symbol": "default_marker"
                }
            }, {
                "type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [34.047748, -118.435237]
                },
                "properties": {
                    "title": "Taste of Tehran",
                    "marker-color": "#ff00ff",
                    "marker-symbol": "secondary_marker"
                }
            }]
        }
    });

    map.addLayer({
        "id": "markers",
        "source": "markers",
        "type": "circle",
        "paint": {
            "circle-radius": 10,
            "circle-color": "#007cbf"
        }
    });
});
