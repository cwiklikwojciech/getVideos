import React from 'react'
import {setCheck, setFavorite} from './counterSlice'

import {
    Card, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';

import { Col } from 'react-grid-system';
import ModalExample from "./reactPlayer";


const Tiles = ({ id, loading , dispatch,image,title , like, view, published,video,favorite }) => {

  if (loading) {
    return <h2>Loading...</h2>;
  }

  const handleCheck = () => {
    dispatch(setCheck(id))
  }
  
  const handleFavorite = () => {
      dispatch(setFavorite(id))
  }
  
  let  url,VimeoOrYoutube = true;
    if(video.length <= 9 ){
        url =  `https://player.vimeo.com/video/58385453?badge=0`;
        VimeoOrYoutube = false;
    }
    else{
      url =  `https://www.youtube.com/watch?v=${video}`;
      VimeoOrYoutube = true;
    }

    const favoriteTrue = {
      background: 'red'
    };
    const favoriteFalse = {
      background: 'none'
    };


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
              <button onClick={handleFavorite} style={favorite ? (favoriteTrue) : (favoriteFalse)}>Ulubione</button>
              <ModalExample buttonLabel={'Zobacz!'} url={url} VimeoOrYoutube={VimeoOrYoutube}/>
              </CardBody>
      </Card>
      </CardGroup>
      </Col> 
    </>      
  );
  
};

export default Tiles;