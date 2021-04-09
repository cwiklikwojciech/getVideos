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
        console.log(action.payload);
          state.todoList.map(item => {
            if(action.payload === item.id){
              console.log(x);
              state.todoList.splice(x,1);
            }
            x++;
          })
      },

      setVideo: (state,action) => {
        console.log(action.payload);
        state.todoList.push(action.payload); 
        
    },

    setVisible: (state,action) => {
      console.log(action.payload);
      state.isVisible = action.payload;
  },
  }
});

export const { saveTodo , setCheck , setVideo, setVisible } = counterSlice.actions;

export const selectTodoList = state => state.todos.todoList
export const selectIsVisible = state => state.todos.isVisible


export default counterSlice.reducer;
