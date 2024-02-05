import {configureStore} from '@reduxjs/toolkit'
import todoReducer from '../features/todo/todoSlice'
export const store = configureStore({
    reducer:todoReducer
});//ye apne andar ek object hi leta hai