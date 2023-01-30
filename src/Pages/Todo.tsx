import React, { useState } from 'react'
import TodoInput from '../Components/todo/TodoInput'
import TodoList from '../Components/todo/TodoList'
enum TodoStatus{
    PENDING = 'pending',
    DONE = 'done'
}

export interface Todo{
    id:number,
    text:string,
    status:TodoStatus
}
export default function Todos() {
    const [todos,setTodos] = useState<Todo[]>([])
    console.log(todos)

    const handleAdd=(text:string)=>{
        const payload:Todo={
                id:Date.now(),
                text,
                status: TodoStatus.PENDING
        }

        setTodos([...todos,payload])
    }

    const handleUpdate=(id:number)=>{

        const arr= todos.map((el)=>{
                if(el.id===id){
                    el.status= el.status===TodoStatus.PENDING? TodoStatus.DONE:TodoStatus.PENDING 
                }

            return el
        }) 

        setTodos(arr)

    }

    const handleDelete=(id:number)=>{
        let arr = todos.filter((el)=>el.id!==id)

        setTodos(arr)
    }

    const handleEdit=(id:number,val:string)=>{

        const arr = todos.map((el)=>{
            if(el.id===id){
                el.text = val
            }
            return el
        })

        setTodos(arr)

    }
  return (
    <div>
        <h1>Todo App</h1>
        <TodoInput handleAdd={handleAdd}/>
        <TodoList data={todos} handleUpdate={handleUpdate} handleDelete={handleDelete} handleEdit={handleEdit}/>
    </div>
  )
}
