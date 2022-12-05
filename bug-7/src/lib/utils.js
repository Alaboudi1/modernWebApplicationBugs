import * as d3 from "d3";
import { colorScale } from "../MapChart";

export const stateAbbrevByFIPS = (data) => {
  return new Map(data.map((d) => [d.FIPS, d.stateAbbrev]));
};

export const turnoutPerc = (data) => {
  return new Map(data.map((d) => [d.FIPS, d.turnoutPerc]));
};

export const getCountyProps = (countyData, data) => {
  if (countyData.FIPS) {
    let FIPS = countyData.FIPS;
    return data.filter((d) => d.FIPS === FIPS)[0];
  } else {
    return null;
  }
};

export const positionTooltip = (x, y, width, height) => {
  let xOffset = 20;
  let ttWidth = 300;
  if (x + xOffset + ttWidth > width) {
    x = x - ttWidth - 2 * xOffset;
  } else {
    x = x + xOffset;
  }

  let ttHeight = 400;
  if (y < ttHeight / 2) {
    y = y;
  } else if (y >= ttHeight / 2 && y < height - ttHeight / 2) {
    y = y - ttHeight / 2;
  } else {
    y = y - ttHeight;
  }

  return { x: x, y: y };
};
