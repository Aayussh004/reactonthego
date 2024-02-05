import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoForm() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) => {
      e.preventDefault()

      if (!todo) return

      addTodo({ todo, completed: false})
      setTodo("")
    }

  return (
      <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={todo}
              onChange={(e) => setTodo(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  );
}

export default TodoForm;
// import React, { useContext, useState } from 'react'
// import { TodoContext, useTodo } from 'C:/Users/DELL/Desktop/reactonthego/10_Todocontextlocal/src/context/Todocontext.jsx';

// function TodoForm() {
 
//     const [todo, setTodo] = useState("")
//     const {addTodo} = useTodo();
//     // const {Addtodo} = useContext(TodoContext);

//     const Addfunc = (e)=>{
//         e.preventDefault();
//         if(!todo){
//             return;
//         }
//         // Addtodo({id: Date.now(),todomsg:msg,completed:false }) //but iski id to mei phle hi pass kr chuka hu App.jsx me to mei ab msg aur bool value hi pass krunga
//         addTodo({todomsg:todo, completed:false})
//         setTodo("")//ab msg khali krdo add hone ke baad
//     }

//     return (
//         <form onSubmit={Addfunc} className="flex">
//             <input
//                 type="text"
//                 placeholder="Write Todo..."
//                 className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
//                 value={todo}//usestate ki value to connect krni pdegi means wiring
//                 onChange={(e)=>setTodo(e.target.value)}//value usestate me add krdo
//             />
//             <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
//                 Add
//             </button>
//         </form>
//     );
// }

// export default TodoForm;

