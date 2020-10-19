import React from 'react'
import '../../index.css'
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap'
import cleaner from '../../lewisphotos/cleanerIcon.png'
import solar from '../../lewisphotos/solarIcon.png'




const Home = () => {
  return (
    <>
      <section>
        
        <h1 className="lewis">Lewis Cleanup Services</h1>

        <div className="text-center">

          <img className="cleaner" src={cleaner} alt="cleaner"/>
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

        <a name='gallery'></a>
        <div>
          <Jumbotron className="jumbotron">
            <h1>hello</h1>

          </Jumbotron>
        </div>


      

      </section>
    </>
  )
}

export default Home
