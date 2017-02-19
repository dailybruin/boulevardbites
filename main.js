mapboxgl.accessToken = 'pk.eyJ1Ijoia2FzcGkiLCJhIjoiY2l6MWt6czNuMDVnMTJxbjEycnB1Nmt3MiJ9.25IwYCMCXhrhtgKBsFfdNA';

var map = new mapboxgl.Map({
  container: 'map',
  // style URL
  style: 'mapbox://styles/mapbox/light-v9',
  // initial position in [long, lat] format
  center: [-118.43791, 34.05048],				// NOTE: Change this to [-118.43791, 34.05048] once we add in our locs
  // initial zoom
  zoom: 14
});

var stores =       {
        "type": "FeatureCollection",
        "features": [
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -118.437929,
                34.050762
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 234-7336",
              "phone": "2022347336",
              "address": "1471 P St NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at 15th St NW",
              "postalCode": "20005",
              "state": "D.C."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -118.443339,
                34.048308
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 507-8357",
              "phone": "2025078357",
              "address": "2221 I St NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at 22nd St NW",
              "postalCode": "20037",
              "state": "D.C."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -118.452479,
                34.021056
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 387-9338",
              "phone": "2023879338",
              "address": "1512 Connecticut Ave NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at Dupont Circle",
              "postalCode": "20036",
              "state": "D.C."
            }
          },
          {
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [
                -118.435216,
                34.047775
              ]
            },
            "properties": {
              "phoneFormatted": "(202) 337-9338",
              "phone": "2023379338",
              "address": "3333 M St NW",
              "city": "Washington DC",
              "country": "United States",
              "crossStreet": "at 34th St NW",
              "postalCode": "20007",
              "state": "D.C."
            }
          },
          
        ]
};


map.on('load', function(e) {
  // Add the data to your map as a layer
  map.addLayer({
    id: 'locations',
    type: 'symbol',
    // Add a GeoJSON source containing place coordinates and information.
    source: {
      type: 'geojson',
      data: stores
    },
    layout: {
      'icon-image': 'restaurant-15',
      'icon-allow-overlap': true,
    }
  });
});

