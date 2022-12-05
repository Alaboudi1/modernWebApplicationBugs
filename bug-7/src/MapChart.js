import React, { useRef, useEffect, useState } from "react";
import * as d3 from "d3";
import { feature, mesh } from "topojson-client";
import useResizeObserver from "./lib/useResizeObserver";

import { positionTooltip, getCountyProps } from "./lib/utils";

export const colorScale = d3
  .scaleDivergingPow([30, 55.5, 80], d3.interpolatePiYG)
  .unknown("#fff");

const MapChart = ({ data, geo, property }) => {
  const svgRef = useRef();
  const wrapperRef = useRef();
  const tooltipRef = useRef();
  // get current dimensions of the element we give it
  const dimensions = useResizeObserver(wrapperRef);
  useEffect(() => {
    if (!geo) return;
    const svg = d3.select(svgRef.current);
    const { width, height } =
      dimensions || wrapperRef.current.getBoundingClientRect();

    const features = feature(geo, geo.objects.us_county_2019).features.filter(
      (d) => d.properties.STATEFP === "42"
    );
    const turnoutPerc = new Map(data.map((d) => [d.FIPS, d.turnoutPerc]));

    // center and scale state
    var projection = d3
      .geoConicConformal()
      .parallels([40 + 53 / 60, 41 + 57 / 60])
      .rotate([77 + 45 / 60, 0])
      .fitSize([width, height], { type: "FeatureCollection", features });

    const path = d3.geoPath().projection(projection);
    // Add tooltip
    const container = d3.select("#tooltip-container");
    const t = d3.transition().duration(1000);

    // draw counties
    svg
      .append("g")
      .selectAll("path")
      .data(features)
      .join(
        (enter) =>
          enter
            .append("path")
            .attr("fill", (d) =>
              colorScale(turnoutPerc.get(d.properties.GEOID))
            )
            .attr("d", path)
            .on("mouseover", (event, d) => {
              d3.select(event.currentTarget)
                .raise()
                .style("stroke", "#000")
                .style("stroke-width", 2)
                .style("cursor", "pointer");
              event.preventDefault();
              let [x, y] = d3.pointer(event);
              let ttPos = positionTooltip(x, y);
              let countyData = {
                showTT: true,
                FIPS: d.properties.GEOID,
                mouse: { x: ttPos.x, y: ttPos.y }
              };
              updateCurrentCounty(countyData);
              let countyProps = getCountyProps(countyData, data);
              container
                .style("visibility", "visible")
                .style("top", () => {
                  let ttHeight = 400;
                  if (y < ttHeight / 2) {
                    return event.pageY - 50 + "px";
                  } else if (y >= ttHeight / 2 && y < height - ttHeight / 2) {
                    return event.pageY - ttHeight / 2 + "px";
                  } else {
                    return event.pageY - ttHeight + "px";
                  }
                })
                .style("left", event.pageX + 60 + "px");
              console.log("countyProps: ", countyProps);
              console.log("countyData: ", countyData);
              let header;
              if (countyProps.FIPS === countyData.FIPS) {
                // Header
                const header = container
                  .append("div")
                  .attr("class", "tt-header");
                const location = header
                  .append("div")
                  .attr("class", "tt-location");
                location
                  .append("h1")
                  .attr("class", "tt-county")
                  .html(countyProps.countyName);
                location
                  .append("h2")
                  .attr("class", "tt-state")
                  .html(countyProps.state);
              }
            })
            .on("mouseout", (event, d) => {
              updateCurrentCounty({
                showTT: false,
                FIPS: null
              });
              d3.select(event.currentTarget)
                .style("stroke", "none")
                .style("cursor", "default");
            }),
        (update) => update.call((update) => update.transition(t)),
        (exit) => exit.remove()
      );

    function updateCurrentCounty(d) {
      console.log("id of the current hovered county: ", d);
      // emit the id of the current hovered county

      svg.node().value = d;
      svg.node().dispatchEvent(new CustomEvent("input"));
    }

    updateCurrentCounty({
      showTT: false,
      FIPS: null
    });
  }, [geo, data, property]);

  const svgStyles = {
    height: "500px",
    width: "500px"
  };

  const tooltipStyles = {
    visibility: "hidden",
    backgroundColor: "#FFFFFF",
    position: "absolute"
  };

  return (
    <>
      <div ref={wrapperRef} style={{ marginBottom: "2rem " }} id="chartArea">
        {/*render an svg that and access it in the useEffect hook after the dom elements have been rendered*/}
        <svg style={svgStyles} ref={svgRef}></svg>
      </div>
      <div ref={tooltipRef} style={tooltipStyles} id="tooltip-container"></div>
    </>
  );
};

export default MapChart;
