import { useState, useEffect } from 'react'
// import {TodoProvider} from './contexts'
import { TodoProvider } from './context'
import './App.css'
import TodoForm from './Components/TodoForm'
import TodoItem from './Components/TodoItem'

function App() {
  const [todos, setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev] )
  }

  const updateTodo = (id, todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))

    
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    //console.log(id);
    setTodos((prev) => 
    prev.map((prevTodo) => 
      prevTodo.id === id ? { ...prevTodo, 
        completed: !prevTodo.completed } : prevTodo))
  }

  useEffect(() => {
    const todos = JSON.parse(localStorage.getItem("todos"))

    if (todos && todos.length > 0) {
      setTodos(todos)
    }
  }, [])

  useEffect(() => { 
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])
  



  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm />
                    </div>
                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                        {todos.map((todo) => (
                          <div key={todo.id}
                          className='w-full'
                          >
                            <TodoItem todo={todo} />
                          </div>
                        ))}
                    </div>
                </div>
            </div>
    </TodoProvider>
  )
}

export default App
// import { useState,useContext,Provider,createContext,useEffect,React} from 'react'
// import {TodoContext,useTodo,TodoProvider} from './context/Todocontext'
// import TodoForm from './Components/TodoForm'
// import TodoItem from './Components/TodoItem'


// import './App.css'

// function App() {
 
//   // for todo array insided TodoContext we need to create a state for that
//   const [Todoarr, setTodoarr] = useState([])

//   // now we have to add a new todo msg with reference id 
//   // const Addtodo = (todomsg)=> { 
//   //   // setTodoarr(todomsg) // agr mei aisa krunga to sb delete ho jayega aur sirf todomsg hi add ho jayega Todoarr ke andar

//   //   //but mujhe to add krna hai aur Todoarr ke andar ek array of objects hai to mujhe object destructuring krni pdegi ...(rest or spread) operator use krke 

//   //   //  setTodoarr((prevtodo)=> (todomsg,...prevtodo) ) // setTodoarr ek method hai todoarr ko change krne ke liye but agr mujhe todoarr ke previous objects chahiye to ek callback ke andar hi milte hai wo log ye sir ne ek interview question me counter wala demo diye the

//   //   //but ye upr wala tarika galat hai kyuki destructuring ke time to phle ke andr saari values add hoti hai aur phla to object hai

//   //   setTodoarr((prevtodo)=> [{id: Date.now(),...todomsg },...prevtodo] )//ye method ke andr ka callback to array of objects hi hoga na
//   // }

//   const addTodo = (todo) => {
//     setTodoarr((prev) => [{id: Date.now(),...todo}, ...prev] )
//   }

//    const updateTodo = (id,todomsg)=>{//yha pe map lagega kyuki mujhe array ke andar jaakr value update krni hai
//     setTodoarr((prevobjarr)=>{prevobjarr.map((prevobj)=>  prevobj.id === id ? prevobj.todomsg = todomsg : prevobj )})
//    }

//   const deleteTodo = (id)=>{//we will use filter here bcoz we need to filter out only tht values which do have id as tht of argument id
//     setTodoarr((preobjarr)=> preobjarr.filter((objtodo) => objtodo.id !== id ))//first argument is the array of object which is TodoArr in Todocontext.jsx and second is filter which is used to filter out only those objects whose condition is true inside that
//   }   


//   // const Toggletodo = (id)=>{
//   // setTodoarr((prevobjarr)=>prevobjarr.map((obj)=> {
//   //   if(obj.id===id){
//   //     // completed = !obj.completed;
//   //     return {...obj, completed: !obj.completed};
//   //   }
//   //   else{
//   //     return {obj};
//   //   }
//   // }))
//   // }

//   // the same Toggletodo method can be done in another way where for not writing  return I have not use {} bracktes  
//   const toggleComplete = (id)=>{
//     setTodoarr((prevobjarr)=> 
//     // yha mujhe array of objects mil gya hai ab uspe map lagaunga
//     prevobjarr.map((prevobj)=>
// // yha mujhe array ke andar ka object mil rha hai ab direct return krunga me values
//        prevobj.id === id ? {...prevobj, completed: !prevobj.completed} : prevobj
//     )
//     )
//   }


//   // now for storing values in local storage of browser we hve to do something bt remember its not for server side rendering
//   // hum yha useEffect use krenge kyuki wo automatic run ho jaega

//   //ab ye wala useEffect sirf get data krne ke liye hai
//   useEffect(() => {
//   //  to get values we need to write its key becoz they are stored in key value pair and in string form always so need to be converted in json
//   const data = JSON.parse(localStorage.getItem("anykey"))
//   if(data && data.length>0 ){
//    setTodoarr(data);//store this data which is an object here in the Todoarr
//   }
//   }, [])
  
// // ab me dusra useEffect use krunga set data krne ke liye
//  useEffect(() => {
//    localStorage.setItem("anykey", JSON.stringify(Todoarr))//key name should be same in getter and setter method
//  }, [Todoarr])
 

  
//   return (
//     <TodoProvider values={{Todoarr,addTodo,updateTodo,deleteTodo,toggleComplete}}>
//      <div className="bg-[#172842] min-h-screen py-8">
//                 <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
//                     <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
//                     <div className="mb-4">
//                         {/* Todo form goes here */} 
//                        <TodoForm/>
//                     </div>
//                     <div className="flex flex-wrap gap-y-3">
//                         {/*Loop and Add TodoItem here */}
//                         {Todoarr.map((todoObj) => (
//                           <div key={todoObj.id}
//                           className='w-full'
//                           >
//                             <TodoItem todo={todoObj} />
//                           </div>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//     </TodoProvider>
//   )
// }

// export default App
