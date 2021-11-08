import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import appLogo from '../Assets/Dwelling.png'

class Header extends Component {
  render () {
  
    const {
      logged_in,
      current_user,
      new_user_route,
      sign_in_route,
      sign_out_route
    } = this.props
    
    return (
      <header>
        <NavLink to='/'>
          <img src={appLogo} alt='dwelling good logo' className='appLogo'/>
        </NavLink>
        <div className='nav-bar'>
          <ul>
          <Button className='nav-bar'>
            {logged_in &&
              <a href={sign_out_route} >Sign Out</a>
            }

            {!logged_in &&
              <a href={sign_in_route} >Sign In</a>
            }
          </Button> 
          </ul>
        </div>
      </header>
    )
  }
}

export default Header
