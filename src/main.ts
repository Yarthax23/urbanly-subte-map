import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { StyleSpecification } from 'maplibre-gl';


const osmStyle: StyleSpecification = {
  version: 8,
  sources: {
    osm: {
      type: 'raster',
      tiles: ['https://tile.openstreetmap.org/{z}/{x}/{y}.png'],
      tileSize: 256,
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  },
  layers: [
    {
      id: 'osm-base',
      type: 'raster',
      source: 'osm',
    },
  ],
};

const map = new maplibregl.Map({
    container: 'map',
    style: osmStyle,
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
