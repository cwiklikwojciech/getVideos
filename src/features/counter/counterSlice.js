import { createSlice } from '@reduxjs/toolkit';


const initialState = {
  todoList: [],
  isVisible: 0
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

      setVideo: (state,action) => {
        state.todoList.push(action.payload); 
        
    },

    setVisible: (state,action) => {
      state.isVisible = action.payload;
  },
  }
});

export const { saveTodo , setCheck , setVideo, setVisible } = counterSlice.actions;

export const selectTodoList = state => state.todos.todoList
export const selectIsVisible = state => state.todos.isVisible


export default counterSlice.reducer;
