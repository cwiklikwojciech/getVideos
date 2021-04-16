import { createSlice } from '@reduxjs/toolkit';
import TodoItem from './TodoItem';



const initialState = {
  todoList: [],
  isVisible: 0,
  isFevorite : false,
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
      },

      setVideo: (state,action) => {
        state.todoList.push(action.payload); 
        
    },

    setVisible: (state,action) => {
      state.isVisible = action.payload;
  },
  setFevorite: (state,action) => {
    state.isFevorite = action.payload;
},
  }
});

export const { saveTodo , setCheck , setVideo, setVisible,setFavorite,setClear,setFevorite } = counterSlice.actions;

export const selectTodoList = state => state.todos.todoList
export const selectIsVisible = state => state.todos.isVisible
export const selectIsFevorite = state => state.todos.isFevorite


export default counterSlice.reducer;
