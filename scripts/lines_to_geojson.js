import fs from 'fs';

// --- WKT parsing (minimal, dataset-specific) ---
function lineToCoordinates(wkt) {
  const inner = wkt
    .replace('MULTILINESTRING ((', '')
    .replace('))', '');

  return inner.split(',').map(pair => {
    const [lng, lat] = pair.trim().split(' ').map(Number);
    return [lng, lat];
  });
}

// --- Build GeoJSON ---
const input = 'data/raw/lineas-de-subte.csv';
const output = 'data/processed/subte-lines.geojson';

const raw = fs.readFileSync(input, 'utf-8').trim();
const lines = raw.split('\n').slice(1); // skip header

const rows = lines.map(line => {
  const [wkt, id, lineasub] = line.split(';');
  return { wkt, id, lineasub: lineasub?.trim(), };
});

const features = rows.map(r => ({
    type: 'Feature',
    properties: {
      id: r.id,
      line: r.lineasub.trim(),
    },
    geometry: {
      type: 'LineString',
      coordinates: lineToCoordinates(r.wkt),
    },
  }));

const geojson = {
  type: 'FeatureCollection',
  features,
};

// --- Write file ---
fs.writeFileSync(output, JSON.stringify(geojson, null, 2));
console.log(`Generated ${output}`);
