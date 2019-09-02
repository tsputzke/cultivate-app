import React, { Component } from 'react'

export default class ChartLegend extends Component {
  render() {

    // if(this.props.dateArray) {
    //   // make array of each value
    //   let 
    //   function avgValues(date) {
    //     dateArray = this.props.dateArray;
    //     dateArray.forEach
    //   }
      
    //   dateArray = this.props.dateArray;
    //   dateArray.forEach(function(date) {
    //     let dateAdded = moment.utc(date.date_added).format("MM/DD");
    //     let dateCo2 = date.co2/10;
    //     data.push([dateAdded, date.temperature, date.rh, dateCo2, date.light])
    //     // data.push([`${date.date_added}, ${date.temperature}, ${date.rh}, ${date.co2}, ${date.light}`])
    //   })
    // }

    const colors = this.props.chartColors

    // Insert chart colors into 'highs, lows' display
    function color(index) {
      return {color: colors[index]}
    }
        
    return(
      <ul>
        <li><span style={color(0)}>---- </span><strong>Temp (C): </strong>19, 25</li>
        <li><span style={color(1)}>---- </span><strong>rH (%): </strong>64, 81</li>
        <li><span style={color(2)}>---- </span><strong>CO<sub>2</sub> (ppm) [x10]: </strong>445, 560</li>
        <li><span style={color(3)}>---- </span><strong>Light (PPFD): </strong>0, 168</li>
      </ul>
    )
  }
}
