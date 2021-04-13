import React, {useState} from 'react'

import {useDispatch} from 'react-redux'
import {setCheck, setVideo} from './counterSlice'

import ReactPlayer from 'react-player'

import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';

  import { Col } from 'react-grid-system';

  import ModalVideo from 'react-modal-video'
  import ModalExample from "./reactPlayer";


const Tiles = ({ id, loading , dispatch,image,title , like, view, published,video }) => {

  const [isOpen, setOpen] = useState(false)
  if (loading) {
    return <h2>Loading...</h2>;
  }


  const handleCheck = () => {
    dispatch(setCheck(id))
    }
  
    let url =  `https://www.youtube.com/watch?v=${video}`;
    

  return (
    <>
                    <Col  sm={6} >
                       <CardGroup>
                        <Card>
                            <CardImg top src={image}  alt="Card image cap" />
                            <CardBody>
                            <CardTitle tag="h5">{title}</CardTitle>
                            <CardSubtitle tag="h6" className="mb-2 text-muted">Published Data : {published}</CardSubtitle>
                            <CardText>View : {view} Like : {like}</CardText>
                            <button onClick={handleCheck}>Usuń</button>
                            <ModalExample buttonLabel={'Zobacz!'} url={url} />
                            </CardBody>
                        </Card>
                        </CardGroup>
                        
                        </Col> 
                        
                  </>      
  );
  
};

export default Tiles;