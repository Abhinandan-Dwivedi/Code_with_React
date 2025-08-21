import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'
import Props from './components/props'

function App( ) {
  const [count, setCount] = useState(0)
  const user1 = {
    name : "Ashish",
    age : 25,
    id : "Bholi police vali"
  }
  const user2 = {
    name : "Raja Babu",
    age : 35,
    id : "gori bholi Nisha "
  }
  return(
    <>
       <Props   Userdetail = {user1}/>
       <Props   Userdetail = {user2} />
    </>
  )
}

export default App
