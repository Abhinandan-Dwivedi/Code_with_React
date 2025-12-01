import { useState } from 'react'
import './App.css'
import Todoform from './componant/Todoform'; 
import Todoitem from './componant/TodoItem';
function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="flex flex-col items-center justify-center min-h-screen w-full bg-[rgba(0,0,0,0.8)] backdrop-blur-md text-white">
       <Todoform />
       <Todoitem /> 
    </div>
  )
}
export default App
