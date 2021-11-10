import React, { Component } from "react"
import {
  BrowserRouter as  Router,
  Route,
  Routes
} from "react-router-dom"

import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import ApartmentIndex from './Pages/ApartmentIndex'

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      apartments: []
    }
  }

  componentDidMount(){
    this.readApartment()
  }

  readApartment = () => {
    fetch("/apartments")
    .then(response => response.json())
    .then(payload => this.setState({apartments: payload}))
    .catch(errors => console.log("index error:", errors))
  }

  render () {
    const { apartments } = this.state
    return (
        <Router>
          <Header {...this.props}/>
          <Routes>
            <Route exact path="/" element={ <Home/> } />
            <Route path="/apartmentindex" element={<ApartmentIndex apartments={apartments} />} />
          </Routes>
          <Footer />
        </Router>
    )
  }
}

export default App