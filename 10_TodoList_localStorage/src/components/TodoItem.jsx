import React, { useState } from 'react'
import { Usetodos } from '../context/Creater'

export default function TodoItem({todo}) {
    const [iseditable , setiseditable]  = useState(false);
    const [msg, setmsg] = useState(todo.todo); 
    const {deleteTodo , updateTodo}  = Usetodos();
    console.log(todo.todo);
    const  edit = ()=>{
        updateTodo(todo.id , { ...todo , todo : msg });
        setiseditable( false);
    }
  return (
     <div
          className={`flex border border-black/10 rounded-lg px-3 py-1.5 gap-x-3 shadow-sm shadow-white/50 duration-300  text-white `}
      >
          <input
              type="text"
              className={`border outline-none w-full bg-transparent rounded-lg ${
                  iseditable ? "border-black/10 px-2" : "border-transparent"
              }  `}
              value={msg} 
              onChange={(e) => setmsg(e.target.value)}
              readOnly={!iseditable}
          />
        <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0 disabled:opacity-50"
              onClick={() => {

                  if (iseditable) {
                      edit();
                  } else  setiseditable((prev) => !prev);
              }}
              
          >
              {iseditable? "📁" : "✏️"}
          </button>
           <button
              className="inline-flex w-8 h-8 rounded-lg text-sm border border-black/10 justify-center items-center bg-gray-50 hover:bg-gray-100 shrink-0"
              onClick={() => deleteTodo(todo.id)}
          >
              ❌
          </button>
    </div>
  )
}
