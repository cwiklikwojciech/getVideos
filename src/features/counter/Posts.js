import React,{useState} from 'react'

import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

import {useDispatch} from 'react-redux'
import {setCheck, setVideo} from './counterSlice'
import { Container, Row, Col } from 'react-grid-system';

import ReactPlayer from 'react-player'
import ModalExample from "./reactPlayer";

import './Posts.css'

const Posts = ({ id, loading , dispatch,image,title , like, view, published ,video  }) => {

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
  
    <ul className='list-group mb-4'>
     <li className='list-group-item'>
     <Container>
         <Row> 
      <Col sm={3}>

      
      <div className="outside">
        <div className="inside">
       
        <img className="thumbnail" src={image} alt="BigCo Inc. logo" /> 

        
      
        </div>		
    </div>
      
      </Col>
      <Col sm={7}>
        <h5>{title}</h5>
        <h6>{like}</h6>
        <h6>{view}</h6>
        <h6>{published}</h6>
       
      </Col>
      <Col sm={2}>
        <button onClick={handleCheck}>Usuń</button>
        <ModalExample buttonLabel={'Zobacz!'} url={url} />
      </Col>
     
     
      </Row> 
        </Container>
    
    </li>
     
    </ul>

   
            </>
  );
};

export default Posts;