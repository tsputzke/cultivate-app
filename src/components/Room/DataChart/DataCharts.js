import React, { Component } from "react";
import { Chart } from "react-google-charts";
import moment from 'moment'
import 'moment-timezone';
import './DataCharts.css'

export default class DataCharts extends Component {
  render() {
    const data = [
      ["Date", "Temp (C)", 'rH (%)', 'CO2 (ppm) [x 10]', 'light (PPFD)']
    ];
    
    // Format dateArray data and push to chart
    const dateArray = this.props.dateArray;
    dateArray.forEach(function(date) {
      let dateAdded = moment.utc(date.date_added).format("MM/DD");
      let dateCo2 = date.co2/10;
      data.push([dateAdded, date.temperature, date.rh, dateCo2, date.light])
    })
    
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
