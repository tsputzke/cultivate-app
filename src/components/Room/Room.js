import React, { Component } from 'react'
import NavBack from '../NavBack/NavBack';
import { Link } from 'react-router-dom'
import '../Room/Room.css'

export default class Room extends Component {
  render() {
    return (
      <div className='room'>
        <header id="nav=header">
          <NavBack navBack='/user/1'/>
        </header>
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
            <div id="chart"><h2>Data Chart</h2></div>
            <h3>Weekly Lows and Highs:</h3>
            <ul>
              <li><strong>Tempature (C): </strong>19, 25</li>
              <li><strong>rH (%): </strong>64, 81</li>
              <li><strong>CO2 (ppm): </strong>445, 560</li>
              <li><strong>Light (umol/m2/s): </strong>0, 168</li>
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