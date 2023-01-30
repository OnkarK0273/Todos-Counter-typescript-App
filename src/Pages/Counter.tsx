import React, { useState } from 'react'
import Btn from '../Components/Counter/Btn'

export default function Counter() {
    const [count,setCount] = useState<number>(0)
  return (
    <div>
        <h1>Counter app</h1>
        <h2>Count:{count}</h2>
        <div style={{display:'flex' ,justifyContent:'center'}}>
        <Btn text='dec' disable={count===0} handleClick={()=>{setCount(count - 1)}}/>
        <Btn text='inc' disable={count===5} handleClick={()=>{setCount(count + 1)}}/>
        </div>
    </div>
  )
}
