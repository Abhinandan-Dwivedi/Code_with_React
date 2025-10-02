import React  , { useContext  }from 'react'
import CreateContext from '../context/Usercontext'
function ProfileData() {
const{ name }= useContext(CreateContext); 
  // console.log(name);
  //  console.log(name.id)
  
  if ( !name.id )return <div>name is not given </div> 
  else return (
   
    <div className='justify-center'>

      <p> the name  is { name.user }</p>  
      <p> the ID  is { name.id }</p>  
      <p> the password is { name.password }</p>  
    </div>
  )
}
export default ProfileData     