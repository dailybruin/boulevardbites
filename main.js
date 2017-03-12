L.mapbox.accessToken = 'pk.eyJ1IjoiYmVuc29uaGFuIiwiYSI6ImNpdW4wc2V3NzAwZzAydG13eTB6bDdrdGMifQ.3qVecRB6mpgc1X-pURkDng';
var map = L.mapbox.map('map-leaflet', 'mapbox.streets')
  .setView([34.04048, -118.43791], 12);
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
      'marker-size': 'medium',
      'marker-symbol': 'restaurant'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-118.469198, 33.991676]
    },
    properties: {
      title: '<h1 style="font-family: Pacifico, cursive; font-size: large;">The Butcher\'s Daughter</h1>',
      description: '<h1 style="font-family: Lato; font-size: small">1205 Abbot Kinney Blvd, Venice, CA 90291</h1>',
      'marker-color': '#ff5722',
      'marker-size': 'medium',
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
      'marker-size': 'medium',
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
      'marker-size': 'medium',
      'marker-symbol': 'restaurant'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-118.435131, 34.047372]
    },
    properties: {
      title: '<h1 style="font-family: Pacifico, cursive; font-size: large;">Taste of Tehran | Tacos Tu Madre\'s</h1>',
      description: '<h1 style="font-family: Lato; font-size: small">1915 Westwood Blvd, Los Angeles, CA 90025 | 1945 Westwood Blvd, Los Angeles, CA 90025</h1>',
      'marker-color': '#ff5722',
      'marker-size': 'medium',
      'marker-symbol': 'restaurant'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-118.384070, 34.085233]
    },
    properties: {
      title: '<h1 style="font-family: Pacifico, cursive; font-size: large;">8oz Poke</h1>',
      description: '<h1 style="font-family: Lato; font-size: small">8871 Santa Monica Blvd West Hollywood, CA 90069</h1>',
      'marker-color': '#ff5722',
      'marker-size': 'medium',
      'marker-symbol': 'restaurant'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-118.380393, 34.08736]
    },
    properties: {
      title: '<h1 style="font-family: Pacifico, cursive; font-size: large;">Cake and Art</h1>',
      description: '<h1 style="font-family: Lato; font-size: small">8709 CA-2, West Hollywood, CA 90069</h1>',
      'marker-color': '#ff5722',
      'marker-size': 'medium',
      'marker-symbol': 'restaurant'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-118.442454, 34.040153]
    },
    properties: {
      title: '<h1 style="font-family: Pacifico, cursive; font-size: large;">Tsujita Annex | Tatsu Ramen | Daikokuya</h1>',
      description: '<h1 style="font-family: Lato; font-size: small">2050 | 2123 | 2208 Sawtelle Blvd, Los Angeles, CA 90025</h1>',
      'marker-color': '#ff5722',
      'marker-size': 'medium',
      'marker-symbol': 'restaurant'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-118.413198, 34.081403]
    },
    properties: {
      title: '<h1 style="font-family: Pacifico, cursive; font-size: large;">Fountain Coffee Room</h1>',
      description: '<h1 style="font-family: Lato; font-size: small">9641 Sunset Blvd, Beverly Hills, CA 90210</h1>',
      'marker-color': '#ff5722',
      'marker-size': 'medium',
      'marker-symbol': 'restaurant'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [-118.44168, 34.059013]
    },
    properties: {
      title: '<h1 style="font-family: Pacifico, cursive; font-size: large;">Tuck Room Tavern</h1>',
      description: '<h1 style="font-family: Lato; font-size: small">10850 Wilshire Blvd, Los Angeles, CA 90024</h1>',
      'marker-color': '#ff5722',
      'marker-size': 'medium',
      'marker-symbol': 'restaurant'
    }
  }
];
var myLayer = L.mapbox.featureLayer().setGeoJSON(geojson).addTo(map);
map.scrollWheelZoom.disable();
