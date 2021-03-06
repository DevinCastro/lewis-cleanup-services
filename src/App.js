import React, { useState } from 'react'
import Home from './pages/Home'
import logo from './logos/finalLogo.png'

import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavbarText,
  NavItem,
  NavLink
} from 'reactstrap'


const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <>

      <nav>

        <a className="float-right call" href="tel:9513859635">Call us at (951) 385-9635</a>
        <Navbar light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <a className="myNav" href="#about">About Us</a>
              </NavItem>
              {" "}
              <NavItem>
                <a className="myNav" href="#gallery">Gallery</a>
              </NavItem>
              {" "}
              <NavItem>
                <a className="myNav" href="#contact">Contact</a>
              </NavItem>

            </Nav>
          </Collapse>
        </Navbar>
      </nav>
      <Home />
    </>
  )
}

export default App