import React, { Component } from 'react';
import moment from 'moment'
import TokenService from '../../services/token-service'
import config from '../../config'

export default class AddData extends Component {

  // Add data for a given date to a room
  handleAddData = e => {  
    e.preventDefault();

    const date_added = e.target.date_added.value;
    const temperature = e.target.temperature.value || null;
    const rh = e.target.rh.value || null;
    const co2 = e.target.co2.value || null;
    const light = e.target.light.value || null;
    const comments = e.target.comments.value;

    const newDataObject = {
      room_id: window.sessionStorage.getItem('room_id'),
      date_added: date_added,
      temperature: temperature,
      rh: rh,
      co2: co2,
      light: light,
      comments: comments
    };
    
    // console.log(newDataObject)
    fetch(config.API_ENDPOINT + `/api/room-data`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`
      },
      body: JSON.stringify(newDataObject)
    })
      // If call is successful
      .then(res => {
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      })
      // Show room if call is successful
      .then(window.location= '/show-room')
      // .then(this.props.history.push(`/show-room`))
      .catch(err => {
				console.log(err);
			});
  };

  render() {
    return (
      <div className='add-data'>
        <section className="add-data-form">
          <form onSubmit={this.handleAddData}>
            <fieldset>
              <legend className="data-legend">Add Data: </legend>
              <table className="add-data-table">
                <tbody>
                  <tr>
                    <td><label htmlFor="date_added">Date: </label></td>
                    <td><input type="date" name="date_added" defaultValue={moment.utc().format("YYYY-MM-DD")} required /></td>
                  </tr>
                  <tr className="short-input">
                    <td><label htmlFor="temperature">Temp (C): </label></td>
                    <td><input required  type="number" name="temperature"/></td>
                    <td><label htmlFor="rh">RH (%): </label></td>
                    <td><input required type="number" name="rh" /></td>
                  </tr>
                  <tr className="short-input">
                    <td><label htmlFor="co2">CO2 (ppm): </label></td>
                    <td><input required type="number" name="co2" /></td>
                    <td><label htmlFor="light">Light (ppfd): </label></td>
                    <td><input required type="number" name="light" /></td>
                  </tr>
                </tbody>
              </table>
            <div>
              <label htmlFor="comments">Comments: </label>
              <br />
              <textarea name="comments" className="comments-textbox" rows="10" cols="30"></textarea> 
            </div>
            
            <button className="add-data-button" type="submit">Submit</button>

            </fieldset>
          </form>
        </section>
      </div>
    )
  }
}