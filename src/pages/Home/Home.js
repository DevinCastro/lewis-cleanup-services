import React from 'react'
import '../../index.css'
import { Container, Row, Col, Button, Jumbotron } from 'reactstrap'
import cleaner from '../../lewisphotos/cleanerIcon.png'
import solar from '../../lewisphotos/solarIcon.png'
import { AnimateOnChange } from 'react-animation'
import photo0 from '../../lewisphotos/unnamed.jpg'
import photo1 from '../../lewisphotos/unnamed-1.jpg'
import photo2 from '../../lewisphotos/unnamed-2.jpg'
import photo3 from '../../lewisphotos/unnamed-3.jpg'
import photo4 from '../../lewisphotos/unnamed-4.jpg'
import photo5 from '../../lewisphotos/unnamed-5.jpg'
import photo6 from '../../lewisphotos/unnamed-6.jpg'
import photo7 from '../../lewisphotos/unnamed-7.jpg'
import photo8 from '../../lewisphotos/unnamed-8.jpg'
import photo9 from '../../lewisphotos/unnamed-9.jpg'
import photo10 from '../../lewisphotos/1.jpeg'
import photo11 from '../../lewisphotos/2.jpeg'
import photo12 from '../../lewisphotos/3.jpeg'
import photo13 from '../../lewisphotos/4.jpeg'
import photo14 from '../../lewisphotos/5.jpeg'
import photo15 from '../../lewisphotos/6.jpeg'
import photo16 from '../../lewisphotos/7.jpg'
import photo17 from '../../lewisphotos/8.jpg'
import photo18 from '../../lewisphotos/9.jpg'
import photo19 from '../../lewisphotos/10.jpg'
import photo20 from '../../lewisphotos/11.jpeg'
import photo21 from '../../lewisphotos/12.jpeg'
import photo22 from '../../lewisphotos/13.jpeg'
import photo23 from '../../lewisphotos/14.jpeg'
import photo24 from '../../lewisphotos/15.jpeg'
import photo25 from '../../lewisphotos/16.jpeg'
import vacant1 from '../../lewisphotos/vacant1.jpeg'
import vacant2 from '../../lewisphotos/vacant2.jpeg'
import vacant3 from '../../lewisphotos/vacant3.jpeg'
import yard1 from '../../lewisphotos/rakebefore.jpg'
import yard2 from '../../lewisphotos/rakeafter.jpg'
import logo from '../../logos/finalLogo.png'
import chamber from '../../lewisphotos/chamber.png'

import Service from '../../components/Service'






const Home = () => {
  return (
    <>
      <section>

        <div className="chris text-center">

          <img className="logo animate__animated animate__fadeIn" src={logo} alt="logo" />

        </div>



        <a name='about'></a>
        <div className="green text-center">
          <div className="bio">
            <h3>Serving All Your Cleanup Needs</h3>
            <p className="aboutMe">Lewis Clean-up Services is "Your One Stop Shop" for getting a home ready to market whether it be for sale or lease. We will come in and clear out any trash, junk or debris and haul it away. We will do interior cleaning, exterior cleaning, pressure washing, window cleaning, solar panel cleaning and give the yard a face lift and monthly yard maintenance until close of escrow or until it is leased.
            </p>
            <h3>How We Got Started</h3>
            <p className="aboutMe">Like many people when the pandemic hit, my husband and I both lost our jobs and we knew we needed to hustle and get something going for ourselves. When I used to be a Brokers Assistant at a local Real Estate office for 7+ years, I had a side business cleaning vacant houses and window cleaning along with trash outs and yard cleanup getting the home ready for sale. I took that experience and created a broader business by adding Solar Panel Cleaning and Pressure Washing. While I was in the Real Estate Industry for 7+ years I learned a lot about what it takes to help a home sell faster and I have implemented that into turning what was once a side job, into our family's new career. We are a family owned and operated small business and we take pride in teaching our children the skills of hard work just as my father did with me and my siblings. In today's times, my husband and I want our children to be as prepared for their future in the work force as we were for ours.
            </p>
          </div>
        </div>

        <a name='gallery'></a>
        <div>
          <Jumbotron className="jumbotron text-center">
            <img className="cleaner2" src={cleaner} alt="cleaner" />
            <h1>Services</h1>
            <Row>
              <Col lg='4'>
                <Service
                  name="Solar Panel Cleaning"
                  description="Cleaning at regular intervals prevents buildup of residue and keeps your panels operating optimally at all times."
                  moreDetails={['Increases efficiency by 15-45%.', <br />, <br />, 'Cleaning with pure water is one of the safest, most effective and fastest methods in professional solar cleaning. Demineralized water is obtained by one of the UNGER filter systems by deionization or reverse osmosis. Waterfed brushes loosen the dirt and remove it with the pure water.Services include: Cleaning each Solar Panel and the edges of each panel']}
                  pics={[photo7, photo8, photo9, photo16, photo17, photo18, photo3, photo5, photo12, photo20]}

                />
              </Col>
              <Col lg='4'>
                <Service
                  name="Pressure Washing"
                  description="We are BIG on curb appeal. We want to help make your home stand out in the neighborhood when driving down the street with a sparkling appearance."
                  moreDetails={["Services Include:", <br />, "Removal of built-up dirt, algae and mold", <br />, "Items include: (but not limited to)", < br />,
                    "Siding", <br />,
                    "Driveways", <br />,
                    "Sidewalks", <br />,
                    "Walkways", <br />,
                    "Pavers", <br />,
                    "Porches", <br />,
                    "Decks", < br />,
                    "Fences", <br />,
                    "Playground Equipment"]}
                  pics={[photo13, photo14, photo15, photo21, photo24, photo22, photo23, photo25 ]}

                />
              </Col>
              <Col lg='4'>
                <Service
                  name="Trash Removal"
                  description="Let our team come in and remove that headache for you by clearing out your unwanted items or just hauling away built up trash and junk."
                  moreDetails={["Services Include: (But not limited to)", <br />,
                    "Foreclosure clean outs", <br />,
                    "Small appliances", <br />,
                    "General trash", <br />,
                    "Household items", <br />,
                    'Mattresses & box springs', <br />,
                    'Carpet, padding & rugs', <br />,
                    'Glass', <br />,
                    'Exercise equipment', <br />,
                    'Bicyles', <br />,
                    'Yard debris (Tree trimmings)', <br />,
                    'Green waste', <br />,
                    'Construction debris', <br />,
                    'Scrap Metal', <br />,
                    'Old tools', <br />, <br />,

                    'NOTE: We do not remove hazardous waste such as (paint, thinners, oil and gas)']}
                  pics={[photo1, photo2, photo4, photo0]}
                />
              </Col>
            </Row>


            <Row>
              <Col lg='4'>
                <Service
                  name="Window Cleaning"
                  description="It's said that windows are the eyes to the soul. You can tell a lot about a person by looking into their eyes. Therefore, windows are the eyes of the house. A lot is told about a house just by looking at the windows."
                  moreDetails={['Service Includes:', <br />,
                    'Window screens are removed and cleaned.', <br />,
                    'Window pane cleaned both inside & out', <br />,
                    'Tracks wiped out & sills wiped down', <br />,
                    'Screens replaced', < br />, <br />,

                    'NOTE: We do not remove any screens that are affixed to the window by nails or screw'

                  ]}
                  pics={[photo10, photo11]}

                />
              </Col>
              <Col lg='4'>
                <Service
                  name="Vacant House Cleaning"
                  description="Nothing is more welcoming to a potential buyer than walking into a house that smells and looks amazing."
                  moreDetails={['Services Include:', <br />,
                    'Vacuum and sweep all floors', <br />,
                    'Wipe down baseboards throughout the house', <br />,
                    'Scrub shower, bathtub & toilets', <br />,
                    'Clean sinks and countertops', <br />,
                    'Clean kitchen appliances', <br />,
                    'Clean Ceiling fans', <br />,
                    'Dust everything', <br />,

                    "Prices vary depending on size and condition it's in.", <br />, <br />,

                    "Extra Charge: GARAGE - Remove cobwebs, sweep, wipe out cabinets and shelves and hose down"]}
                  pics={[vacant1, vacant2, vacant3]}

                />
              </Col>
              <Col lg='4'>
                <Service
                  name="Yard Cleanup & Monthly Maintenance"
                  description="Giving  your yard a light facelift brings curb appeal to your home until close of escrow or lease."
                  moreDetails={['Services Include:', <br />,
                    'Raking up leaves', <br />,
                    'Pruning', <br />,
                    'Trim hedges', <br />,
                    'Cleaning up branches', <br />,
                    'Cleaning up lawn debris', <br />,
                    'Cutting the grass']}
                  pics={[yard1, yard2]}

                />
              </Col>
            </Row>



          </Jumbotron>
        </div>


        <a name='contact'></a>
        <div className="green text-center">
          <div className='contact'>

            <h1>Get A Free Quote</h1>
            <p>
              Have a question about our services? To get a free quote, or if you have questions or special requests, just drop us a line. We look forward to serving you!
            </p>
            <Row>
              <Col md='4'>
                <img className="facebook" src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png" alt="email"></img>

                <a href="mailto:LewisCleanupServices@gmail.com"><p>LewisCleanupServices@gmail.com</p></a>

              </Col>
              <Col md='4'>
                
                <img className="phone" src="https://assets.stickpng.com/thumbs/5a4525b2546ddca7e1fcbc82.png" alt="phone"></img>
                <p>
                  <a href="tel:9513859635">(951) 385-9635</a>
                </p>
              </Col>
              <Col md='4'>
                <a href="https://www.facebook.com/lana.lewis.9421">
                  <img className="facebook" src="https://cdn.iconscout.com/icon/free/png-512/facebook-social-media-fb-logo-square-44659.png" alt="facebook"></img>
                </a>
              </Col>
            </Row>


            <h4>Proud members of</h4>

            <img className="chamber" src={chamber} alt="chamber" />
            <img className="chamber" src='https://i1.wp.com/www.digitaladvisingsolutions.com/wp-content/uploads/2019/06/alignable.png?fit=1867%2C621&ssl=1' alt="chamber" />

          </div>
        </div>

      </section>
    </>
  )
}

export default Home
