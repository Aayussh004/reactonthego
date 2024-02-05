import React, { useState } from 'react'
import { useTodo } from '../context'

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false)
  const [todoMsg, setTodoMsg] = useState(todo.todo)
  const {updateTodo, deleteTodo, toggleComplete} = useTodo()

  const editTodo = () => {
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }
  const toggleCompleted = () => {
    //console.log(todo.id);
    toggleComplete(todo.id)
  }

  return (
      <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
              todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
          }`}
      >
          <input
              type="checkbox"
              className="cursor-pointer"
              checked={todo.completed}
              onChange={toggleCompleted}
          />
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  isTodoEditable ? "border-black/10 px-2" : "border-transparent"
              } ${todo.completed ? "line-through" : ""}`}
              value={todoMsg}
              onChange={(e) => setTodoMsg(e.target.value)}
              readOnly={!isTodoEditable}
          />
          {/* Edit, Save Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {
                  if (todo.completed) return;

                  if (isTodoEditable) {
                      editTodo();
                  } else setIsTodoEditable((prev) => !prev);
              }}
              disabled={todo.completed}
          >
              {isTodoEditable ? "📁" : "✏️"}
          </button>
          {/* Delete Todo Button */}
          <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
      </div>
  );
}

export default TodoItem;
// import React, { useState } from 'react'
// import { useTodo } from '../context';
// // import { useTodo } from '../contexts/TodoContext';

// function TodoItem({ todo }) {//yha pe mene each todo object bheja hai jo bhi array ke andar the

 
//     const {updateTodo,deleteTodo, toggleComplete} = useTodo();

//     const [editable, setEditable] = useState(false);//check krne ke liye editable h ya nhi
//     const [todonewmsg , setTodonewmsg] = useState(todo.todomsg);//todo.todomsg means purana message jo bhi hai usme add kro

//     const editTodo = ()=>{
//      updateTodo(todo.id, {...todo, todomsg: todonewmsg})
//      setEditable(false);
//     }

//     const toggle = ()=>{
//         // toggleCompleted(function parameters,{yha pe mei whi chize likhunga jo mujhe obj ke andr change krni hai});//isme hum isiliye 
//         toggleComplete(todo.id);//ab saari functionaliye to App.jsx me likh diye ho to yha kuch mt likho
//     }


//     return (
//         <div
//             className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-black ${
//                 todo.completed ? "bg-[#c6e9a7]" : "bg-[#ccbed7]"
//             }`}
//         >
//             <input
//                 type="checkbox"
//                 className="cursor-pointer"
//                 checked={todo.completed}//ye bhi context ki value h
//                 onChange={toggle}//ye methods direct context se utha ke laa rhe hai
//             />
//             <input
//                 type="text"
//                 className={`border outline-none w-full bg-transparent rounded-lg ${
//                     editable ? "border-black/10 px-2" : "border-transparent"
//                 } ${todo.completed ? "line-through" : ""}`}
//                 value={todonewmsg}
//                 onChange={(e) => setTodonewmsg(e.target.value)}//jo bhi input box me hoga whi to new msg hoga
//                 readOnly={!editable}//edit kre ya na kre 
//             />
//             {/* Edit, Save Button */}
//             <button
//                 className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
//                 onClick={() => {
//                     if (todo.completed) return;

//                     if (editable) {
//                         editTodo();
//                     } else setEditable((prev) => !prev);
//                 }}
//                 disabled={todo.completed}
//             >
//                 {editable ? "📁" : "✏️"}
//             </button>
//             {/* Delete Todo Button */}
//             <button
//                 className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
//                 onClick={() => deleteTodo(todo.id)}
//             >
//                 ❌
//             </button>
//         </div>
//     );
// }

// export default TodoItem;
