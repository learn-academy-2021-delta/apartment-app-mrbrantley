import React, { Component } from 'react'
import apmntHome from '../Assets/apartmentHome.jpg'

class Home extends Component {
  render() {
    return (
      <div >
        <h3>Welcome to Dwelling Good</h3>
        <br />
        <h4>This is the Dwelling Good homepage.</h4>
        <br />
        <img src={apmntHome} alt="apartments in a tropical location" className="apartmentHome" />
      </div>
    )
  }
}
export default Home