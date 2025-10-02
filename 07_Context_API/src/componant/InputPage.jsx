import React, { useContext } from 'react'
import CreateContext from '../context/Usercontext'

function InputPage() {
    const [id , setid ]  = React.useState();
    const [password , setpassword ]  = React.useState();
    const [user , setuser ]  = React.useState();

    const {setname}  = useContext(CreateContext); 
    const handleSubmit = (e)=>{
        // e.preventDefault();
        setname( {user, id, password });
        // console.log("updated" , user) 
    }     
  return (
    <>
    <div>
        <h2>Login</h2>
        <input type='text'
        className='bg-gray-200 rounded shadow-lg'
        value= {user} 
        onChange={(e) => setuser(e.target.value) }
        placeholder='username'  />
        {" "}
        <input type='text' 
        className='bg-gray-200 rounded shadow-lg'
        value={password}
        onChange={(e) => setpassword(e.target.value) }
        placeholder='password'  />
        
        {" "}
        <input type='text' 
        value={id}
        
        onChange={(e) => setid(e.target.value) }
        placeholder='id' 
        className='bg-gray-200 rounded shadow-lg'
        />
         {" "}
        <button onClick={handleSubmit} className='bg-gray-200 rounded shadow-lg cursor-pointer hover:bg-blue-300' >Submit</button>
    </div>
    </>
  )
}

export default InputPage