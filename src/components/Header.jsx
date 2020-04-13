import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'

class Header extends Component {
  state = {}
  render() {
    return (
      <React.Fragment>
        <Nav variant="tabs" className="flex-column">
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              <b>Fancy Quiz App</b>
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled" disabled>
              Counter: 0/4
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </React.Fragment>
    )
  }
}

export default Header
