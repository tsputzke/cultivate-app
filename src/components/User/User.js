import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import Nav from '../Nav/Nav';
import '../User/User.css'

export default class User extends Component {
  render() {
    return (
      <div className='user'>
        <header id="nav=header">
          <Nav navRight="Sign Out" navLink=""/>
        </header>
        <h1 id="user-header">Hello, NAME</h1>
        <section id="user-section">
          <h2 className="form-title">Create Room:</h2>
          <form id="create-room-form">
            <div>
              <label htmlFor="name">Room Name: </label>
              <input type="text" name="name" required />
            </div>
            <div>
              <label htmlFor="description">Description: </label>
              <input type="text" name="description" />
            </div>
            <Link to='/user/1/room/1'><button className="new-room-button">Submit</button></Link>
          </form>
        </section>
        <section id="existing-rooms">
          <h2>Choose Existing Room:</h2>
          <ul>
            <li><Link to="/user/1/room/1">Example Room</Link></li>
          </ul>
        </section>
      </div>
    )
  }
}