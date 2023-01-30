import React from 'react'
import { Link } from 'react-router-dom'

export default function Nav() {
  return (

    <div>
        <div style={{display:'flex',justifyContent:'center' , columnGap:'50px' }} >
            <Link to='/' style={{ textDecoration:'none' ,color:'white' }}> Counter</Link>
            <Link to='/todo'  style={{ textDecoration:'none' ,color:'white' }}>Todo</Link>
        </div>
        <hr />
    </div>
  )
}
