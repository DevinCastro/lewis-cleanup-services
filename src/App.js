import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import logo from './logos/logo7.png'

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
     {/* <Router> */}
    
      <nav>
        <Navbar light expand="md">
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <img
                  src={logo}
                  width="80"
                  height="80"
                  className="d-inline-block align-top"
                  alt="React Bootstrap logo"
                  to="/"
                />
              </NavItem>
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
        {/* <Switch>
          <Route exact path="/react-portfolio" component={Home} />
          <Route path="/myPortfolio" component={Portfolio} />
          <Route path="/contactMe" component={Contact} />
        </Switch> */}
      </nav>

     
     {/* </Router> */}
    <Home />
    </>
  )
}

export default App