import React, { Component } from 'react'
import { CardGroup, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap'
import { NavLink } from 'react-router-dom'
import artDeco from '../Assets/artDeco.jpeg'



class ApartmentIndex extends Component {
  render() {
    const { apartments } = this.props
    return (
      <>
      <div className='page-body'>
        <h3>Take a walk around the neighborhood</h3>
        <br />
      </div>
      <CardGroup className='card-group'>
        {apartments && apartments.map(apartment => {
          return (
        
      <Card key={apartment.id}>
        <CardImg
          alt="Card image cap"
          src={artDeco}
          top
          width="100%"
        />
        <CardBody>
          <CardTitle tag="h5">
            {apartment.street}
          </CardTitle>
          <CardSubtitle
            className="mb-2 text-muted"
            tag="h6"
          >
            {apartment.city}, {apartment.state}
          </CardSubtitle>
          <CardText>
        Manager: {apartment.manager} <br/>
        Monthly Rent: $ {apartment.price}
          </CardText>
          <Button>
            More Info
          </Button>
        </CardBody>
      </Card>
        )
      })}
    </CardGroup>
    </>
    )
  }
}
export default ApartmentIndex