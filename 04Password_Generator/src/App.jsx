import { useCallback, useEffect, useState , useRef } from 'react'
// import './App.css'

function App() {
  const [length, setlength] = useState(8)
  const [ chara , setchar] = useState(false)
  const [ num , setnum] = useState(false)
  const [ password , setpassword] = useState("")

  let passwordgenerator = useCallback(() =>{
    let pass = ""
    let s  = "ABCDEFGHTJKLMNOPQRSTUVWXYZabcdefghtjklmnopqrstuvwxyz"
    if ( chara) s += "~!@#$%^&*"
    if( num ) s += "1234567890"
    for (let index = 0; index < length; index++) {
        const c = Math.floor(Math.random() *s.length +1) 
        pass += s.charAt(c)
      
    }
    setpassword(pass);
  }, [length , num , chara , setpassword])
  useEffect(()=>{
    passwordgenerator()
  }, [length , num , chara ,passwordgenerator])

  let passreference = useRef(null);

  let copytoclipboard = () =>{
    passreference.current?.select();
  window.navigator.clipboard.writeText(password) 
 }
  return (
    <>
       <h1 className='text-white flex justify-center text-4xl '> Password Generator </h1>
       <div  className=' text-white justify-center  p-2 m-3 h-40 bg-gray-700 rounded-2xl'  > 
        <div className='flex  justify-center gap-2 m-2 '>
         <input 
         type="text"
         value={password}
         className="outline-none w-100 text-black py-1 px-3 bg-blue-50 rounded"
         placeholder='Password'
         readOnly
         ref={passreference}
         />
          <button onClick={copytoclipboard} className='cursor-pointer bg-blue-50 rounded w-15 text-black'> Copy </button>
        </div>
        <div className='flex justify-center '>
          <input
          type="range"
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e) => {setlength(e.target.value)}}

          /> 
          <label className='bg-blue-500 rounded m-3'> length {length} </label>

           <input
          type="checkbox"
          defaultChecked={num}
          onChange={() => {
              setnum((prev) => !prev);
          }}
      />
          <label className='bg-blue-500 rounded m-3'> Number  </label> 
           <input
            type="checkbox"
            defaultChecked={chara}
            id="characterInput"
            onChange={() => {
              setchar((prev) => !prev )
              }}
          />
          <label htmlFor="" className='bg-blue-500 rounded m-3' > Character </label> 
        </div>
       </div>
    </>
  )
}
export default App