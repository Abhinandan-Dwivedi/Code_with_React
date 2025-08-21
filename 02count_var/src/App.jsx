import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'


/*useState is a React Hook. 
React would not re-render your component, so the UI wouldn’t update.
With useState, React knows that count is special, and it will trigger a re-render whenever you call setCount
When you call setCount(15):

React updates the stored value (count = 15).

Then it re-runs your component function App().

This time, useState gives you [15, updaterFunction].
*/
function App() {
  const [count, setCount] = useState(10)
  const addone =  ()=> 
    {
        if( count >= 20) {
        setCount( 20);
    }
        else 
        setCount(count+1);
  }
  const  removeone =  ()=>
  {
    if ( count <= 0) setCount(0);
    else  
    setCount(count-1);

  }
  return (
    <>
       <h2 > count is { count }</h2>
       <button onClick={addone}> click to add one  </button>
       <br />
       <button onClick={removeone}> click to remove one </button>
    </>
  )
}

export default App
