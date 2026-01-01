// Entry point for the application
import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';

const map = new maplibregl.Map({
    container: 'map',
    style: 'https://demotiles.maplibre.org/globe.json',
    center: [-58.3816, -34.6037],
    zoom: 8,
});

map.on('load', () => {
    map.addSource('subway-line', {
        type: 'geojson',
        data: '/data/processed/linea-d.geojson',
    });
    
    map.addLayer({
        id: 'subway-line-layer',
        type: 'line',
        source: 'subway-line',
        paint: {
            'line-color': '#008000',
            'line-width': 4,
        },
    });
});
