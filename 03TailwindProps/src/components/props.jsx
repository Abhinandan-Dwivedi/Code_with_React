import React from 'react'

export default function Props({Userdetail}) {
  return (
     <>
        <h1> Customer Detail </h1>
        <div className='m-5'> Name ={ Userdetail.name}  <br />
              Age   = {Userdetail.age}  <br />
              Id = {Userdetail.id}  <br />
        </div>  
     </>
  )
}
