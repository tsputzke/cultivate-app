import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
      <section className='about'>
        <h1 className='center-align title-style'>What is Cultivate?</h1>
        <p>
          Cultivate is a grow-room tracking application designed to keep your plant and fungi data organized. 
          <br/><br/>
          Quickly create rooms, log data, and access your data with ease. Whether you are trying to keep that orchid alive that your grandma gave you for your birthday, or you manage a production greenhouse, Cultivate has got your back. 
          <br/><br/>
          <strong>Try it for yourself!</strong> Click the 'Back' button below to return to the login page and use the test user credentials to check it out.
          <br/><br/>
          <Link to='/'><button className="rbutton">Back</button></Link>
        </p>
      </section>
    )
  }
}