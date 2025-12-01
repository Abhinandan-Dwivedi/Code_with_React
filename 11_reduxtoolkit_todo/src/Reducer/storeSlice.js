import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
    todos: [
        {
            id: 1,
            todomsg: "hello todo macker"
        }
    ]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todom = {
                id: nanoid(),
                todomsg: action.payload
            }
            state.todos.push(todom)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        updatetodo: (state, action) => {
            const { id, newText } = action.payload
            const todo = state.todos.find(todo => todo.id === id)
            if (todo) 
                todo.todomsg = newText
        }
    }
});
export const {addTodo, removeTodo, updatetodo} = todoSlice.actions

export default todoSlice.reducer