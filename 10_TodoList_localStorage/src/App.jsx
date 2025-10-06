import { useState } from 'react'
import TodoItem from './components/TodoItem';
import Todoform from './components/Todoform';
import './App.css'
import { TodoProvider } from './context/Creater'

function App() {
  const [todos, settodos] = useState([]);
  
  const addTodo = (todo) => {
    settodos((pre) => [{ id: Date.now(), todo }, ...pre]);
  }


  const updateTodo = (id, todo) => {
    settodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    settodos((prev) => prev.filter((todo) => todo.id != id))
  }

  return (
    <TodoProvider value={{ todos, addTodo, updateTodo, deleteTodo }} >
      <div className="bg-[#05162e] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto shadow-2xl shadow-black rounded-lg px-4 py-3 text-white">
          <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
          <div className="mb-4">
            <Todoform />
          </div>
          <div className="flex flex-wrap gap-y-3">
             
            {todos.map((todo) => (
              <div key={todo.id} className='w-full' >
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
