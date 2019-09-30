import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service'
import DataCharts from './DataChart/DataCharts'
import moment from 'moment'
import config from '../../config'
import UserContext from '../../context/user-context'
import NothingImg from '../../images/nothing-pixabay.jpg'

export default class Room extends Component {
  static contextType = UserContext

  state = {
    dateArray: [],
  }

  UNSAFE_componentWillMount() {
    // Get room data based on the logged-in room ID
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
        let data = [];
        res.map(date => data.push(date))
        this.setState({data: data})
      })
      .then(res => {
        // Add data to state if data was from X months of startDate
        let startDate = moment(Date.now()).subtract(6, 'month') 
        let dateArray = [];

        this.state.data.forEach(function(a) {
          let date = moment.utc(a.date_added, "YYYY MM DD")
          startDate = moment.utc(startDate, "YYYY MM DD")
    
          if(date > startDate) {
            a.date_added = date
            dateArray.push(a)
          }
        })

        this.setState({dateArray: dateArray})
      })
      // If call fails
      .catch(err => console.log(err));
  };

  render() {
    const logbook = this.state.dateArray.map(function(date, i) {
      if(date.comments) {
        return  (<section className="log" key={i}>
                  <h3>{moment.utc(date.date_added).format("MM/DD")}</h3>
                  <p>{date.comments}</p>
                </section>) 
      } else {return null}
    })
  
    const deleteRoom = this.context.deleteRoom
    const hasData = this.state.dateArray
    return (
      <div className='room'>
        <h1 className='room-name-title center-align'>{(window.sessionStorage.getItem('room_name')).toUpperCase()}</h1>
        {!(window.sessionStorage.getItem('room_description') === 'null') ? <p className='room-description center-align'><strong>{window.sessionStorage.getItem('room_description')}</strong></p> : ''}
        <section className="flex-section">
          <div className="logbook">
            <h2 className="logbook-title">Logbook</h2>
            {logbook.reverse()}
          </div>
          <div className="right-div">
            {(hasData.length > 0) ? (
              <DataCharts dateArray={this.state.dateArray} />
            ) : <img className="no-chart-data" src={NothingImg} alt="The word 'Nothing' written on a chalkboard" />}
            <section className="data-buttons">
              <Link to='/add-data'>
                <button className="data-button">Add Data</button>
              </Link>
              <br />
              <Link to='/view-data'>
                <button className="data-button">View Data</button>
              </Link>
              <button 
              className="delete-room rbutton"
              onClick={() => {
                if (window.confirm("Are you sure you want to delete this room?"))
                deleteRoom(window.sessionStorage.getItem('room_id'))
                window.location ='/show-user'
              }}>
              Delete Room
            </button>
            </section>
          </div>
        </section>
      </div>
    )
  }
}