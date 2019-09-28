import React, { Component } from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import TokenService from '../../services/token-service'
import UserContext from '../../context/user-context'
import config from '../../config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons'

const backIcon = <FontAwesomeIcon icon={faArrowAltCircleLeft} />

export default class ViewData extends Component {
  static contextType = UserContext
  state = {
    dateArray: [],
  }

  UNSAFE_componentWillMount() {
    // Get room_data based on a given room_id
    fetch(config.API_ENDPOINT + `/api/room-data/${window.sessionStorage.getItem('room_id')}`, {
      method: "GET",
      headers: {
        "content-type": "application/json",
        'authorization': `bearer ${TokenService.getAuthToken()}`
      }
    })
      // If call is successful
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
    // Create table row for each date from the dateArray in state
    // const populateTable = this.state.dateArray.reverse().map((date, i) => {
    //   return <tr key={i}><td><button onClick={() => deleteByDate(date.room_data_id)}>Delete</button></td><td>{moment.utc(date.date_added).format("MM/DD")}</td><td>{date.temperature}</td><td>{date.rh}</td><td>{date.co2}</td><td>{date.light}</td><td><p>{date.comments}</p></td></tr>}) 

    const insertData = this.state.dateArray.reverse().map((date, i) => {
      return (
        <section className="inserted-data" key={i}>
          <h2>{moment.utc(date.date_added).format("MM / DD / YY")}</h2>
          <ul className="inserted-data-ul">
            <li><span className="strong">Temp (C): </span>{date.temperature}</li>
            <li><span className="strong">RH (%): </span>{date.rh}</li>
            <li><span className="strong">CO2 (ppm): </span>{date.co2}</li>
            <li><span className="strong">Light (ppfd): </span>{date.light}</li>
          </ul>
          <p className="inserted-data-comments">{date.comments}</p>
          <button 
            className="delete-data" 
            onClick={() => {
              if (window.confirm("Are you sure you want to delete?"))
              deleteByDate(date.room_data_id)
            }}>
              Delete
          </button>
        </section>
      )
    }) 

    return (
      <section className='view-data'>
        {(insertData.length > 0) ? insertData : <h2 className="no-data">No Data to Display</h2>}
      </section>
    )
  }
}
