import { LINE_COLORS } from '../style/lines';

export function createLegend() {
  const legend = document.createElement('div');
  legend.className = 'legend';

  Object.entries(LINE_COLORS).forEach(([line, color]) => {
    const item = document.createElement('div');
    item.className = 'legend-item';

    const swatch = document.createElement('span');
    swatch.className = 'legend-swatch';
    swatch.style.backgroundColor = color;

    const label = document.createElement('span');
    label.textContent = `Línea ${line}`;

    item.appendChild(swatch);
    item.appendChild(label);
    legend.appendChild(item);
  });

  document.body.appendChild(legend);
}
