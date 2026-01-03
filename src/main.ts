import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import type { StyleSpecification } from 'maplibre-gl';
import { LINE_COLORS } from './style/lines';
import { createLegend } from './ui/legend';
import './style/legend.css';

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

const lineColorExpression = [
    'match',
    ['get', 'line'],
    ...Object.entries(LINE_COLORS).flat(),
    '#999',
] as any;

const map = new maplibregl.Map({
    container: 'map',
    style: osmStyle,
    center: [-58.3816, -34.6037],
    zoom: 11,
});

map.on('load', () => {
    map.addSource('subway-line-preview', {
        type: 'geojson',
        data: '/data/processed/subte-lines.geojson',
    })
    map.addSource('stations', {
        type: 'geojson',
        data: '/data/processed/estaciones.geojson',
    });
    ;

    map.addLayer({
        id: 'subway-line-layer',
        type: 'line',
        source: 'subway-line-preview',
        paint: {
            'line-color': lineColorExpression,
            'line-width': 3,
        },
    });

    map.addLayer({
        id: 'stations-layer',
        type: 'circle',
        source: 'stations',
        paint: {
            'circle-radius': 4,
            'circle-color': '#000000',
            'circle-stroke-width': 1,
            'circle-stroke-color': '#ffffff',
        },
    });

});

createLegend();