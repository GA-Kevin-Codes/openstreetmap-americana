"use strict";

import * as Label from "../constants/label.js";
import * as Color from "../constants/color.js";

const baseFilter = ["!=", ["get", "class"], "aboriginal_lands"];

export const themeParkFill = {
  id: "theme_park_fill",
  type: "fill",
  source: "openmaptiles",
  "source-layer": "park",
  filter: ["all", baseFilter, ["==", ["get", "class"], "theme_park"]],
  paint: {
    "fill-color": Color.parkFill,
    "fill-opacity": 0.65,
  },
};

export const themeParkOutline = {
  id: "theme_park_outline",
  type: "line",
  source: "openmaptiles",
  "source-layer": "park",
  filter: ["all", baseFilter, ["==", ["get", "class"], "theme_park"]],
  paint: {
    "line-color": "#8000ff",
    "line-width": 2.5,
    "line-blur": 0.5,
  },
};

export const themeParkLabel = {
  id: "theme_park_label",
  type: "symbol",
  source: "openmaptiles",
  "source-layer": "poi",
  filter: ["==", ["get", "class"], "theme_park"],
  layout: {
    "text-field": Label.localizedName,
    "text-font": ["Americana-Bold"],
    "text-size": 12,
    "symbol-sort-key": ["get", "rank"],
  },
  paint: {
    "text-color": "#8000ff",
    "text-halo-blur": 1,
    "text-halo-color": Color.parkLabelHalo ?? "#ffffff",
    "text-halo-width": 1,
  },
};

export const themeParkLayers = [
  themeParkFill,
  themeParkOutline,
  themeParkLabel,
];

export const themeParkLegendEntry = {
  description: "Theme Park",
  layers: ["theme_park_fill", "theme_park_outline", "theme_park_label"],
};

export default themeParkLayers;
