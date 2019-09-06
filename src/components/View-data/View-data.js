import React, { Component } from 'react'
import moment from 'moment'
import '../View-data/View-data.css'

export default class ViewData extends Component {
  state = {
    dateArray: [],
    room_id: 1,
    room: 'Demo Room'
  }

  componentWillMount() {
    // Get room_data for a given room
    fetch(`http://localhost:8000/api/room-data/${this.state.room_id}`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      // If call is successfull
      .then(res => res.json() )
      .then(res => {
        let dateArray = [];
        res.forEach(date => dateArray.push(date))
        this.setState({dateArray: dateArray})
      })
      // If call fails
      .catch(err => console.log(err));
  };

  render() {
    // Create table row for each date from the dataArray in state
    const populateTable = this.state.dateArray.reverse().map((date, i) => {
      return <tr key={i}><th>{moment.utc(date.date_added).format("MM/DD")}</th><td>{date.temperature}</td><td>{date.rh}</td><td>{date.co2}</td><td>{date.light}</td><td><pre>{date.comments}</pre></td></tr>}) 

    return (
      <section className='view-data'>
        <h1>View Data</h1>

        <table>
          <tbody>
            <tr>
              <th> Date </th>
              <th> Temperature </th>
              <th> RH </th>
              <th> CO2 </th>
              <th> Light </th>
              <th> Comments </th>
            </tr>
            {populateTable}
          </tbody>
        </table>
      </section>
    )
  }
}