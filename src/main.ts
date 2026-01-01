import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
    center: [-58.3816, -34.6037],
    zoom: 11,
});

map.on('load', () => {
    map.addSource('subway-line-preview', {
    type: 'geojson',
    data: {
      type: 'FeatureCollection',
      features: [
        {
          type: 'Feature',
          properties: { line: 'D' },
          geometry: {
            type: 'LineString',
            coordinates: [
              [-58.4521256031295, -34.566215242404],
              [-58.4516295768312, -34.5664769668698],
              [-58.4490265638751, -34.5678793135606],
              [-58.4446681474258, -34.5700123091016],
            ],
          },
        },
      ],
    },
  });

  map.addLayer({
    id: 'subway-line-layer',
    type: 'line',
    source: 'subway-line-preview',
    paint: {
      'line-color': '#2ecc71',
      'line-width': 4,
    },
  });
});
