L.mapbox.accessToken = 'pk.eyJ1IjoiYmVuc29uaGFuIiwiYSI6ImNpdW4wc2V3NzAwZzAydG13eTB6bDdrdGMifQ.3qVecRB6mpgc1X-pURkDng';
var map = L.mapbox.map('map-leaflet', 'mapbox.light')
  .setView([34.05048, -118.43791], 13);
var geojson = [
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-118.437918, 34.050486]
    },
    properties: {
      title: '<h1 style="font-family: Pacifico, cursive; font-size: large;">Ramayani</h1>',
      description: '<h1 style="font-family: Lato; font-size: small">1777 Westwood Blvd Los Angeles, CA 90024</h1>',
      'marker-color': '#ff5722',
      'marker-size': 'large',
      'marker-symbol': 'restaurant'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-118.435277, 34.0477207]
    },
    properties: {
      title: '<h1 style="font-family: Pacifico, cursive; font-size: large;">Taste of Tehran</h1>',
      description: '<h1 style="font-family: Lato; font-size: small">1915 Westwood Blvd, Los Angeles, CA 90025</h1>',
      'marker-color': '#ff5722',
      'marker-size': 'large',
      'marker-symbol': 'restaurant'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-118.443019, 34.048465]
    },
    properties: {
      title: '<h1 style="font-family: Pacifico, cursive; font-size: large;">Hamasaku</h1>',
      description: '<h1 style="font-family: Lato; font-size: small">11043 California Route 2, Los Angeles, CA 90025</h1>',
      'marker-color': '#ff5722',
      'marker-size': 'large',
      'marker-symbol': 'restaurant'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-118.452521, 34.020999]
    },
    properties: {
      title: '<h1 style="font-family: Pacifico, cursive; font-size: large;">OP Cafe</h1>',
      description: '<h1 style="font-family: Lato; font-size: small">3117 Ocean Park Blvd, Santa Monica, CA 90405</h1>',
      'marker-color': '#ff5722',
      'marker-size': 'large',
      'marker-symbol': 'restaurant'
    }
  }
];
var myLayer = L.mapbox.featureLayer().setGeoJSON(geojson).addTo(map);
map.scrollWheelZoom.disable();
