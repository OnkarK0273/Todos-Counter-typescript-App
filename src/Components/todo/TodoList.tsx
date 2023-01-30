import React from 'react'
import { Todo } from '../../Pages/Todo'
import TodoItems from './TodoItems'
interface TodoitemProps{
  data:Todo[]
  handleUpdate:(id:number)=>void
  handleDelete:(id:number)=>void
  handleEdit:(id:number,val:string)=>void
}
export default function TodoList({data,handleUpdate,handleDelete,handleEdit}:TodoitemProps) {
  return (
    <div>
        
          {
            data.map((el)=>(<TodoItems key={el.id} data={el} handleUpdate={handleUpdate} handleDelete={handleDelete} handleEdit={handleEdit}/>))
          }
        
    </div>
  )
}
