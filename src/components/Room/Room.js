import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataCharts from './DataChart/DataCharts'
import ChartLegend from './ChartLegend/ChartLegend'
import moment from 'moment'
// import 'moment-timezone';
import '../Room/Room.css'

export default class Room extends Component {
  state = {
    dateArray: [],
    user: 1,
    room: 'Demo Room'
  }

  componentWillMount() {
    // Get room data based on the logged-in user
    fetch(`http://localhost:8000/api/room-data/${this.state.user}`, {
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
        // Sort dateArray by date_added
        dateArray.sort((a,b) => (a.date_added > b.date_added ? 1 : -1))

        this.setState({dateArray: dateArray})
        // console.log('state',this.state.dateArray)
      })
      // If call fails
      .catch(err => console.log(err));
  };

  render() {
    // Set colors for chart
    const chartColors = ['#f00', '#0f0', '#00f', '#0ff'];

    const logbook = this.state.dateArray.map(function(date, i) {
      return <section className="log" key={i}>
              <h3>{moment(date.date_added).format("MM/DD")}</h3>
              <p>{date.comments}</p>
            </section>
    })

    return (
      <div className='room'>
        <h1 className='room-title'>{this.state.room}</h1>
        <section id="flex-section">
          <div id="logbook-div">
            <h2 id="logbook-header">Logbook</h2>
            {logbook.reverse()}
          </div>
          <div id="right-div">
            <DataCharts 
              dateArray={this.state.dateArray} 
              chartColors={chartColors} 
            />
            <ChartLegend 
              dateArray={this.state.dateArray}
              chartColors={chartColors}
            />
            
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