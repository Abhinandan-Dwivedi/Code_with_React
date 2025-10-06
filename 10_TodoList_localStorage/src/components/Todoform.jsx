import React, { useEffect, useState } from 'react'
import { Usetodos } from '../context/Creater';

export default function Todoform() {
    const [msg , setmsg]   = useState("");
    const { addTodo } = Usetodos();
    // const [msg , setmsg] = useState("");
    
  const add = (e) => {
      e.preventDefault()
      if (msg.length == 0) return ;
      addTodo(msg);
      setmsg("")
    }

  return (
   <form onSubmit={add}  className="flex">
          <input
              type="text"
              placeholder="Write Todo..."
              className="w-full border border-black/10 rounded-l-lg px-3 outline-none duration-150 bg-white/20 py-1.5"
              value={msg}
              onChange={(e) => setmsg(e.target.value)}
          />
          <button type="submit" className="rounded-r-lg px-3 py-1 bg-green-600 text-white shrink-0">
              Add
          </button>
      </form>
  )
}
