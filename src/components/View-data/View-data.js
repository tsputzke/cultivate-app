import React, { Component } from 'react'
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
        let data = [];
        res.map(date => data.push(date))
        this.setState({data: data})
      })
      .then(res => {
        // Sort dateArray by date_added
        const dateArray = this.state.data.sort((a,b) => (a.date_added > b.date_added ? 1 : -1))
        this.setState({dateArray: dateArray})
      })
      // If call fails
      .catch(err => console.log(err));
  };

  render() {
    // Create table row for each date from the dataArray in state
    const populateTable = this.state.dateArray.reverse().map((date, i) => {
      return <tr key={i}><th>{date.date_added}</th><td>{date.temperature}</td><td>{date.rh}</td><td>{date.co2}</td><td>{date.light}</td><td><pre>{date.comments}</pre></td></tr>}) 

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