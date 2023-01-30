import React from 'react'
interface buttonprops{
    text:string;
    handleClick:()=>void,
    disable:boolean
}
export default function Btn(props:buttonprops) {
  return (
    <div>
        <button disabled={props.disable} onClick={()=>{props.handleClick()}}>{props.text}</button>
    </div>
  )
}
