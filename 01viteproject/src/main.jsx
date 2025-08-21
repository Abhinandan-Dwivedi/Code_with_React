import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

// also can render this react element 
function Myapp()
{
  return (
    <p> this is my app </p> 
   )
}
const anotherUser = "hellow react"
// another react element to render 
const Relement = React.createElement(
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherUser
)

// another element 
const Anotherele = (
   <h1> hellow another element user </h1>
)
createRoot(document.getElementById('root')).render(
    // react element 
//     Relement ,
    
// // or
//     // A JSX tree 
//     <StrictMode>
//       <App /> 
//     </StrictMode>, 

// or
    // fragment  
    <>
      <h1>Hello</h1>
      <p>This is an App</p>
    </>
    
)

/* What does .render() do?
 Converts your React components/JSX into actual DOM nodes.
 Inserts them inside the container you gave to createRoot.
 Keeps the DOM in sync with React’s virtual DOM (only updates what changed, not the whole page). */

/* render() → accepts one React element/tree/fragment.

Fragment =
          a wrapper that doesn’t show up in HTML.

Shorthand: <>...</>

Full form: <React.Fragment>...</React.Fragment> (can take key).

Helps keep the DOM clean and avoid unnecessary wrappers.*/ 
