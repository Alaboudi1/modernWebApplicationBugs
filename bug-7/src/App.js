import { useEffect, useState } from "react";
import "./styles.css";
import * as d3 from "d3";
import MapChart from "./MapChart";

function App() {
  const [csvData, setCsvData] = useState("");
  useEffect(() => {
    d3.csv("./pa_voter_turnout_2016.csv").then((csvData) => {
      csvData.forEach((row) => {
        row.totalVotes = +row.totalVotes;
        row.VAP = +row.VAP;
        row.turnoutPerc = +row.turnoutPerc;
        row.nNonVote = +row.nNonVote;
        row.percFromMean = +row.percFromMean;
      });
      setCsvData(csvData);
    });
  }, []);

  const [geo, setGeo] = useState("");
  useEffect(() => {
    d3.json("./us_county_2019.topo.json").then((topoJsonData) => {
      setGeo(topoJsonData);
    });
  }, []);

  {
    !csvData && <h1>Loading...</h1>;
  }

  return (
    <>
      <div className="mapContainer">
        <MapChart data={csvData} geo={geo} />
      </div>
    </>
  );
}

export default App;
