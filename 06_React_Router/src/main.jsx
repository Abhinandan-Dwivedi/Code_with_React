import { children, StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom'
import Home from './componants/Home.jsx'
import Problems from './componants/Problems.jsx'
import Contest from './componants/Contest.jsx'
import { RouterProvider } from 'react-router-dom'
import Github , { dataloader} from './componants/Github.jsx'

// const router = createBrowserRouter(
// [  
//   {
//      path: '/',
//      element: <App/>,
//      children: [
//       {
//         path: '',
//         element: <Home />
//       },
//       {
//         path: "problems",
//         element: <Problems />
//       },
//       {
//         path: "contest",
//         element: <Contest />
//       },
//       {
//         path: "github",
//         element: <Github/>
//       }
//      ]
//   }
// ]
// )
// there is the second way to make a router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path  = '/' element  ={ <App/> } > 

    <Route path  = '' element  ={ < Home/> } /> 
    <Route path  = 'contest' element  ={ <Contest/> } /> 
    <Route path  = 'problems' element  ={ <Problems/> } /> 
    <Route loader = {dataloader} path  = 'github' element  ={ <Github/> } /> 
       
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
 <React.StrictMode>
   <RouterProvider router = { router }/>
 </React.StrictMode>
)
