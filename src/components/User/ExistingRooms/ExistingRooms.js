import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ExistingRooms extends Component {
  render(){
    const rooms = this.props.rooms.map(function(room, i) {
      return <li key={i}><Link to="/show-room">{room.room_name}</Link></li>
    })

    return(
      <section className="existing-rooms">
        <h2>Choose Existing Room:</h2>
        <ul>
          <li><Link to="/show-room">Example Room</Link></li>
          {rooms}
        </ul>
      </section>
    )
  }
}