import React from 'react'
import CreateContext from './Usercontext'

function UsercontextProvider({children}) {
    const [name , setname]  = React.useState({});
    
  return (
     <CreateContext.Provider value={{name , setname}} >
    { children }
     </CreateContext.Provider>
  )
}

export default UsercontextProvider