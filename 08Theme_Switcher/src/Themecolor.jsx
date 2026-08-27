import React, { useEffect, useState } from 'react'
import { usetheme } from './componant/contextCreater'

export default function Themecolor() {
    const { darktheme , lighttheme}   = usetheme();
    const [checkstatus  , setcheckstatus] =  useState(false);
    useEffect( ()=>
    {
         
        if ( checkstatus ) darktheme();
        else lighttheme();
    }, [checkstatus]

  )
  return (
    <div> 
        <input type="checkbox" 
               value=''
               checked={checkstatus} 
               onChange={(e)=> setcheckstatus(e.target.checked)} 
              id="myCheckbox"
        />
        <span> Toggle theme</span>
    </div>
  )
}
