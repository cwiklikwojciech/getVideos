import React,{useState} from 'react'

import ReactDOM from 'react-dom'
import ModalVideo from 'react-modal-video'

import {useDispatch} from 'react-redux'
import {setCheck, setVideo} from './counterSlice'
import { Container, Row, Col } from 'react-grid-system';

import './Posts.css'

const Posts = ({ id, loading , dispatch,image,title , like, view, published ,video  }) => {

  const [isOpen, setOpen] = useState(false)

  if (loading) {
    return <h2>Loading...</h2>;
  }


  const handleCheck = () => {
    dispatch(setCheck(id))
    console.log("hey");
    }
  

  return (
    <ul className='list-group mb-4'>
     <li key={id}  className='list-group-item'>
     <Container>
         <Row> 
      <Col sm={3}>
      <div class="outside">
        <div class="inside">
        <img onClick={()=> setOpen(true)} src={image} alt="BigCo Inc. logo" />
        </div>		
    </div>
      
      </Col>
      <Col sm={8}>
        <h3>{title}</h3>
        <h4>{like}</h4>
        <h5>{view}</h5>
        <h5>{published}</h5>
       
      </Col>
      <div onClick={handleCheck}>x</div>
      <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="L61p2uyiMSo" onClose={() => setOpen(false)} />

      </Row> 
        </Container>
    
    </li>
     
    </ul>
  );
};

export default Posts;