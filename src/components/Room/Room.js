import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataCharts from './DataChart/DataCharts'
import moment from 'moment'

export default class Room extends Component {
  state = {
    dateArray: [],
    room_id: 1,
    room: 'Demo Room'
  }

  componentWillMount() {
    // Get room data based on the logged-in room ID
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
        // Add data to state if data was from X months of startDate
        let startDate = moment(Date.now()).subtract(3, 'months') 
        let dateArray = [];

        this.state.data.forEach(function(a) {
          let date = moment.utc(a.date_added).format("YYYY MM DD")
          startDate = moment.utc(startDate).format("YYYY MM DD")
    
          if(date > startDate) {
            a.date_added = date
            dateArray.push(a)
          }
        })

        this.setState({dateArray: dateArray})
        // console.log('state',this.state.dateArray)
      })
      // If call fails
      .catch(err => console.log(err));
  };

  render() {
    const logbook = this.state.dateArray.map(function(date, i) {
      return <section className="log" key={i}>
              <h3>{moment(date.date_added).format("MM/DD")}</h3>
              <pre>{date.comments}</pre>
            </section>
    })

    return (
      <div className='room'>
        <h1 className='center-align'>{this.state.room}</h1>
        <section className="flex-section">
          <div className="logbook">
            <h2 className="logbook-title">Logbook</h2>
            {logbook.reverse()}
          </div>
          <div className="right-div">
            <DataCharts dateArray={this.state.dateArray} />
            
            <Link to='/add-data'>
              <button className="data-button">Add Data</button>
            </Link>
            <br />
            <Link to='/view-data'>
              <button className="data-button">View Data</button>
            </Link>
          </div>
        </section>
      </div>
    )
  }
}