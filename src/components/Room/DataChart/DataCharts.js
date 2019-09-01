import React, { Component } from "react";
import { Chart } from "react-google-charts";
import './DataCharts.css'

export default class DataCharts extends Component {
  render() {
    const data = [
      ["Date", "Temp (C)", 'rH (%)', 'CO2 (ppm) [x 100]', 'light (PPFD)'],
      ["June 4", 23, 74, 44, 80],
      ["June 7", 23, 75, 55, 120],
      ["June 14", 24, 76, 63, 68],
      ["June 17", 26, 82, 59, 78],
      ["June 21", 23, 54, 60, 113],   
      ["June 28", 23, 54, 60, 113]
    ];
    
    const options = {
      curveType: "function",
      legend: {position: "none"},
      chartArea: {
        top: 20,
        bottom: 20
      },
      colors: this.props.chartColors
    };
    return (
      <div className="chart-display">
        <Chart
          chartType="LineChart"
          data={data}
          options={options}
          width="600px"
          height="300px"
        />
      </div>
    );
  }
}
