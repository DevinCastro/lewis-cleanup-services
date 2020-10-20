import React, { useState } from 'react'
import { Jumbotron, Button, Card } from 'reactstrap'
import { Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
} from 'reactstrap';




const Project = props => {

  const [modal, setModal] = useState(false)
  
  const toggle = () => setModal(!modal)

  return (
    <>
      <div>
        <Card className='imgWrap black text-center'>

          <div className='description'>
            <div className="cardText">
            <h1>{props.name}</h1>
            <p>{props.description}</p>




            <Button onClick={toggle}>More Details</Button>
            </div>
          </div>

         
          <Modal isOpen={modal} toggle={toggle}>
            <ModalHeader toggle={toggle}><h1>{props.name}</h1></ModalHeader>
          <ModalBody>
      
            
            <p>{props.moreDetails}</p>
            <hr className="my-2" />


          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={toggle}>Close</Button>
          </ModalFooter>
        </Modal>
        </Card>
      </div>






    </>
  )
}

export default Project