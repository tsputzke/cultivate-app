import React, { Component } from 'react'
import TokenService from '../../services/token-service'
import { Link } from 'react-router-dom';
import config from '../../config'

export default class User extends Component {
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
      fetch(config.API_ENDPOINT + `/api/rooms/${userId}`, {
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

    const userRooms = this.state.rooms
    return userRooms.map(function(room, i) {
      return <li className="existing-room-li" key={i}>
        <div className="room-div">
          <Link 
            onClick={() => {
                window.sessionStorage.setItem('room_id', room.room_id)
                window.sessionStorage.setItem('room_name', room.room_name)
            }} 
            to='/show-room'>
            {room.room_name}
          </Link>
          <p>{room.room_description}</p>
        </div>
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
    
    fetch(config.API_ENDPOINT + `/api/rooms`, {
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
      // .then(window.location.reload())
    }

  render() {
    const showRooms = this.showRooms()
    const userName = window.sessionStorage.getItem('user_name')
    return (
      <div className='user'>
        <h1 className='center-align title-style'>Hello, <span className='user_name-title'>{userName.toUpperCase()}</span></h1>
        <section className="user-section">
          <form 
            className="create-room-form"
            onSubmit={this.handleNewRoom}
          >
            <fieldset>
              <legend className="strong create-room-legend">Create New Room: </legend>
              <div>
                <label htmlFor="room_name">Room Name: </label>
                <input maxLength="20" type="text" name="room_name" required />
              </div>
              <div>
                <label htmlFor="room_description">Description: </label>
                <input maxLength="50" type="text" name="room_description" />
              </div>
              <button className="new-room-button">Submit</button>
            </fieldset>
          </form>
        </section>
        {(showRooms.length) ? 
          (<section className="existing-rooms title-style">
              <h2 className="strong existing-room-title">Choose Existing Room:</h2>
              <ul>
                {showRooms}
              </ul>
            </section>) : null
        }
      </div>
    )
  }
}