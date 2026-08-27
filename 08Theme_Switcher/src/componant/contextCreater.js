import { useContext , createContext } from "react";
const  themecreater  = createContext(
   {  
    darktheme: ()=>{},
    lighttheme: ()=>{}
   }
)
export const Themeprovider   = themecreater.Provider;
export function usetheme(){
   return useContext(themecreater);
}