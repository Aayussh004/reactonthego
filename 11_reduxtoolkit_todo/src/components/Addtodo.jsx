import React, {useState} from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice' 

function AddTodo() {

    const [input, setInput] = useState('')
    const dispatch = useDispatch()//kyuki yha se mujhe kuch changes krne hai store me to dispatch reducer(addTodo,removeTodo) ka use krke store me changes reflect krta hai

    const addTodoHandler = (e) => {
        e.preventDefault()//submit krne pr prevent to krna pdega
        
        dispatch(addTodo(input))//ye humne apna input varialbe bhej dia store ke addTodo me to ye add krdega user input ko, aur yhi to action.payload hai todoSlice.jsx ke andar

        setInput('')//ab todo add hone ke baad input ko khali krdo
    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo