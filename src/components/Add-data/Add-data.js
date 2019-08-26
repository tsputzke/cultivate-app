import React, { Component } from 'react';
import NavBack from '../NavBack/NavBack';
import './Add-data.css';

export default class AddData extends Component {
  render() {
    return (
      <div className='add-data'>
        <header id="nav=header">
          <NavBack navBack='/user/1/room/1'/>
        </header>
        <section id="add-data-section">
          <h1>Add Data</h1>
          <form id="add-data-form">
            <div id="inputs">
              <div>
                <label htmlFor="date">Date: </label>
                <input type="text" name="date" required />
              </div>
              <div>
                <label htmlFor="temperature">Temperature (C): </label>
                <input type="text" name="temperature" />
              </div>
              <div>
                <label htmlFor="rh">rH (%): </label>
                <input type="text" name="rh" />
              </div>
              <div>
                <label htmlFor="co2">CO2 (ppm): </label>
                <input type="text" name="co2" />
              </div>
              <div>
                <label htmlFor="light">Light (umol/m2/s): </label>
                <input type="text" name="light" />
              </div>
            </div>
            <div>
              <label htmlFor="comments">Comments: </label>
              <br />
              <input id="comments-textbox" type="text" name="comments" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    )
  }
}