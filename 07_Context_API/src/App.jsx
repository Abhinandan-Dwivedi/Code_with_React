import { useState } from 'react'
import InputPage from './componant/InputPage'
import ProfileData from './componant/profileData'
import './App.css'
import UsercontextProvider from './context/UsercontextProvider'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UsercontextProvider>

        <InputPage />
        <ProfileData />
      </UsercontextProvider>
    </>
  )
}

export default App
