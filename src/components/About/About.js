import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../About/About.css'

export default class About extends Component {
  render() {
    return (
      <section className='about'>
        <h1 className="about-title">ABOUT PAGE</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Integer eget aliquet nibh praesent tristique. Sed odio morbi quis commodo odio. Sit amet aliquam id diam maecenas ultricies mi. Dignissim enim sit amet venenatis urna cursus eget. Vivamus arcu felis bibendum ut tristique et egestas quis. Adipiscing bibendum est ultricies integer quis auctor elit sed. Montes nascetur ridiculus mus mauris. Tempor orci dapibus ultrices in iaculis nunc sed. 
          <br/><br/>
          <button className='back-button'><Link to='/'>Back</Link></button>
        </p>
      </section>
    )
  }
}