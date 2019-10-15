import React, { Component } from "react";
import { Chart } from "react-google-charts";
import moment from 'moment'
import 'moment-timezone';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLeaf } from '@fortawesome/free-solid-svg-icons'

const leafIcon = <FontAwesomeIcon icon={faLeaf} />



export default class DataCharts extends Component {
  render() {
    // Sets number of data points in dateArray based on 'displayNum' in state
    const dateArray = this.props.dateArray.reverse().slice(0,5);
    
    // Set colors for chart
    const chartColors = ['black', 'green', 'maroon', 'orange'];


    // CHART
    
    const data = [
      ["Date", "Temp (C)", 'RH (%)', 'CO2 (ppm) [x 10]', 'light (PPFD)']
    ];
    
    // Format dateArray data and push to chart
    
    dateArray.reverse().forEach(function(date) {
      let dateAdded = moment.utc(date.date_added).format("MM/DD");
      let dateCo2 = (date.co2) ? date.co2/10 : null;
      data.push([dateAdded, date.temperature, date.rh, dateCo2, date.light])
    })

    
    const options = {
      curveType: "function",
      legend: {position: "none"},
      colors: chartColors,
      chartArea: {top: 30, bottom: 30, left: 38, width: '100%'},
      yAxis: {
        viewWindow: {
            min: 0
        }
    }
    };


    // LEGEND

    // Get high or low value for an 'item' (eg. 'temp') passed in as an argument
    function lowVal(item) {
      let itemArray = getArrayByItem(item);
      return itemArray.sort(function(a, b){return a-b})[0]
    }

    function highVal(item) {
      let itemArray = getArrayByItem(item);
      return itemArray.sort(function(a, b){return a-b}).reverse()[0]
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
      <div>
        <div className="overflow">
          <p className="lastData-title">* co2 reduced by factor of 10</p>
          <Chart
            className="chart-display"
            chartType="LineChart"
            data={data}
            options={options}
            width="100%"
          />
        </div>
        <div className="chart-table-div">
          <p>Five date lows and highs: </p>
          <table className="chart-table">
            <tbody>
              <tr><td><span style={{color: chartColors[0]}}>{leafIcon} </span> <strong>Temp (c): </strong></td><td>{lowVal('temp')}, {highVal('temp')}</td></tr>
              <tr><td><span style={{color: chartColors[1]}}>{leafIcon} </span> <strong>RH (%): </strong></td><td>{lowVal('rh')}, {highVal('rh')}</td></tr>
              <tr><td><span style={{color: chartColors[2]}}>{leafIcon} </span> <strong>CO<sub>2</sub> (ppm): </strong></td><td>{lowVal('co2')}, {highVal('co2')}</td></tr>
              <tr><td><span style={{color: chartColors[3]}}>{leafIcon} </span> <strong>Light (ppfd): </strong></td><td>{lowVal('light')}, {highVal('light')}</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}
