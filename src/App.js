import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import TodoItem from './features/counter/TodoItem';

import {useSelector} from 'react-redux'
import {selectTodoList} from './features/counter/counterSlice'
import {selectIsVisible} from './features/counter/counterSlice'
import {selectIsFevorite} from './features/counter/counterSlice'
import {selectIsSort} from './features/counter/counterSlice'



function App() {
  const todoList = useSelector(selectTodoList);
  const isVisible = useSelector(selectIsVisible);
  const isFevorite = useSelector(selectIsFevorite);
  const isSort = useSelector(selectIsSort);

  require('dotenv').config();

  
  return (
    <div className="App">
     <Counter />
          <TodoItem list={todoList} isVisible={isVisible.isVisible} isFevorite={isFevorite.isFevorite} isSort={isSort.isSort}/>
       </div>
    
  );
}

export default App;

