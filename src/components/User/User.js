import React, { Component } from 'react'
import ExistingRooms from '../ExistingRooms/ExistingRooms'
import '../User/User.css'

export default class User extends Component {
  state = {
    rooms: [],
    user: 1
  }

  componentDidMount() {
    fetch(`http://localhost:8000/api/rooms/${this.state.user}`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
      },
    })
    //if call is successfull
    .then(res => res.json() )
    .then(res => {
      this.setState({rooms: res})
    })
    //if the call is failing
    .catch(err => console.log(err));
  }

  handleNewRoom = e => {
    e.preventDefault();

    const room_name = e.target.room_name.value;
    const room_description = e.target.room_description.value;
    

    //validate the input
    if (room_name === "") {
      alert('Please enter a room name');
    }

    const newRoomObject = {
      room_name: room_name,
      room_description: room_description
    };
    
    fetch(`http://localhost:8000/api/rooms`, {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify(newRoomObject),
    })
    //if call is successfull
    .then(res => {
      console.log(res)
    })
    //if the call is failing
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='user'>
        <h1 id="user-header">Hello, NAME</h1>
        <section id="user-section">
          <h2 className="form-title">Create Room:</h2>
          <form 
            id="create-room-form"
            onSubmit={this.handleNewRoom}
          >
            <div>
              <label htmlFor="room_name">Room Name: </label>
              <input type="text" name="room_name" required />
            </div>
            <div>
              <label htmlFor="room_description">Description: </label>
              <input type="text" name="room_description" />
            </div>
            <button className="new-room-button">Submit</button>
          </form>
        </section>
        <ExistingRooms rooms={this.state.rooms}/>
      </div>
    )
  }
}