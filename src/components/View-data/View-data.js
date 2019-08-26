import React, { Component } from 'react'
import NavBack from '../NavBack/NavBack';
import '../View-data/View-data.css'

export default class ViewData extends Component {
  render() {
    return (
      <section className='view-data'>
        <header id="nav=header">
          <NavBack navBack='/user/1/room/1'/>
        </header>
        <h1>View Data</h1>

        <table>
          <tbody>
            <tr>
              <th> Date </th>
              <th> Temperature </th>
              <th> rH </th>
              <th> CO2 </th>
              <th> Light </th>
              <th> Comments </th>
            </tr>
            <tr>
              <td>04/01/2019</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
            </tr>
            <tr>
              <td>04/01/2019</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
            </tr>
            <tr>
              <td>04/01/2019</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
            </tr>
            <tr>
              <td>04/01/2019</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
            </tr>
            <tr>
              <td>04/01/2019</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
              <td>25</td>
            </tr>
          </tbody>
        </table>
      </section>
    )
  }
}