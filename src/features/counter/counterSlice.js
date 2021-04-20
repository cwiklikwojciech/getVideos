import { createSlice } from '@reduxjs/toolkit';

const data = localStorage.getItem("state");

const initialState = {
  todoList: data ? JSON.parse(data) : [],
  isVisible: 0,
  isFevorite : false,
  isSort : false,
}

const counterSlice = createSlice({
  name: 'x',
  initialState,
  reducers: {     
    
  setCheck: (state,action) => {
    let x=0;
      state.todoList.map(item => {
        if(action.payload === item.id){
          state.todoList.splice(x,1);
        }
        x++;
      })
  },

  setFavorite:(state,action) => {
    let x=0;
    state.todoList.map(item => {
      if(action.payload === item.id){
        item.favorite = !item.favorite;
      }
      x++;
    })
    
  },

  setClear: (state) => {
    state.todoList.splice(0, state.todoList.length);
    localStorage.clear();
  },

  setVideo: (state,action) => {
    state.todoList.push(action.payload); 
    localStorage.setItem("state", JSON.stringify(state.todoList));
  },

  setSort: (state, action) => {
    state.isSort = action.payload;
  },

  setVisible: (state,action) => {
    state.isVisible = action.payload;
  },
  setFevorite: (state,action) => {
    state.isFevorite = action.payload;  
  },

  }
});

export const { saveTodo , setCheck , setVideo, setVisible,setFavorite,setClear,setFevorite, setSort } = counterSlice.actions;

export const selectTodoList = state => state.todos.todoList
export const selectIsVisible = state => state.todos.isVisible
export const selectIsFevorite = state => state.todos.isFevorite
export const selectIsSort = state => state.todos.isSort


export default counterSlice.reducer;