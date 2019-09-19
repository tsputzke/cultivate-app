import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import UserContext from '../../context/user-context'
import { Link } from 'react-router-dom';

export default class User extends Component {
  static contextType = UserContext

  constructor(props) {
    super(props);
    this.state = {
        active: false,
        rooms: []
    };
}
  // Add a class to hide example room upon 'delete' event
  toggleClass = () => {
    const currentState = this.state.active;
    this.setState({ active: !currentState });
  };

  componentDidMount() {
    // Update state with array of rooms based on user_id
    const userId = window.sessionStorage.getItem('user_id')
      fetch(`http://localhost:8000/api/users/${userId}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `bearer ${TokenService.getAuthToken()}`,
        },
      })
      // If call is successful
      .then(res => res.json() )
      .then(res => {
        this.setState({rooms: res})
      })
      // If call fails
      .catch(err => console.log(err));
  } 

  // Return list item for each room
  showRooms = () => {
    const deleteRoom = this.context.deleteRoom
    const userRooms = this.state.rooms
    return userRooms.map(function(room, i) {
      return <li key={i}>
        <Link 
          onClick={() => {
              window.sessionStorage.setItem('room_id', room.room_id)
              window.sessionStorage.setItem('room_name', room.room_name)
          }} 
          to='/show-room'>
          {room.room_name}
        </Link>
        <button onClick={() => deleteRoom(room.room_id)}>DELETE</button>
      </li>
    })
  }

  // Handle add new room
  handleNewRoom = e => {
    e.preventDefault();

    const room_name = e.target.room_name.value;
    const room_description = e.target.room_description.value;

    //validate the input
    if (room_name === "") {
      alert('Please enter a room name');
    }

    const newRoomObject = {
      user_id: window.sessionStorage.getItem('user_id'),
      room_name: room_name,
      room_description: room_description
    };
    
    fetch(`http://localhost:8000/api/rooms`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'authorization': `bearer ${TokenService.getAuthToken()}`,
      },
      body: JSON.stringify(newRoomObject),
    })
      // If call is successful
      .then(res =>
        (!res.ok)
          ? res.json().then(e => Promise.reject(e))
          : res.json()
      )
      .then(window.location.reload())
    }

  render() {
    const showRooms = this.showRooms()
    const userName = window.sessionStorage.getItem('user_name')
    return (
      <div className='user'>
        <h1 className='center-align'>Hello, {userName}</h1>
        <section className="user-section">
          <h2 className="room-form-title">Create Room:</h2>
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
        <section className="existing-rooms">
        <h2>Choose Existing Room:</h2>
        <ul>
          {/* <li>
            <Link 
              onClick={() => {
                  window.sessionStorage.setItem('room_id', room.room_id)
                  window.sessionStorage.setItem('room_name', room.room_name)
              }} 
              to='/show-room'>
              {room.room_name}
            </Link>
            <button onClick={() => deleteRoom(room.room_id)}>DELETE</button>
          </li> */}
          {showRooms}
        </ul>
      </section>
      </div>
    )
  }
}