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
import Service from '../../components/Service'






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
            <p className="aboutMe">Lewis Clean-up Services is "Your One Stop Shop" for getting a home ready to market whether it be for sale or lease. We will come in and clear out any trash, junk or debris and haul it away. We will do interior cleaning, exterior cleaning, pressure washing, window cleaning, solar panel cleaning and give the yard a face lift and monthly yard maintenance until close of escrow or until it is leased.  
            </p>
            <h3>How We Got Started</h3>
            <p className="aboutMe">Like many people, when the pandemic hit and me and my husband both lost our jobs, we knew we needed to hustle and get something going for ourselves. When I used to be a Brokers Assistant at a local Real Estate office for 7+ years, I had a side business cleaning vacant houses and window cleaning along with trash outs and yard cleanup getting the home ready for sale. I took that experience and created a broader business by adding Solar Panel Cleaning and Pressure Washing. While I was in the Real Estate Industry for 7+ years I learned a lot about what it takes to help a home sell faster and I have implimented that into turning what was once a side job, into our family's new career. We are a family owned and operated small business and we take pride in teaching our children the skills of hard work just as my father did with me and my siblings. In today's times, my husband and I want our children to be prepared for their future in the work force as we where for ours.
            </p>
          </div>
        </div>

        <a name='services'></a>
        <div>
          <Jumbotron className="jumbotron text-center">
            <h1>Services</h1>
            <Row>
              <Col md='4'>
                <Service 
                name="Solar Panel Cleaning"
                description="Cleaning at regular intervals prevents buildup of residue and keeps your panels operating optimally at all times"
                moreDetails="Increases efficiency by 15-45%.   
                Cleaning with pure water is one of the safest, most effective and fastest methods in professional solar cleaning. Demineralized water is obtained by one of the UNGER filter systems by deionization or reverse osmosis. Waterfed brushes loosen the dirt and remove it with the pure water.Services include: Cleaning each Solar Panel and the edges of each panel"
                
                />
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
