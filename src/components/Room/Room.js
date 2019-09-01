import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataCharts from './DataChart/DataCharts'
import '../Room/Room.css'

export default class Room extends Component {
  render() {
    // Colors for chart
    const chartColors = ['#f00', '#0f0', '#00f', '#0ff'];

    // Insert chart colors into 'highs, lows' display
    function style(index) {
      return {color: chartColors[index]}
    }

    return (
      <div className='room'>
        <h1 className='room-title'>Example Room</h1>
        <section id="flex-section">
          <div id="logbook-div">
            <h2 id="logbook-header">Logbook</h2>
            <section className="log"><h3>May 5</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec et odio. Nulla aliquet enim tortor at. Sed adipiscing diam donec adipiscing tristique risus nec. </p></section>
            <section className="log"><h3>April 28</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec et odio. Nulla aliquet enim tortor at. Sed adipiscing diam donec adipiscing tristique risus nec. </p></section>
            <section className="log"><h3>April 21</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec et odio. Nulla aliquet enim tortor at. Sed adipiscing diam donec adipiscing tristique risus nec. </p></section>
            <section className="log"><h3>April 14</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec et odio. Nulla aliquet enim tortor at. Sed adipiscing diam donec adipiscing tristique risus nec. </p></section>
            <section className="log"><h3>April 7</h3><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Congue eu consequat ac felis donec et odio. Nulla aliquet enim tortor at. Sed adipiscing diam donec adipiscing tristique risus nec. </p></section>
          </div>
          <div id="right-div">
            <DataCharts chartColors={chartColors} />
            <ul>
              <li><span style={style(0)}>---- </span><strong>Temp (C): </strong>19, 25</li>
              <li><span style={style(1)}>---- </span><strong>rH (%): </strong>64, 81</li>
              <li><span style={style(2)}>---- </span><strong>CO<sub>2</sub> (ppm): </strong>445, 560</li>
              <li><span style={style(3)}>---- </span><strong>Light (PPFD): </strong>0, 168</li>
            </ul>
            
            <Link to='/user/:userid/room/:roomid/add-data'><button className="data-button">Add Data</button></Link>
            <br />
            <Link to='/user/:userid/room/:roomid/view-data'><button className="data-button">View Data</button></Link>
          </div>
        </section>
      </div>
    )
  }
}