import {createContext, useContext} from "react"

export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            completed: false,
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    toggleComplete: (id) => {}
})


export const useTodo = () => {
    return useContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider
// import React,{useContext,createContext} from 'react'
// // in this project we will make a todo application where we will create a context (storeroom ) for all the variables and methods in the App.jsx file 

// export const TodoContext = createContext({//now this is main context aur isme mei variable,objects, methods declare krunga jo mujhe lagni hai aage

//     // at first I am giving array of object of todo 
//    Todoarr: [{
//     id:1,
//     todomsg:"this is a string todomsg",
//     completed: false
//    }],

//     //now I will give all the methods for the todo
//     updateTodo: function (id,todomsg){}, 
//     deleteTodo: (id)=>{},
//     addTodo: (Todoarr)=>{},
//     toggleComplete: (id)=>{}
// })

// // we will create a custom hook for the access of above variables and methods
// export const useTodo = ()=>{
//     return useContext(TodoContext)
// }

// // now for wrapper in App.jsx we need to give provider for that
// export const TodoProvider = TodoContext.Provider;