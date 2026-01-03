import fs from 'fs';

const input = 'data/raw/estaciones_de_subte.csv';
const output = 'data/processed/estaciones.geojson';

const raw = fs.readFileSync(input, 'utf-8').trim();
const lines = raw.split('\n');

function parsePoint(wkt) {
    const inner = wkt
        .replace('POINT (', '')
        .replace(')', '');

    const [lng, lat] = inner.split(' ').map(Number);
    return [lng, lat];
}

const features = lines.slice(1).map(line => {
    const [id, estacion, linea, geometry] = line.split(',');

    if (!geometry) return null;

    const coordinates = parsePoint(geometry);

    return {
        type: 'Feature',
        properties: {
            id,
            name: estacion,
            line: linea,
        },
        geometry: {
            type: 'Point',
            coordinates,
        },
    };
}).filter(Boolean);

const geojson = {
    type: 'FeatureCollection',
    features,
};

fs.writeFileSync(output, JSON.stringify(geojson, null, 2));
console.log(`Generated ${output}`);
