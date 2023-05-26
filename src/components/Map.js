import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

const MapChart = () => {
  return (
    <ComposableMap
      projection="geoAzimuthalEqualArea"
      projectionConfig={{
        rotate: [-80.0, -20.0, 0],
        center: [-5, 5],
        scale: 1100
      }}

      style={{width:"100%", height: "100%"}}
    >
      <Geographies
        geography="/features.json"
        fill="#0f0f0f"
        stroke="white"
        strokeWidth={0.5}
      >
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography key={geo.rsmKey} geography={geo} />
          ))
        }
      </Geographies>
      <Annotation
        subject={[79, 26]}
        dx={0}
        dy={-30}
        connectorProps={{
          stroke: "#ffffff",
          strokeWidth: 2,
          strokeLinecap: "round"
        }}
      >
        <text x="-8" textAnchor="end" alignmentBaseline="middle" fill="#da4ea2">
          {"India- Noida"}
        </text>
      </Annotation>
    </ComposableMap>
  );
};

export default MapChart;
