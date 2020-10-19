import React from 'react'
import '../../index.css'
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap'
import cleaner from '../../lewisphotos/cleanerIcon.png'
import solar from '../../lewisphotos/solarIcon.png'
import { AnimateOnChange } from 'react-animation'
import photo1 from '../../lewisphotos/unnamed-1.jpg'
import photo2 from '../../lewisphotos/unnamed-2.jpg'
import photo3 from '../../lewisphotos/unnamed-3.jpg'
import photo4 from '../../lewisphotos/unnamed-4.jpg'
import photo5 from '../../lewisphotos/unnamed-5.jpg'
import photo6 from '../../lewisphotos/unnamed-6.jpg'
import photo7 from '../../lewisphotos/unnamed-7.jpg'
import photo8 from '../../lewisphotos/unnamed-8.jpg'
import photo9 from '../../lewisphotos/unnamed-9.jpg'






const Home = () => {
  return (
    <>
      <section>
        
      
      
        <h1 className="lewis animate__animated animate__fadeIn">Lewis Cleanup Services</h1>
      

        <div className="text-center">

          <img className="cleaner animate__animated animate__fadeIn" src={cleaner} alt="cleaner"/>
          {/* <img src={solar} alt="cleaner"/> */}
        </div>

        <a name='about'></a>
        <div className="green text-center">
          <div className="bio">
            <h3>Serving All Your Cleanup Needs</h3>
            <p className="aboutMe">Lewis Cleanup Services are a professional specialty cleaning company located in Menifee, CA.  We offer serveral different cleanup services with a focus in solar panel cleaning and pressure washing.  Our services also include: Trash removal, Window cleaning, Vacancy cleaning, Yard cleanup, Monthly yard maintenance until close of escrow or lease.
            </p>
          </div>
        </div>

        <a name='services'></a>
        <div>
          <Jumbotron className="jumbotron text-center">
            <h1>Services</h1>
            <Row>
              <Col md='4'>
                <h1>Trash Removal</h1>
              </Col>
              <Col md='4'>
                <h1>Solar Panel Cleaning</h1>
              </Col>
              <Col md='4'>
                <h1>Pressure Washing</h1>
              </Col>
            </Row>

          </Jumbotron>
        </div>


        <a name='gallery'></a>
        <div>
          <Jumbotron className="gallery text-center">
            <h1>Photo Gallery</h1>
            <Row>
              <Col md='4'>
                <img className="photo" src={photo1} alt="photo"/>
              </Col>
              <Col md='4'>
                <img className="photo" src={photo2} alt="photo" />
              </Col>
              <Col md='4'>
                <img className="photo" src={photo4} alt="photo" />
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <img className="photo" src={photo3} alt="photo" />
              </Col>
              <Col md='4'>
                <img className="photo" src={photo5} alt="photo" />
              </Col>
              <Col md='4'>
                <img className="photo" src={photo6} alt="photo"/>
              </Col>
            </Row>
            <Row>
              <Col md='4'>
                <img className="photo" src={photo7} alt="photo"/>
              </Col>
              <Col md='4'>
                <img className="photo" src={photo8} alt="photo"/>
              </Col>
              <Col md='4'>
                <img className="photo" src={photo9} alt="photo"/>
              </Col>
            </Row>

          </Jumbotron>
        </div>

      <a name='contact'></a>
      <div className="text-center">
        <h1>Contact Us</h1>
        <p className="contact">
          Have a question about our services? To get a free quote, or if you have questions or special requests, just drop us a line. We look forward to serving you!
        </p>
        <p>
          Email:
        </p>
        <p>
            <a href="mailto:LewisCleanupServices@gmail.com"><p>LewisCleanupServices@gmail.com</p></a>
        </p>
        <p>
          Phone:
        </p>
        <p>
         (951) 385-9635
        </p>
          
      </div>

      </section>
    </>
  )
}

export default Home
