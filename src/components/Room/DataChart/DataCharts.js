import React, { Component } from "react";
import { Chart } from "react-google-charts";
import moment from 'moment'
import 'moment-timezone';


export default class DataCharts extends Component {
  render() {
    const dateArray = this.props.dateArray;
    // Set colors for chart
    const chartColors = ['blue', 'green', 'red', 'orange'];
    // const chartColors = ['#f00', '#0f0', '#00f', '#0ff'];


    // CHART
    
    const data = [
      ["Date", "Temp (C)", 'RH (%)', 'CO2 (ppm) [x 10]', 'light (PPFD)']
    ];
    
    // Format dateArray data and push to chart
    
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
      colors: chartColors
    };


    // LEGEND

    // Get high or low value for an 'item' (eg. 'temp') passed in as an argument
    function lowVal(item) {
      let itemArray = getArrayByItem(item);
      return itemArray.sort()[0]
    }

    function highVal(item) {
      let itemArray = getArrayByItem(item);
      return itemArray.sort().reverse()[0]
    }

    // Makes an array of values of an item passed in as an argument
    function getArrayByItem(item) {
      const highLows = { temp: [], rh: [], co2: [], light: [] };

      dateArray.forEach(function(date) {
        highLows.temp.push(date.temperature)
        highLows.rh.push(date.rh)
        highLows.co2.push(date.co2)
        highLows.light.push(date.light)
      })

      for (var key in highLows) {
        if(item === key) {
          return (highLows[key])
        }
      }
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
        <ul>
          <li><span style={{color: chartColors[0]}}>---- </span><strong>Temp (C): </strong>Low: {lowVal('temp')}, High: {highVal('temp')}</li>
          <li><span style={{color: chartColors[1]}}>---- </span><strong>RH (%): </strong>Low: {lowVal('rh')}, High: {highVal('rh')}</li>
          <li><span style={{color: chartColors[2]}}>---- </span><strong>CO<sub>2</sub> (ppm) [x10]: </strong>Low: {lowVal('co2')}, High: {highVal('co2')}</li>
          <li><span style={{color: chartColors[3]}}>---- </span><strong>Light (PPFD): </strong>Low: {lowVal('light')}, High: {highVal('light')}</li>
        </ul>
      </div>
    );
  }
}
