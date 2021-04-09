 /* { 
            list.isShow ? (
                 
                <Col sm={3}>
                x
            </Col>    
           
            ) : (
                <div className="todoItem">
                    <ListGroup>
                    <ListGroupItem active={done} >
                        <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                        <ListGroupItemText>
                        Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                        </ListGroupItemText>
                    </ListGroupItem>
                    </ListGroup> 
                </div>
            )
            
         
        } */

              /* <Checkbox
                checked={done}
                color="primary"
                onChange={handleChange}
                inputProps={{'aria-label' : 'secondary checbok'}}
             />  */

            

       
            
       
/* 
         <CardGroup>
      <Card>
        <CardImg top src={logo} alt="Card image cap" />
        <CardBody>
          <CardTitle tag="h5">Card title</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
          <CardText>This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</CardText>
          <Button>Button</Button>
        </CardBody>
      </Card>
      </CardGroup>  */

    
    
             
         /* <p className={done && 'todoItem--done'}>{name}/{like}</p>  */




         {
            isVisible ?  (
               list.map(item => (
               <div className="todoItem" >
                       <ListGroup >
                       <ListGroupItem active={list.done} >
                           <ListGroupItemHeading>List group item heading</ListGroupItemHeading>
                           <ListGroupItemText>
                           Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.
                           </ListGroupItemText>
                       </ListGroupItem>
                       </ListGroup> 
                   </div>
             ))
            ) : (
               <Container>
               <Row>   
   
               {
                   list.map(item => (
                       <Col sm={3}>
                            x
                        </Col> 
                   ))
               }
   
               </Row>
               </Container> 
            )   
           }