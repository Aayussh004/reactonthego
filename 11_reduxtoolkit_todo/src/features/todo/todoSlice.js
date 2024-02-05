import {createSlice,nanoid} from '@reduxjs/toolkit'

// slice , reducer(functions) ka hi bda version hai
// createSlice is for methods and nanoid is for providing unique id's

const initialState = {//creating an object
   todos : [{id:1, text: "Hello World"}]//ye array of objects
}



export const todoSlice = createSlice({//iske andr object hoga
// ab slices ke naam hote hai jaise ki name
name:'todo',
initialState,
reducers: {
     addTodo: (state,action)=>{//context api me sirf declaration krte hai but yha define krna pdega jisme do chiz milegi state and action as arguments
          const todo = {
            id:nanoid(), 
            text: action.payload,
            completed:false
          }
          state.todos.push(todo);
    },
    removeTodo: (state,action)=>{//ye dusra reducer hai
        //state means current state, action means data
          state.todos = state.todos.filter((todo)=>todo.id!==action.payload)
    },

    updateTodo: (state,action)=>{
        //check the id and update text
        state.todos.map((todo)=>{
            if( todo.id===action.payload)
               return action.payload;
            else
            return todo;
         }
        )
    }
    
   
    

}//object h reducer jisme properties and func aate hai
})

export const {addTodo,removeTodo,updateTodo} = todoSlice.actions;//ye to components me use hone wale methods hai

export default todoSlice.reducer;//ye store.js me jane wala hai kyuki wha sb lagega