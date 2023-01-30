import React, { useState } from 'react'
import { Todo } from '../../Pages/Todo'
interface TodoItemsProps{
  data:Todo
  handleUpdate:(id:number)=>void
  handleDelete:(id:number)=>void
  handleEdit:(id:number,val:string)=>void
}
export default function TodoItems({data,handleUpdate,handleDelete,handleEdit}:TodoItemsProps) {
  const{status,text,id} = data
  const [flag,setFlag] = useState<boolean>(false)
  const [text2,setText] = useState<string>('')

  const handleUpdateSubmit=()=>{
    handleEdit(id,text2)
    setFlag(false)
  }
  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)
  }
  const title = <p onClick={()=>{setFlag(true)}}>{text}</p>
  const input = <div><input onChange={handleChange} type="text" /> <button onClick={()=>{handleUpdateSubmit()}}>Update</button></div>
  return (
    <div>   
        <li style={{display:'flex',justifyContent:'space-between' , columnGap:'50px',border:'1px solid white',width:'60%',margin:'auto',padding:'5px' }}>
           <p>{!flag? title:input} </p>
           <p style={{ cursor:'pointer' }} onClick={()=>{handleUpdate(id)}}>{status}</p>
           <button  style={{ backgroundColor:'tomato',cursor:'pointer' ,border:'none'}} onClick={()=>{handleDelete(id)}}>Delete</button>
        </li>    
    </div>
  )
}
