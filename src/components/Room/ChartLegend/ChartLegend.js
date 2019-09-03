import React, { Component } from 'react'

export default class ChartLegend extends Component {
  render() {
    const dateArray = this.props.dateArray;
    const colors = this.props.chartColors;

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

    // Insert chart colors into 'highs, lows' display
    function color(index) {
      return {color: colors[index]}
    }
        
    return(
      <ul>
        <li><span style={color(0)}>---- </span><strong>Temp (C): </strong>Low: {lowVal('temp')}, High: {highVal('temp')}</li>
        <li><span style={color(1)}>---- </span><strong>rH (%): </strong>Low: {lowVal('rh')}, High: {highVal('rh')}</li>
        <li><span style={color(2)}>---- </span><strong>CO<sub>2</sub> (ppm) [x10]: </strong>Low: {lowVal('co2')}, High: {highVal('co2')}</li>
        <li><span style={color(3)}>---- </span><strong>Light (PPFD): </strong>Low: {lowVal('light')}, High: {highVal('light')}</li>
      </ul>
    )
  }
}
