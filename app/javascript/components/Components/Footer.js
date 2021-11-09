import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Footer extends Component{
  render(){
    return(
      <footer>
        <ul>
          <NavLink to="/">&copy; 2021 Ross Brantley</NavLink>
        </ul>

      </footer>
    )
  }
}

export default Footer