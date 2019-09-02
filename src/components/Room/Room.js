import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import DataCharts from './DataChart/DataCharts'
import ChartLegend from './ChartLegend/ChartLegend'
import Moment from 'react-moment';
import moment from 'moment'
import 'moment-timezone';
import '../Room/Room.css'

export default class Room extends Component {
  state = {
    data: [],
    dateArray: [],
    user: 1
  }

  componentDidMount() {
    fetch(`http://localhost:8000/api/room-data/${this.state.user}`, {
      method: "GET",
      headers: {
        "content-type": "application/json"
      }
    })
      // If the call is successfull
      .then(res => res.json() )
      .then(res => {
        let data = [];
        res.map(date => data.push(date))
        this.setState({data: data})
      })
      .then(res => {
        let todayDate = Date.now()
        let startDate = moment(todayDate).subtract(4, 'months') 
        let dateArray = [];

        this.state.data.forEach(function(a) {
          let date = moment.utc(a.date_added).format("MM/DD/YY")
          startDate = moment.utc(startDate).format("MM/DD/YY")
    
          if(date > startDate) {
            dateArray.push(a)
          }
        })
        this.setState({dateArray: dateArray})
      })
      // If the call fails
      .catch(err => console.log(err));
  };

  render() {
    // Set colors for chart
    const chartColors = ['#f00', '#0f0', '#00f', '#0ff'];

    const logbook = this.state.data.map(function(date, i) {
      return <section className="log" key={i}><h3><Moment format="MM/DD" date={date.date_added} /></h3><p>{date.comments}</p></section>
    })

    return (
      <div className='room'>
        <h1 className='room-title'>Example Room</h1>
        <section id="flex-section">
          <div id="logbook-div">
            <h2 id="logbook-header">Logbook</h2>
            {logbook}
          </div>
          <div id="right-div">
            <DataCharts dateArray={this.state.dateArray} chartColors={chartColors} />
            <ChartLegend 
              dateArray={this.state.dateArray}
              chartColors={chartColors}
            />
            
            <Link to='/user/:userid/room/:roomid/add-data'><button className="data-button">Add Data</button></Link>
            <br />
            <Link to='/user/:userid/room/:roomid/view-data'><button className="data-button">View Data</button></Link>
          </div>
        </section>
      </div>
    )
  }
}