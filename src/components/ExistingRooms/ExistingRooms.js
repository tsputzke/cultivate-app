import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class ExistingRooms extends Component {
  render(){
    const rooms = this.props.rooms.map(function(room, i) {
      return <li key={i}>{room.room_name}</li>
    })

    return(
      <section id="existing-rooms">
        <h2>Choose Existing Room:</h2>
        <ul>
          <li><Link to="/user/1/room/1">Example Room</Link></li>
          {rooms}
        </ul>
      </section>
    )
  }
}