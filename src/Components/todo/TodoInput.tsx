import React, { useState } from 'react'

interface todoinput{
  handleAdd:(text:string)=>void
}
export default function TodoInput({handleAdd}:todoinput) {
  const [text,setText] = useState<string>('')

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setText(e.target.value)
  }

  const handleSubmit=()=>{
    handleAdd(text)
    setText('')
  }
  return (
    <div>
      <input type="text" placeholder='enter todo..' onChange={handleChange}  />
      <button onClick={handleSubmit}>Add</button>
    </div>
  )
}
