import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from 'reactstrap'
import appLogo from '../Assets/Dwelling.gif'

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
          <Button> 
            <NavLink to="/apartmentindex" className="nav-link">Listings</NavLink>
          </Button>
          <Button>
            {logged_in &&
              <a href={sign_out_route} >Sign Out</a>
            }

            {!logged_in &&
              <a href={sign_in_route} >Sign In</a>
            }
          </Button> 
       
        </div>
      </header>
    )
  }
}

export default Header
