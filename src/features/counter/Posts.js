import React from 'react'

import {setCheck, setFavorite} from './counterSlice'
import { Container, Row, Col } from 'react-grid-system';

import ModalExample from "./reactPlayer";
import './Posts.css'

const Posts = ({ id, loading , dispatch,image,title , like, view, published ,video, favorite  }) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const handleCheck = () => {
    dispatch(setCheck(id))
  }

  const handleFavorite = () => {
      dispatch(setFavorite(id))
  }

  const favoriteTrue = {
    background: 'red'
  };
  const favoriteFalse = {
    background: 'none',
  };
  
 
  let  url,VimeoOrYoutube = true;
  if(video.length <= 9 ) {
    url =  `https://player.vimeo.com/video/58385453?badge=0`;
    VimeoOrYoutube = false;
  }
  else{
    url =  `https://www.youtube.com/watch?v=${video}`;
    VimeoOrYoutube = true;
  }


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
              <button onClick={handleCheck}>Delete</button>
              <button onClick={handleFavorite} style={favorite ? (favoriteTrue) : (favoriteFalse)}>Favourite</button>
              <ModalExample buttonLabel={'Show!'} url={url} VimeoOrYoutube={VimeoOrYoutube}/>
            </Col> 
        </Row> 
      </Container>
      </li>
    </ul>
  </>
  );
};

export default Posts;