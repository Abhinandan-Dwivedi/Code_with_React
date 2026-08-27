import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <h1 className='text-amber-400 m-auto'>dubey ji</h1> */}
  </StrictMode>,
)
