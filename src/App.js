import React, {useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import TodoItem from './features/counter/TodoItem';
import Posts from './features/counter/Posts';

import {useSelector} from 'react-redux'
import {selectTodoList} from './features/counter/counterSlice'
import {selectIsVisible} from './features/counter/counterSlice'
import { Container, Row, Col } from 'react-grid-system';

function App() {
  const todoList = useSelector(selectTodoList);
  const isVisible = useSelector(selectIsVisible);
  
  return (
    <div className="App">
     <Counter />
          <TodoItem list={todoList} isVisible={isVisible.isVisible} />
       </div>
    
  );
}

export default App;

