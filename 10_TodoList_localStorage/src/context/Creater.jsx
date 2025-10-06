import { useContext , useState , useEffect, createContext } from "react";
export const TodoContext = createContext({
    todos: [
        {
            id: 1,
            todo: " Todo msg",
            
        }
    ],
    addTodo: (todo) => {},
    updateTodo: (id, todo) => {},
    deleteTodo: (id) => {},
    
})
export const TodoProvider  =  TodoContext.Provider;
export const Usetodos = ()=> {
    return useContext(TodoContext);
}