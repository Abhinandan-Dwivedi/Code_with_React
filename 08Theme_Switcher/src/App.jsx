import { useState, useEffect } from 'react'
import './App.css'
import { Themeprovider } from './componant/contextCreater'
import Themecolor from './Themecolor.jsx'
import Card from './componant/card.jsx'

function App() {
  const [theme, settheme] = useState("light")
  const darktheme = () => {
    settheme("dark");
  }
  const lighttheme = () => {
    settheme("light");
  }
  useEffect(() => {
    document.querySelector('html').classList.remove("light", "dark")
    document.querySelector('html').classList.add(theme)
  }, [theme])
  return (
    <Themeprovider value={{ darktheme, lighttheme }}>
      <div className="flex items-center justify-center   h-screen">
        <Themecolor />
        <div className="border-4  border-orange-500 w-1/2 h-1/2 dark:bg-gray-800 dark:text-white flex items-center justify-center  text-black bg-white">
          Current Theme: {theme}
        </div>
      </div>
      <Card />
    </Themeprovider>
  )
}
export default App