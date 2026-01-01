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

## Data Sources & Flow

Subway stations and lines data are obtained from the Buenos Aires City Open Data Portal.

Raw datasets (CSV / GeoJSON) are stored under `data/raw/`, normalized, and transformed into GeoJSON via a separated script.

The resulting GeoJSON files, stored under `data/processed`, are then rendered on the map using MapLibre.

## Project Structure

```text
├── data/
│   ├── processed/          # Normalized GeoJSON files
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

## Setup & Run

Instructions will be added once the initial implementation is ready.

## Notes

This project prioritizes clarity, code organization, and maintainability.
