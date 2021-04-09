import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './TodoItem.css'

import Posts from './Posts';
import Tiles from './Tiles';
import Pagination from './Pagination';



import { Container, Row, Col } from 'react-grid-system';
import {useDispatch} from 'react-redux'


const TodoItem = ({list, isVisible}) => {
    

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [postsPerPageTiles] = useState(4);
  
    useEffect(() => {
        const fetchPosts = async () => {
          setLoading(true);
          setPosts(list);
          setLoading(false);
        };
    
        fetchPosts();
      }, []);

      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = list.slice(indexOfFirstPost, indexOfLastPost);

      const indexOfLastPostTiles = currentPage * postsPerPageTiles;
      const indexOfFirstPostTiles = indexOfLastPostTiles - postsPerPageTiles;
      const currentPostsTiles = list.slice(indexOfFirstPostTiles, indexOfLastPostTiles);

      const paginate = pageNumber => setCurrentPage(pageNumber);

      const dispatch = useDispatch();

      

    return (
    <>
    {
            isVisible ?  (
                <div className='container mt-5'>
                {currentPosts.map(post => (
                   <Posts 
                     id={post.id} 
                     loading={loading}
                     dispatch={dispatch}
                     image={post.imageSmall} 
                     title={post.title} 
                     like={post.itemLike} 
                     view={post.itemView}
                     published={post.published}    
                     video={post.video}
                     />
                ))}
                
                <Pagination 
                    postsPerPage={postsPerPage}
                    totalPosts={list.length}
                    paginate={paginate}
                />
                </div>
            )
            :
            (
                <>
            <Container>
            <Row> 
              
               {currentPostsTiles.map(post => (
                   <Tiles 
                   id={post.id} 
                   loading={loading} 
                   dispatch={dispatch} 
                   image={post.image} 
                   title={post.title} 
                   like={post.itemLike} 
                   view={post.itemView}
                   published={post.published}  
                   video={post.video}
                   />
                ))}

            </Row>
            </Container> 

            <Pagination className="pagination"
                    postsPerPage={postsPerPageTiles}
                    totalPosts={list.length}
                    paginate={paginate}
                />

            </>
            )
    }
      </>
    
    );
}

export default TodoItem
