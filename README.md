# Urbanly - Subte Map

Technical exercise for Urbanly.

## Description

This project is a simple web application that displays a map of the City of Buenos Aires
and visualizes subway lines and stations using public datasets.

The application uses MapLibre for map rendering and OpenStreetMap raster tiles as the base map.

## Tech Stack

* TypeScript
* MapLibre GL JS
* OpenStreetMap raster tiles
* Vite

## Data Sources & Flow

Subway stations and lines data are obtained from the Buenos Aires City Open Data Portal.

Raw datasets (CSV) are stored under `data/raw/`.

Custom Node.js scripts transform these datasets into normalized GeoJSON
representations suitable for MapLibre rendering.

The generated GeoJSON assets are written to `src/data/` and consumed
directly by the application at runtime.

Key processing steps include:
* Line segmentation into renderable geometries
* Normalization of line identifiers and properties
* Separation of line and station datasets

## Rendering Approach

Subway lines are rendered as a single MapLibre layer, with styling
driven by feature properties.

Line colors are resolved dynamically using a shared visual contract,
ensuring consistency between map rendering and UI elements.

Stations are rendered as point features in a separate layer.

A lightweight, declarative legend UI reflects the current visual
configuration of the map.

## Preview

![Colored Lines and Stations](./docs/images/day8-colored-lines-and-stations.png)

## Project Structure

```text
├── data/raw/                   # Original datasets (CSV / GeoJSON)
├── docs/
│   ├── images/                 # Screenshots and exploratory visuals
│   └── project_log.md          # Daily research and decisions log    
├── scripts/
│    ├── lines_to_geojson.js
│    └── stations_to_geojson.js
├── src/
│    ├── main.ts                # Application entry point
│    ├── style/
│    │    └── lines.ts          # Subway visual contract
│    ├── ui/
│    │    └── legend.ts         # Declarative UI
│    └── data/
│         ├── lines.geojson
│         └── stations.geojson
├── index.html                  # HTML entry point (Vite)
├── package-lock.json
├── package.json
├── README.md                   # Project overview (this file)
└── .gitignore
```

## Getting Started

```bash
npm install
npm run dev
```

Then open:
http://localhost:5173

Alternatively, from a Unix-like shell:
* press `o` + `enter` to open in browser

For a detailed breakdown of design decisions and data modeling iterations,
see `docs/project_log.md`.

## Notes

This project prioritizes clarity, code organization, and maintainability.
