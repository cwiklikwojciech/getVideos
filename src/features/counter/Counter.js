import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {setClear,  setVideo , setVisible, setFevorite, setSort} from './counterSlice';

import './Counter.css';

export function Counter() {
  
    const dispatch = useDispatch();
    const [incrementAmount, setIncrementAmount] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const [isFevorite, setIsFevorite] = useState(true);
    const [isSort, setIsSort] = useState(false);

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
      let id = lastPartAfterSign(incrementAmount);
      if(id.length <= 9){
        getVimeo(id)
      }else{
        getYoutube(id);
      }
    }

    const hendledemo = ()  => {
      const demo = [ '181696349' ,'zgLEG16idp4', 'Exnx28DCK7Q', 'xXtTuCpBv8g' , 's0s-6Iekyv8'];

      for(let i=0;i<demo.length;i++){
        if(demo[i].length <= 9){
          getVimeo(demo[i]);
        }else{
          getYoutube(demo[i]);
        }   
      }
    }

    const handleClear = () => {
        dispatch(setClear())
    }

    const changeVisible = () => {
      setIsVisible(!isVisible);

      dispatch(setVisible ({
        isVisible : isVisible
      }))
    }

    const handleFevorite = () => {
      setIsFevorite(!isFevorite);

      dispatch(setFevorite ({
        isFevorite : isFevorite
      }))
    }

    const handleSort = () => {
      setIsSort(!isSort)
      dispatch(setSort({
        isSort : isSort
      }))
    }

    const getVimeo = (id) => {
      fetch(`https://vimeo.com/api/v2/video/${id}/json`)
        .then(response => response.json())
        .then(data => 
          dispatch(setVideo({
            itemView : data[0].stats_number_of_plays,
            itemLike :  data[0].stats_number_of_likes,
            image: data[0].thumbnail_large,
            imageSmall: data[0].thumbnail_large,
            title : data[0].title,
            published : data[0].upload_date,
            video : lastPartAfterSign(id),
            done: false,
            favorite : false,
            id: Date.now(),
          }))
          );
    }

    const getYoutube = (id) => {
      fetch(`https://www.googleapis.com/youtube/v3/videos?id=${id}&key=AIzaSyDPQ653rSjnsN9tmexU7CmkDKc5t_2t5Jo&part=snippet,contentDetails,statistics,status`)
      .then(response => response.json())
      .then(data => 
        dispatch(setVideo({
          itemView : data.items[0].statistics.viewCount,
          itemLike :  data.items[0].statistics.likeCount,
          image: data.items[0].snippet.thumbnails.medium.url,
          imageSmall: data.items[0].snippet.thumbnails.default.url,
          title : data.items[0].snippet.title,
          published : data.items[0].snippet.publishedAt,
          video :  lastPartAfterSign(incrementAmount),
          done: false,
          favorite : false,
          id: Date.now(),
        }))
      );
    }

    const x = {
      background: 'grey'
    };
    const y = {
      background: 'red'
    };

  return (
    <>
    <div className='input'>
    <input type="text" value={incrementAmount} 
      onChange={e => setIncrementAmount(e.target.value)} />
    </div>
      <div className="buttonActions">
        <button 
            onClick={addTodo} >
        Add! </button>
        <button 
            onClick={changeVisible}>
        Visible </button>
        <button 
            onClick={handleClear}>
        Clear </button>
        <button 
            onClick={hendledemo}>
        Demo </button>
        <button style = {isFevorite ? (x) : (y)}
            onClick={handleFevorite}>
        Fev </button>
        <button 
            onClick={handleSort}>
        Sort </button>
    </div>
</>
  );
}