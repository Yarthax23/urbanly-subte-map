import fs from 'fs';

const input = 'data/processed/lineas-de-subte-extract.csv';
const output = 'data/processed/linea-d.geojson';

const raw = fs.readFileSync(input, 'utf-8').trim();
const lines = raw.split('\n').slice(1); // skip header

const coordinates = [];

for (const line of lines) {
  const [wkt] = line.split(';');

  // Extract content inside (( ... ))
  const match = wkt.match(/\(\((.*)\)\)/);
  if (!match) continue;

  const points = match[1].split(',');

  for (const point of points) {
    const [lng, lat] = point.trim().split(' ').map(Number);
    coordinates.push([lng, lat]);
  }
}

const geojson = {
  type: 'Feature',
  properties: { line: 'D' },
  geometry: {
    type: 'LineString',
    coordinates,
  },
};

fs.writeFileSync(output, JSON.stringify(geojson, null, 2));
console.log(`Generated ${output}`);
