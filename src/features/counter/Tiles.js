import React, {useState} from 'react'

import {useDispatch} from 'react-redux'
import {setCheck, setVideo} from './counterSlice'


import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';

  import { Col } from 'react-grid-system';

  import ModalVideo from 'react-modal-video'


const Tiles = ({ id, loading , dispatch,image,title , like, view, published }) => {

  const [isOpen, setOpen] = useState(false)
  if (loading) {
    return <h2>Loading...</h2>;
  }


  const handleCheck = () => {
    dispatch(setCheck(id))
    }
  
    console.log(image);
    

  return (
    <>
                
                    <Col sm={6} key={id} >
                       <CardGroup>
                        <Card>
                            <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />
                            <CardImg top src={image}  onClick={()=> setOpen(true)}  alt="Card image cap" />
                        
                            <CardBody>
                            <CardTitle tag="h5">{title}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Published Data : {published}</CardSubtitle>
                            <CardText>View : {view} Like : {like}</CardText>
                            <div onClick={handleCheck}>x</div>
                            </CardBody>
                        </Card>
                        </CardGroup>
                        
                        </Col> 
                  </>      
  );
  
};

export default Tiles;