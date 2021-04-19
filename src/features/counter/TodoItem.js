import React, {useState, useEffect} from 'react'
import axios from 'axios'

import './TodoItem.css'

import Posts from './Posts';
import Tiles from './Tiles';
import Pagination from './Pagination';



import { Container, Row, Col } from 'react-grid-system';
import {useDispatch} from 'react-redux'


const TodoItem = ({list, isVisible , isFevorite, isSort}) => {
    

    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(5);
    const [postsPerPageTiles] = useState(4);



    useEffect(() => {
      const data = localStorage.getItem("state");
      if (data) {
        setPosts(JSON.parse(data));
      }
      console.log("Pierwszy effect")
     
    }, []);


    useEffect(() => {
      console.log("Drugi effect")
      const fetchPosts = async () => {
      setLoading(true);
        // const data = localStorage.getItem("state");
        // if (data) {
        //   setPosts(JSON.parse(data));
        // }

      
      setPosts(list);  
      setLoading(false);
      };

      fetchPosts();
    });

    
    

        const objectMap = (obj, fn) =>
        Object.fromEntries(
          Object.entries(obj).map(
             ([k, v], i) => [k, fn(v, k, i)] 
          )
        )
        
        function clean(obj) {
          for (var propName in obj) {
            if (obj[propName] === null || obj[propName] === undefined) {
              delete obj[propName];
            }
          }
          return obj
        }

        
      
      const obj = clean(objectMap(posts, v => isFevorite ?  v.favorite ? v : null : v));

      function dynamicSort(property) {
        var sortOrder = 1;
        if(property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }
        return function (a,b) {
            /* next line works with strings and numbers, 
             * and you may want to customize it to your needs
             */
            var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
            return result * sortOrder;
        }
     }



      var obj1;

      isSort ? obj1 = Object.values(obj).sort(dynamicSort("published")) : obj1 = obj;
     
      console.log("Is Sort: " + isSort);


      
     
      // var retrievedObject = localStorage.getItem('state');
      // console.log(JSON.parse(retrievedObject));
      console.log(list);
      //console.log(newObject);

   
  
   



      const dispatch = useDispatch();
      let fevoriteAmoutn = 0;

      

      for(let i = 0; i<Object.values(obj1).length;i++){
        if(Object.values(obj1)[i].favorite  === true) {
            fevoriteAmoutn++;
        }
      }

      console.log("Fev amount" + fevoriteAmoutn);

      let totalPosts = isFevorite ? fevoriteAmoutn : Object.values(obj1).length;

      console.log("Total Post" + totalPosts);

      const indexOfLastPost = currentPage * postsPerPage;
      const indexOfFirstPost = indexOfLastPost - postsPerPage;
      const currentPosts = Object.values(obj1).slice(indexOfFirstPost, indexOfLastPost);

      

      const indexOfLastPostTiles = currentPage * postsPerPageTiles;
      const indexOfFirstPostTiles = indexOfLastPostTiles - postsPerPageTiles;
      const currentPostsTiles = Object.values(obj1).slice(indexOfFirstPostTiles, indexOfLastPostTiles);

      const paginate = pageNumber => setCurrentPage(pageNumber);


    return (
    <>
    {
            isVisible ?  (
                <div className='container mt-5'>
                {currentPosts.map(post => (
                  
                   <Posts 
                     key={post.id} 
                     id={post.id}
                     loading={loading}
                     dispatch={dispatch}
                     image={post.image} 
                     title={post.title} 
                     like={post.itemLike} 
                     view={post.itemView}
                     published={post.published}    
                     favorite={post.favorite}
                     video={post.video}
                     isFevorite={isFevorite}
                     />
                ))}
                
                <Pagination 
                    postsPerPage={postsPerPage}
                    totalPosts={totalPosts}
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
                    key={post.id} 
                    id={post.id}
                    loading={loading} 
                    dispatch={dispatch} 
                    image={post.image} 
                    title={post.title} 
                    like={post.itemLike} 
                    view={post.itemView}
                    published={post.published}  
                    favorite={post.favorite}
                    video={post.video}
                    isFevorite={isFevorite}
                    />
                ))}

            </Row>
            </Container> 

            <Pagination className="pagination"
                    postsPerPage={postsPerPageTiles}
                    totalPosts={totalPosts}
                    paginate={paginate}
                />

            </>
            )
    }
      </>
    
    );
}

export default TodoItem
