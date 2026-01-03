import fs from 'fs';

// Helper
function lineToCoordinates(wkt) {
  // Remove wrapper
  const inner = wkt
    .replace('MULTILINESTRING ((', '')
    .replace('))', '');

  // Split points
  return inner.split(',').map(pair => {
    const [lng, lat] = pair.trim().split(' ').map(Number);
    return [lng, lat];
  });
}

const input = 'data/processed/lineas-de-subte.csv';
const output = 'data/processed/linea-d.geojson';

const raw = fs.readFileSync(input, 'utf-8').trim();
const lines = raw.split('\n').slice(1); // skip header
const rows = lines.map(line => {
  const [wkt, , lineasub] = line.split(';');
  return { wkt, lineasub };
});

const features = rows
  .filter(r => r.lineasub === 'D')
  .map(r => ({
    type: 'Feature',
    properties: {
      line: r.lineasub,
      id: r.id,
    },
    geometry: {
      type: 'LineString',
      coordinates: lineToCoordinates(r.wkt),
    },
  }));

// Build GeoJSON
const geojson = {
  type: 'FeatureCollection',
  features,
};

// Write file
fs.writeFileSync(output, JSON.stringify(geojson, null, 2));
console.log(`Generated ${output}`);
