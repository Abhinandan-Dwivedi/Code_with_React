import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Github() {
    // const [data, setdata] = useState("data is not fetched ");
    // useEffect( 
    //    () =>{
    //     fetch('https://api.github.com/users/Abhinandan-Dwivedi')
    //     .then(responce => responce.json())
    //     .then( res => setdata(res)) 
    //    }, []
    // )
    const data = useLoaderData();
  return (
    <div className='bg-gray-300 text-2xl text-black text-center justify-center h-auto'>Github Followers : { data.followers } 
        <img src = {data.avatar_url} alt="" />  
    </div>
  )
}

export default Github
export const dataloader = async()=>{
  const response  = await fetch('https://api.github.com/users/Abhinandan-Dwivedi')
  return response.json();
}