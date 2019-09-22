import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class About extends Component {
  render() {
    return (
      <section className='about'>
        <h1 className='center-align title-style'>What is Cultivate?</h1>
        <p>Cultivate is a grow-room tracking application designed to keep your plant and mushroom growing data organized. 
          <br/><br/>
          You can quickly create rooms, log your data, and access data trends and comments in your logbook. Whether you want to track your fertilizer schedule for that orchid your grandma gave you for your birthday, or you have a production greenhouse complex, Cultivate has got your back. 
          <br/><br/>
          Try it out for yourself! Click the 'back' button below to return to the login page and use the test user credentials to check it out.
          <br/><br/>
          <Link to='/'><button className='back-button'>Back</button></Link>
        </p>
      </section>
    )
  }
}