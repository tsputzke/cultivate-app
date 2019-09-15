import React, { Component } from 'react'
import moment from 'moment'
import TokenService from '../../services/token-service'
import UserContext from '../../context/user-context'

export default class ViewData extends Component {
  static contextType = UserContext
  state = {
    dateArray: [],
  }

  UNSAFE_componentWillMount() {
    // Get room_data for a given room
    fetch(`http://localhost:8000/api/room-data/${window.sessionStorage.getItem('room_id')}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        'authorization': `bearer ${TokenService.getAuthToken()}`
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
    const deleteByDate = this.context.deleteByDate
    // Create table row for each date from the dataArray in state
    const populateTable = this.state.dateArray.reverse().map((date, i) => {
      return <tr key={i}><td><button onClick={() => deleteByDate(date.room_data_id)}>Delete</button></td><td>{moment.utc(date.date_added).format("MM/DD")}</td><td>{date.temperature}</td><td>{date.rh}</td><td>{date.co2}</td><td>{date.light}</td><td><pre>{date.comments}</pre></td></tr>}) 

    return (
      <section className='view-data'>
        <h1>View Data</h1>

        <table className='view-data-table'>
          <tbody>
            <tr>
              <th> Delete </th>
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