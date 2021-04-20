import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactPlayer from 'react-player'
import Vimeo from '@u-wave/react-vimeo';
import './Posts.css'

const ModalExample = (props) => {
  const {
    buttonLabel,
    className,
    url,
    VimeoOrYoutube
  } = props;

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  return (
    <div>
      <Button color="danger"  onClick={toggle}>{buttonLabel}</Button>
      <Modal isOpen={modal} toggle={toggle} className={className}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>

        {VimeoOrYoutube ? (
            <div className='player-wrapper'>
              <ReactPlayer
                  className='react-player'
                  url= {url}
                  width='100%'
                  height='100%'
              />
            </div>
        ):
        (
            <div className='player-wrapper-vimeo'>
              <Vimeo
                video="181696349"
              />
            </div>
        )}
       
    
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>Do Something</Button>{' '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;