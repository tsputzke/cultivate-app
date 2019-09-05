import React, { Component } from 'react';
import moment from 'moment'
import './Add-data.css';

export default class AddData extends Component {
  state = {
    user: 1,
    room_id: 1,
  }

  handleAddData = e => {  
    e.preventDefault();

    const date_added = e.target.date_added.value;
    const temperature = e.target.temperature.value;
    const rh = e.target.rh.value;
    const co2 = e.target.co2.value;
    const light = e.target.light.value;
    const comments = e.target.comments.value;

    // //validate the input
    // if (user_name === "") {
    //   alert("Please enter username");
    // } else if (password === "") {
    //   alert("Please enter password");
    // }

    const newDataObject = {
      room_id: this.state.room_id,
      date_added: date_added,
      temperature: temperature,
      rh: rh,
      co2: co2,
      light: light,
      comments: comments
    };

    fetch(`http://localhost:8000/api/room-data`, {
      method: "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(newDataObject)
    })
      // Reload page if call is successfull
      .then(window.location.reload())
      // If call fails
      .catch(err => console.log(err));
  };

  render() {
    return (
      <div className='add-data'>
        <section id="add-data-section">
          <h1>Add Data</h1>
          <form id="add-data-form" onSubmit={this.handleAddData}>
            <div id="inputs">
              <div>
                <label htmlFor="date_added">Date: </label>
                <input type="date" name="date_added" defaultValue={moment.utc().format("YYYY-MM-DD")} required />
              </div>
              <div>
                <label htmlFor="temperature">Temperature (C): </label>
                <input type="text" name="temperature"/>
              </div>
              <div>
                <label htmlFor="rh">RH (%): </label>
                <input type="text" name="rh" />
              </div>
              <div>
                <label htmlFor="co2">CO2 (ppm): </label>
                <input type="text" name="co2" />
              </div>
              <div>
                <label htmlFor="light">Light (ppfd): </label>
                <input type="text" name="light" />
              </div>
            </div>
            <div>
              <label htmlFor="comments">Comments: </label>
              <br />
              <textarea name="comments" id="comments-textbox" rows="10" cols="30"></textarea> 
            </div>
            <button type="submit">Submit</button>
          </form>
        </section>
      </div>
    )
  }
}