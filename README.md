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

Raw datasets (CSV / GeoJSON) are stored under `data/raw/`, normalized, and transformed into GeoJSON via a separate script.

The resulting GeoJSON files, stored under `data/processed`, are then rendered on the map using MapLibre.

## Current Status

* Base map rendered using MapLibre with OpenStreetMap raster tiles
* Subway data rendered from generated GeoJSON files
* Data transformation is currently naive and under iteration

## Project Structure

```text
├── data/
│   ├── processed/          # Generated GeoJSON (experimental)
│   └── raw/                # Original datasets (CSV / GeoJSON)
├── docs/
│   ├── images/             # Screenshots and exploratory visuals
│   └── project_log.md      # Daily research and decisions log    
├── src/
│   └── main.ts             # Application entry point
├── index.html              # HTML entry point (Vite)
├── package-lock.json
├── package.json
├── README.md               # Project overview (this file)
└── .gitignore
```

## Getting Started

```bash
npm install
npm run dev
```

Then open:
http://localhost:5173

Further documentation will be added as the project evolves.

## Notes

This project prioritizes clarity, code organization, and maintainability.
