import React, {useState} from 'react'

import {useDispatch} from 'react-redux'
import {setCheck, setVideo, setFavorite} from './counterSlice'

import ReactPlayer from 'react-player'

import {
    Card, Button, CardImg, CardTitle, CardText, CardGroup,
    CardSubtitle, CardBody
  } from 'reactstrap';

  import { Col } from 'react-grid-system';

  import ModalVideo from 'react-modal-video'
  import ModalExample from "./reactPlayer";


const Tiles = ({ id, loading , dispatch,image,title , like, view, published,video,favorite, isFevorite }) => {

  const [isOpen, setOpen] = useState(true)
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
    if(video.length <= 9 ) {
        url =  `https://player.vimeo.com/video/58385453?badge=0`;
        VimeoOrYoutube = false;
      }else{
      url =  `https://www.youtube.com/watch?v=${video}`;
      VimeoOrYoutube = true;
      }

      const favoriteTrue = {
        background: 'red'
      };
      const favoriteFalse = {
        background: 'none'
      };

      const x = {
        display: 'none'
      };
      const y = {
        display: 'block'
      };
    

  return (
    <>  
                    <Col  sm={6} >
                    {/* style={favorite && isFevorite ? (y) : isFevorite ? (x) : (y)} */}
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