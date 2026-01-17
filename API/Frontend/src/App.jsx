import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

//const axios  = require('axios'); 

function App() {
  const [count, setCount] = useState([])
  const [error, seterror] = useState(false);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    console.log(" the use effect called ")
      ; (async () => {
        try {
          setloading(true);
          const response = await axios.get('/api/products')
          setCount(response.data);
          // console.log("the data is ");
          seterror(false);
          setloading(false);
        } catch (error) {
          seterror(true);
        }
      })()

  }, [])
  if (error) {
    return <h1> somthing went wrong </h1>
  }
  if (loading) {
    return <h1> loading.... </h1>
  }
  return (
    <>
      <h1> the length of product is {count.length}</h1>
      {
        count.map((product) => (
          <div key={product.id}>
            <h3>{product.name}</h3>
            <p>{product.price}</p>
          </div>
        ))
      }

    </>
  )
}
export default App
