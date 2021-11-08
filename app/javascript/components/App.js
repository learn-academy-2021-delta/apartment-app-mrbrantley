import React, { Component } from "react"
import {
  BrowserRouter as  Router,
  Route,
  Routes
} from "react-router-dom"

import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'

class App extends Component {
  render () {
    return (
        <Router>
          <Header {...this.props}/>
          <Routes>
            <Route exact path="/" element={ <Home/> } />
          </Routes>
          <Footer />
        </Router>
    )
  }
}

export default App