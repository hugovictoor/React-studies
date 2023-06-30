import React from "react";
import ChartBars from "./ChartBars";
import "./Chart.css";

const Chart = (props) => {
  const valueArray = props.dataPoints.map((dataPoint) => dataPoint.value);
  const maximum = Math.max(...valueArray);

  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBars
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={maximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;
