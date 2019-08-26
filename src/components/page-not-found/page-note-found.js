import React, { Component } from 'react'
import '../page-not-found/page-not-found.css';

export default class PageNotFound extends Component {
  render() {
    return (
      <section className='page-not-found'>
        <h1 className="page-not-found-title">Error: Page does not exist.</h1>
      </section>
    )
  }
}