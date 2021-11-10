import React from 'react'
import Enzyme, { shallow } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Footer from './Footer'
import mockPic from '../mockFile.js'

Enzyme.configure({adapter: new Adapter()})

describe("When Footer renders", () => {
  it("displays a nav bar", () => {
    const footer = shallow(<Footer />)
    const footerNav = footer.find("a")
    expect(footerNav.length).toEqual(1)
  })
  it("displays my name", () => {
    const footer = shallow(<Footer />).find("a")
    expect(footer.text()).toEqual("© 2021 Ross Brantley");
  })
})