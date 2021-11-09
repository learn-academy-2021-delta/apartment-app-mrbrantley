import React, { Component } from 'react'
import artDeco from '../Assets/artDeco.jpeg'


class ApartmentIndex extends Component {
  render() {
    return (
      <>
        <h3>This is the Apartment Index</h3>
        <br />
        <img src={artDeco} alt="pastel art deco image" className="apartmentHome" />
      </>
    )
  }
}
export default ApartmentIndex