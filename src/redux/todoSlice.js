import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const getTodosAsync = createAsyncThunk(
    "todos/getTodosAsync", 
    async () => {
        const reponse = await fetch("http://localhost:8000/todos");
        if(reponse.ok){
            const todos = await reponse.json();
            return {todos}
        }
    }
)

export const createTodoAsync = createAsyncThunk("todos/createTodoAsync",
    async (payload)=>{
        const response = await fetch("http://localhost:8000/todos", 
        {
            method:'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title: payload.title})
        })
        if(response.ok){
            const todo = await response.json();
            return {todo};
        }
    }

)

export const ToggleTodoAsync = createAsyncThunk("todos/ToggleTodoAsync",
    async (payload)=>{
        const response = await fetch(`http://localhost:8000/todos/${payload.id}`, 
        {
            method:'PATCH',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({completed: payload.completed})
        })
        if(response.ok){
            const todo = await response.json();
            return {id: todo.id, completed: todo.completed};
        }
    }

)
export const DeleteTodoAsync = createAsyncThunk("todos/DeleteTodoAsync",
    async (payload)=>{
        const response = await fetch(`http://localhost:8000/todos/${payload.id}`, 
        {
            method:'DELETE',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({id: payload.id})
        })
        if(response.ok){
            const todos = await response.json();
            return {todos}
        }
    }

)

const todoSlice = createSlice({
    name: 'todos',
    initialState: [], 
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload)
        },
        toogleComplete: (state, action) => {
             const index = state.findIndex((item) => item.id === action.payload.id)
             state[index]['completed'] = action.payload.completed
            },
        deleteTodo: (state,action)=> {
            return state.filter((item) => item.id !== action.payload.id)
        }
    },
    extraReducers:{
        [getTodosAsync.fulfilled]: (state, action)=> {
            return action.payload.todos
        },
        [createTodoAsync.fulfilled]: (state, action) => {
            state.push(action.payload.todo)
        },
        [ToggleTodoAsync.fulfilled]: (state,action) => {
            const index = state.findIndex((item) => item.id === action.payload.id)
             state[index]['completed'] = action.payload.completed
        },
        [DeleteTodoAsync.fulfilled]: (state,action) => {
            return action.payload.todos

        },
    }
});

export const {addTodo, toogleComplete, deleteTodo} = todoSlice.actions;

export default todoSlice.reducer;