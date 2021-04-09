import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { saveTodo, setVideo , setVisible} from './counterSlice';

import axios from 'axios';

import './Counter.css';

export function Counter() {
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('');
  const [isVisible, setIsVisible] = useState(true);

  const lastPartAfterSign = (str, separator='/') => {

    var stringSarach = str; 
    var n = stringSarach.search(separator);

    if(n === -1){
      return str;
    }
    else {
      let result = str.substring(str.lastIndexOf(separator)+1);
      result =  result != str ? result : false;
      if(result.length > 11 ) {
        result = str.substring(str.lastIndexOf('=')+1);
        result =  result != str ? result : false;
      }
      return result;
    } 
  }

  const addTodo = () => {
    console.log(`Adding ${lastPartAfterSign(incrementAmount)}`);
    
    fetch(`https://www.googleapis.com/youtube/v3/videos?id=${lastPartAfterSign(incrementAmount)}&key=AIzaSyDPQ653rSjnsN9tmexU7CmkDKc5t_2t5Jo&part=snippet,contentDetails,statistics,status`)
        .then(response => response.json())
        .then(data => 
          dispatch(setVideo({
            itemView : data.items[0].statistics.viewCount,
            itemLike :  data.items[0].statistics.likeCount,
            image: data.items[0].snippet.thumbnails.high.url,
            imageSmall: data.items[0].snippet.thumbnails.default.url,
            title : data.items[0].snippet.title,
            published : data.items[0].snippet.publishedAt,
            video : lastPartAfterSign(incrementAmount),
            done: false,
            id: Date.now(),
           }))
        );
        
  }

  const changeVisible = () => {
      setIsVisible(!isVisible);

      dispatch(setVisible ({
        isVisible : isVisible
      }))
  }

  return (
    <div className='input'>
    <input type="text" value={incrementAmount} 
      onChange={e => setIncrementAmount(e.target.value)} />
    <button 
        onClick={addTodo} >
    Add! </button>
    <button 
        onClick={changeVisible}>
    Visible </button>
    
</div>
  );
}
